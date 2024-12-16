import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";

export default function useCommunity() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [postMenuOpen, setPostMenuOpen] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const loggedInUserId = localStorage.getItem("user_id");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCategoriesAndPosts = async () => {
      try {
        const [categoryResponse, postResponse] = await Promise.all([
          axiosInstance.get("/categories", {
            params: {
              category_type: "article",
              limit: 10,
              page: 1,
            },
          }),
          axiosInstance.get("/posts", {
            params: { limit: 10, page: currentPage, search: searchTerm },
          }),
        ]);

        setCategories(categoryResponse.data.data);
        setTotalPages(postResponse.data.pagination.total_pages);
        setPosts(postResponse.data.data);
        setFilteredPosts(postResponse.data.data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesAndPosts();
  }, [currentPage, searchTerm]);

  // Filter Postingan
  useEffect(() => {
    if (selectedCategory === "" || selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category === selectedCategory)
      );
    }
  }, [selectedCategory, posts]);

  const handleCategorySelect = (categoryId, categoryName) => {
    setSelectedCategory(categoryName);
    setCategoryId(categoryId);
    setDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleLikeToggle = async (postId, isLiked) => {
    try {
      const response = await axiosInstance.post(`/posts/${postId}/like`, {});

      if (response.data.meta.status) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  is_liked: !isLiked,
                  count_likes: isLiked
                    ? post.count_likes - 1
                    : post.count_likes + 1,
                }
              : post
          )
        );
      }
    } catch (error) {
      Swal.fire(
        "Error",
        "Something went wrong while liking the post.",
        "error"
      );
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handlePostSubmit = async () => {
    if (!content || !categoryId) {
      Swal.fire("Error", "Content and category are required!", "error");
      return;
    }

    const result = await Swal.fire({
      title: "Apakah anda yakin ingin memposting?",
      text: "Konfirmasi jika sudah yakin",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Posting!",
    });

    if (result.isConfirmed) {
      const formData = new FormData();
      formData.append("content", content);
      if (media) {
        formData.append("media", media);
      }
      formData.append("category_id", categoryId);
      Swal.fire({
        title: "Memposting...",
        text: "Mohon tunggu sebentar...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      try {
        const response = await axiosInstance.post("/posts", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        // Otomatis mengupdate state jika terdapat postingan baru
        setPosts((prevPosts) => [
          {
            ...response.data.data,
            is_liked: false,
            count_likes: 0,
            count_comments: 0,
          },
          ...prevPosts,
        ]);

        Swal.fire("Success", "Post created successfully!", "success");

        // Reset form input
        setContent("");
        setMedia(null);
        setImagePreview(null);
        setCategoryId("");
        setSelectedCategory("");
      } catch (err) {
        Swal.fire("Error", "Gagal Membuat Postingan", "error");
      } finally {
        Swal.close();
      }
    }
  };

  const togglePostMenu = (postId) => {
    setPostMenuOpen(postMenuOpen === postId ? null : postId);
  };

  const handleDeletePost = (postId) => {
    Swal.fire({
      title: "Apakah anda yakin ingin menghapus?",
      text: "Postingan ini akan terhapus permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Menghapus...",
          text: "Mohon tunggu sebentar...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

        try {
          await axiosInstance.delete(`/posts/${postId}`);
          Swal.fire("Terhapus!", "Postingan anda berhasil terhapus", "success");
          setPosts(posts.filter((post) => post.id !== postId));
        } catch (error) {
          Swal.fire("Error", "Gagal Menghapus Postingan", "error");
        } finally {
          Swal.close();
        }
      }
    });
  };

  const handleReportPost = async (postId) => {
    const reportReasons = [
      "Spam atau iklan",
      "Konten Tidak Sesuai",
      "Pelanggaran Etika",
      "Konten Tidak Sesuai",
    ];

    Swal.fire({
      title: "Report Postingan",
      text: "Pilih alasan laporan anda",
      input: "select",
      inputOptions: reportReasons.reduce((options, reason) => {
        options[reason] = reason;
        return options;
      }, {}),
      inputPlaceholder: "Pilih laporan",
      showCancelButton: true,
      confirmButtonText: "Report",
    }).then(async (result) => {
      if (result.isConfirmed && result.value) {
        const reportType = result.value;

        const reportData = {
          report_type: reportType,
          post_id: postId,
        };

        // Show loading saat melaporkan
        Swal.fire({
          title: "Melaporkan...",
          text: "Mohon tunggu sebentar hingga laporan terkirim",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

        try {
          const response = await axiosInstance.post("reports", reportData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          // Menampilkan pesan sukses jika laporan berhasil dikirim
          if (response.data.meta.status) {
            Swal.fire("Reported!", "Laporan anda berhasil terkirim", "success");
          } else {
            Swal.fire("Error", "Gagal mengirimkan laporan", "error");
          }
        } catch (error) {
          Swal.fire("Error", "Gagal mengirimkan laporan", "error");
        }
      }
    });
  };

  return {
    categories,
    posts,
    setPosts,
    selectedCategory,
    loading,
    dropdownOpen,
    content,
    setContent,
    imagePreview,
    postMenuOpen,
    handleLikeToggle,
    handleCategorySelect,
    toggleDropdown,
    handleMediaChange,
    handlePostSubmit,
    togglePostMenu,
    handleDeletePost,
    loggedInUserId,
    handleReportPost,
    currentPage,
    totalPages,
    handlePageChange,
    filteredPosts,
    searchTerm,
    handleSearchChange,
  };
}
