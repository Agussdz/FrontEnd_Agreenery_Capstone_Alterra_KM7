import useCommunityComment from "../hooks/useCommunityComment";

export default function FarmCommunityComment({ postId, setPosts }) {
  const {
    comments,
    newComment,
    setNewComment,
    loggedInUserId,
    handleCommentSubmit,
    handleDeleteComment,
  } = useCommunityComment({ postId, setPosts });

  return (
    <div className="space-y-4 px-5">
      {/* Menampilkan komentar yang ada */}
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-3 mb-6">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
            <img
              src={comment.user.photo || "/placeholder.svg"}
              alt={comment.user.display_name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 p-2 rounded-md w-full">
              <h4 className="font-roboto-500 mb-1">
                {comment.user.display_name}
              </h4>
              <p className="text-sm">{comment.message}</p>
            </div>

            <div className="mt-1 flex gap-4">
              <button className="text-sm text-gray-500 hover:text-green-600">
                {new Date(comment.created_at).toLocaleDateString()}
              </button>
              {/* Menampilkan tombol delete hanya jika pengguna yang login adalah pembuat komentar */}
              {comment.user.id === loggedInUserId && (
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="text-sm text-gray-500 hover:text-error-500"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Form input komentar baru */}
      <div className="flex gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
          <img
            src="/placeholder.svg"
            alt="User"
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>

        <input
          type="text"
          placeholder="Tulis komentar"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-[80%] outline-none border-none rounded-md focus:ring-primary-400 bg-gray-100 focus:border-none p-3"
        />

        <button
          onClick={handleCommentSubmit}
          className="bg-primary-400 hover:bg-primary-500 px-4 rounded-md text-neutral-100"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
