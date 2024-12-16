import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";

export default function useAdminUploadArticle(article, closeModal) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    article ? article.category_id : ""
  );
  const [thumbnailPreview, setThumbnailPreview] = useState(
    article ? article.thumbnail : ""
  );
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [title, setTitle] = useState(article ? article.title : "");
  const [content, setContent] = useState(article ? article.content : "");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories", {
          params: {
            page: 1,
            limit: 10,
            category_type: "article",
          },
        });
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnailPreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingSwal = Swal.fire({
      title: "Sedang memproses...",
      text: "Mohon tunggu sebentar.",
      showConfirmButton: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category_id", selectedCategory);
    formData.append("publish_status", true);
    if (thumbnailFile) {
      formData.append("thumbnail", thumbnailFile);
    }

    try {
      const response = article
        ? await axiosInstance.put(`/articles/${article.id}`, formData)
        : await axiosInstance.post("/articles", formData);

      loadingSwal.close();

      Swal.fire({
        title: article
          ? "Artikel berhasil diperbarui!"
          : "Artikel berhasil ditambahkan!",
        icon: "success",
      });

      closeModal();
    } catch (error) {
      loadingSwal.close();
      Swal.fire({
        title: "Terjadi kesalahan!",
        text: error.response?.data?.message || "Silakan coba lagi.",
        icon: "error",
      });
    }
  };
  return {
    categories,
    selectedCategory,
    thumbnailPreview,
    title,
    setTitle,
    setSelectedCategory,
    content,
    handleFileChange,
    handleSubmit,
    setContent,
  };
}
