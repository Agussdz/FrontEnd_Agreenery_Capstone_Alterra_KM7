import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";

export default function useAdminArticle() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosInstance.get("/articles", {
          params: {
            page: 1,
            limit: 10,
            sort_by: "created_at",
            sort: "asc",
            search: searchTerm,
            publish_status: true,
          },
        });

        setArticles(response.data.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        Swal.fire({
          title: "Gagal!",
          text: "Terjadi kesalahan saat mengambil artikel.",
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const deleteArticle = async (articleId) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Artikel ini akan dihapus secara permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "Menghapus...",
        text: "Harap tunggu.",
        icon: "info",
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        await axiosInstance.delete(`/articles/${articleId}`);
        setArticles(articles.filter((article) => article.id !== articleId));

        Swal.fire({
          title: "Sukses!",
          text: "Artikel berhasil dihapus.",
          icon: "success",
        });
      } catch (error) {
        console.error("Error deleting article:", error);

        Swal.fire({
          title: "Gagal!",
          text: "Terjadi kesalahan saat menghapus artikel.",
          icon: "error",
        });
      }
    }
  };
  return {
    articles,
    loading,
    isModalOpen,
    searchTerm,
    setSearchTerm,
    selectedArticle,
    openModal,
    closeModal,
    handleSearchChange,
    deleteArticle,
  };
}
