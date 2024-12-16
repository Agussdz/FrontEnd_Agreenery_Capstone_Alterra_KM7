import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";
import useReportStore from "../stores/useReportStore";

const useAdminCommunityActions = (postId) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postMenuOpen, setPostMenuOpen] = useState(null);
  const { selectedReportId, setSelectedReportId } = useReportStore();

  useEffect(() => {
    const fetchPost = async () => {
      // Menampilkan Loading saat mengambil data
      Swal.fire({
        title: "Loading...",
        text: "Mengambil data post...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      try {
        // Ambil data post berdasarkan postId yang ada di URL
        const response = await axiosInstance.get(`/posts/${postId}`);
        setPost(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        Swal.close();
      }
    };

    fetchPost();
  }, [postId]);

  // Fungsi untuk menangani Hapus Post dengan Pesan
  const handleDeletePost = () => {
    if (!selectedReportId) {
      Swal.fire("Gagal", "Report ID tidak ditemukan.", "error");
      return;
    }

    Swal.fire({
      title: "Hapus Postingan?",
      text: "Apakah Anda yakin ingin menghapus postingan ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleting...",
          text: "Menghapus postingan...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

        axiosInstance
          .post(`reports/${selectedReportId}/delete-post`, {
            message: "Kamu telah melanggar aturan pada komunitas ini",
          })
          .then((response) => {
            if (response.data.meta.status) {
              Swal.fire("Berhasil", "Post telah dihapus.", "success");
            } else {
              Swal.fire(
                "Gagal",
                "Terjadi kesalahan saat menghapus post.",
                "error"
              );
            }
          })
          .catch(() => {
            Swal.fire("Gagal", "Terjadi kesalahan, coba lagi.", "error");
          });
      }
    });
  };

  // Fungsi untuk menangani Kirim Peringatan
  const handleSendWarning = () => {
    if (!selectedReportId) {
      Swal.fire("Gagal", "Report ID tidak ditemukan.", "error");
      return;
    }

    const violationOptions = [
      "Spam",
      "Penyebaran Informasi Palsu",
      "Perilaku Tidak Pantas",
      "Pelanggaran Kebijakan",
    ];

    Swal.fire({
      title: "Pilih Pelanggaran",
      text: "Silakan pilih pelanggaran yang sesuai.",
      icon: "warning",
      input: "select",
      inputOptions: {
        options: violationOptions,
      },
      inputPlaceholder: "Pilih pelanggaran",
      showCancelButton: true,
      confirmButtonText: "Kirim",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedViolation = violationOptions[result.value];

        if (!selectedViolation) {
          Swal.fire(
            "Gagal",
            "Pilih jenis pelanggaran terlebih dahulu.",
            "error"
          );
          return;
        }

        const violationMessage = `Kamu telah melanggar aturan: ${selectedViolation}.`;

        // Menampilkan SweetAlert loading saat mengirim peringatan
        Swal.fire({
          title: "Processing...",
          text: "Mengirim peringatan...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

        // Kirim permintaan POST ke API dengan pesan yang disesuaikan
        axiosInstance
          .post(`reports/${selectedReportId}/send-warning`, {
            message: violationMessage,
          })
          .then((response) => {
            if (response.data.meta.status) {
              Swal.fire("Berhasil", "Peringatan telah dikirim.", "success");
            } else {
              Swal.fire(
                "Gagal",
                "Terjadi kesalahan saat mengirim peringatan.",
                "error"
              );
            }
          })
          .catch(() => {
            Swal.fire("Gagal", "Terjadi kesalahan, coba lagi.", "error");
          });
      }
    });
  };

  // Fungsi untuk toggle menu postingan
  const togglePostMenu = (postId) => {
    setPostMenuOpen(postMenuOpen === postId ? null : postId);
  };

  return {
    post,
    loading,
    error,
    postMenuOpen,
    togglePostMenu,
    handleDeletePost,
    handleSendWarning,
  };
};

export default useAdminCommunityActions;
