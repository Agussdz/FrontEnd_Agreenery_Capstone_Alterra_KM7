import {
  ChevronRight,
  Eye,
  Link as ExternalLink,
  ThumbsUp,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { Spinner } from "flowbite-react";

export default function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/articles/${id}`);
        if (response.data.meta.status) {
          setArticle(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching article details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center mt-[20%]">
        <Spinner
          theme={{ color: { success: "fill-[#3DAC21]" } }}
          color="success"
          aria-label="Extra large spinner example"
          size="xl"
        />
        <span className="mt-4 font-roboto-400 text-neutral-500">
          Memuat data..
        </span>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 bg-white p-4 text-sm text-gray-600 md:px-6">
        <Link to="/homepage" className="hover:text-gray-900">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/artikel-pertanian" className="hover:text-gray-900">
          Artikel Pertanian
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-primary-400">Artikel</span>
      </nav>

      <div className="mx-auto max-w-6xl px-4 bg-white py-6 md:px-6 mt-8">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            {article.title}
          </h1>

          <div className="mb-4 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
              {article.category}
            </span>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>by {article.user.display_name}</span>
              <span>•</span>
              <span>{new Date(article.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        </header>

        {/* Image */}
        <div className="relative mb-8 w-full overflow-hidden rounded-lg">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="object-cover w-full"
          />
        </div>

        {/* Article Content */}
        <div
          className="article-content article-ollist prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
}
