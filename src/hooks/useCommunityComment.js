import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";

export default function useCommunityComment({ postId, setPosts }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loggedInUserId = localStorage.getItem("user_id");

  // Fetch komentar saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/posts/${postId}/comments`, {
          params: {
            page: 1,
            limit: 10,
            sort: "asc",
            sort_by: "created_at",
          },
        });
        setComments(response.data.data);
      } catch (err) {
        setError("Gagal memuat komentar.");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  // Menangani pengiriman komentar baru
  const handleCommentSubmit = async () => {
    if (!newComment) {
      Swal.fire("Error", "Komentar tidak boleh kosong!", "error");
      return;
    }

    try {
      setLoading(true);
      Swal.fire({
        title: "Posting komentar...",
        text: "Mohon tunggu sebentar...",
        didOpen: () => Swal.showLoading(),
        allowOutsideClick: false,
      });

      const response = await axiosInstance.post(`/posts/${postId}/comments`, {
        message: newComment,
      });

      // Menambahkan komentar baru ke daftar komentar
      setComments((prevComments) => [response.data.data, ...prevComments]);
      setNewComment("");
      Swal.fire("Success", "Komentar berhasil diposting!", "success");

      // Update jumlah komentar di post
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, count_comments: post.count_comments + 1 }
            : post
        )
      );
    } catch (error) {
      Swal.fire("Error", "Gagal menambahkan komentar", "error");
    } finally {
      setLoading(false);
    }
  };

  // Menangani penghapusan komentar
  const handleDeleteComment = async (commentId) => {
    try {
      setLoading(true);
      Swal.fire({
        title: "Menghapus komentar...",
        text: "Mohon tunggu sebentar...",
        didOpen: () => Swal.showLoading(),
        allowOutsideClick: false,
      });

      await axiosInstance.delete(`/posts/${postId}/comments/${commentId}`);

      // Menghapus komentar dari state setelah berhasil dihapus
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
      Swal.fire("Deleted", "Komentar telah dihapus.", "success");

      // Update jumlah komentar di post
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, count_comments: post.count_comments - 1 }
            : post
        )
      );
    } catch (error) {
      Swal.fire("Error", "Gagal menghapus komentar", "error");
    } finally {
      setLoading(false);
    }
  };
  return {
    comments,
    setComments,
    newComment,
    setNewComment,
    loading,
    setLoading,
    error,
    setError,
    loggedInUserId,
    handleCommentSubmit,
    handleDeleteComment,
  };
}
