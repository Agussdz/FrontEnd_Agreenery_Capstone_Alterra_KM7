import { Spinner } from "flowbite-react";
import useArticle from "../hooks/useArticle";
import { Link } from "react-router-dom";

export default function Article() {
  const { posts, activeTab, setActiveTab, loading, tabs, timeAgo } =
    useArticle();
  return (
    <div className="max-h-screen bg-gray-50 lg:px-14 py-6 p-5 ">
      <div className="border-l-4 mb-8 border-primary-100 px-4 py-2 flex flex-row gap-4 justify-between items-center">
        <div>
          <h1 className="text-xl font-roboto-700 text-primary-400">
            Artikel Pertanian
          </h1>
        </div>
      </div>
      {/* Tabs */}
      <div className="mb-6 flex space-x-4 lg:px-0 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-primary-400 text-white"
                : "text-primary-400 border border-primary-400 hover:bg-gray-100"
            }`}
            aria-pressed={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Loading Animation */}
      {loading && (
        <div className="flex flex-col justify-center items-center mt-[10%]">
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
      )}

      {/* Posts Grid */}
      {!loading && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          {posts.map((post) => (
            <Link key={post.id} to={`/artikel-pertanian/${post.id}`}>
              <div className="overflow-hidden rounded-xl bg-white text-neutral-600 shadow-lg lg:min-h-[370px] mt-5">
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-tl-lg rounded-tr-lg">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h2 className="mt-4 text-lg font-roboto-500 leading-tight pb-2 px-8">
                  {post.title}
                </h2>
                <div className="mt-2 font-normal text-sm text-neutral-400 px-8">
                  <div className="line-clamp-1">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.content,
                      }}
                    />
                  </div>
                </div>

                <p className="text-sm text-primary-600 pt-4 px-8 mb-5">
                  {new Date(post.created_at).toLocaleDateString()} |{" "}
                  {timeAgo(post.created_at)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
