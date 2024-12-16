import { useParams } from "react-router-dom";
import {
  ThumbsUp,
  MessageSquareText,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import useAdminCommunityActions from "../hooks/useAdminCommunityActions";

export default function AdminCommunityActions() {
  const { postId } = useParams();
  const {
    post,
    loading,
    error,
    postMenuOpen,
    togglePostMenu,
    handleDeletePost,
    handleSendWarning,
  } = useAdminCommunityActions(postId);

  if (error) {
    return <div>Error: Postingan Tidak Ada</div>;
  }

  if (!post) {
    return <div>Postingan Tidak Ada</div>;
  }

  return (
    <div>
      <div className="space-y-6 mx-auto p-10 bg-gray-100">
        <nav className="flex items-center space-x-2 bg-white p-4 text-sm text-gray-600 md:px-6 rounded-md">
          <Link to="/admin-komunitas" className="hover:text-gray-900">
            Komunitas Petani
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary-400">Tinjau</span>
        </nav>
        <div className="rounded-lg relative bg-white p-4 shadow">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                <img
                  src={post.user.photo || "/placeholder.svg"}
                  alt={post.user.display_name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{post.user.display_name}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => togglePostMenu(post.id)}
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
            {postMenuOpen === post.id && (
              <div className="absolute bg-white rounded-lg shadow-lg z-10 w-40 mt-6 me-2 right-0">
                <ul>
                  <li
                    className="block px-4 py-2 text-error-500 hover:bg-gray-100 cursor-pointer"
                    onClick={handleDeletePost}
                  >
                    Hapus Postingan
                  </li>

                  <li
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
                    onClick={handleSendWarning}
                  >
                    Beri Peringatan
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="mb-3">
            <span className="inline-block rounded-full bg-orange-500 px-3 py-1 text-sm text-white">
              {post.category}
            </span>
          </div>

          <p className="mb-4">{post.content}</p>
          {post.media && (
            <img
              src={post.media}
              alt="Post media"
              className="mb-4 max-w-[250px] object-cover rounded-md"
            />
          )}

          <div className="mb-4 flex gap-4 border-b pb-4">
            <div className="flex items-center">
              <button>
                <ThumbsUp
                  className={`mr-2 h-4 w-4 ${
                    post.is_liked ? "text-green-500" : "text-gray-600"
                  }`}
                />
              </button>
              <span className="text-sm text-gray-600">
                {post.count_likes} Likes
              </span>
            </div>
            <div className="flex items-center">
              <button>
                <MessageSquareText className="mr-2 h-4 w-4" />
              </button>
              <span className="text-sm text-gray-600">
                {post.count_comments} Comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
