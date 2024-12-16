import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";

export default function useCategory() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data kategori (GET)
  const fetchCategories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get("/categories");
      if (response.data.meta.status) {
        setCategories(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError(err.response?.data?.meta?.message || "Error fetching data.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk menambah kategori (POST)
  const addCategory = async (newCategory) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/categories", newCategory);
      if (response.data.meta.status) {
        setCategories((prevCategories) => [...prevCategories, response.data.data]);
        Swal.fire({
          icon: "success",
          title: "Kategori Ditambahkan",
          text: "Kategori baru berhasil ditambahkan!",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      console.error("Error adding category:", err);
      setError(err.response?.data?.meta?.message || "Error adding category.");
      Swal.fire({
        icon: "error",
        title: "Gagal Menambahkan",
        text: error || "Terjadi kesalahan saat menambahkan kategori.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk mengedit kategori (PUT)
  const editCategory = async (id, updatedCategory) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.put(`/categories/${id}`, updatedCategory);
      if (response.data.meta.status) {
        setCategories((prevCategories) =>
          prevCategories.map((category) =>
            category.id === id ? response.data.data : category
          )
        );
        Swal.fire({
          icon: "success",
          title: "Kategori Diperbarui",
          text: "Kategori berhasil diperbarui!",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      console.error("Error updating category:", err);
      setError(err.response?.data?.meta?.message || "Error updating category.");
      Swal.fire({
        icon: "error",
        title: "Gagal Memperbarui",
        text: error || "Terjadi kesalahan saat memperbarui kategori.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk menghapus kategori (soft delete) (PUT)
  const deleteCategory = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.put(`/categories/${id}`, { deleted_at: new Date() });
      if (response.data.meta.status) {
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== id)
        );
        Swal.fire({
          icon: "success",
          title: "Kategori Dihapus",
          text: "Kategori berhasil dihapus!",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      console.error("Error deleting category:", err);
      setError(err.response?.data?.meta?.message || "Error deleting category.");
      Swal.fire({
        icon: "error",
        title: "Gagal Menghapus",
        text: error || "Terjadi kesalahan saat menghapus kategori.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data kategori saat komponen pertama kali dimuat
  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    isLoading,
    error,
    fetchCategories,
    addCategory,
    editCategory,
    deleteCategory,
  };
}
