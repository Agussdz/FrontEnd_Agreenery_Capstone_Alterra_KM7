import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import useReportStore from "../stores/useReportStore";
import Swal from "sweetalert2";

export default function useAdminCommunity() {
  const [reports, setReports] = useState([]);
  const [reportStatuses, setReportStatuses] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Ambil data laporan dari API saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axiosInstance.get(`/reports`, {
          params: {
            search: searchTerm,
          },
        });
        setReports(response.data.data);

        // Inisialisasi status checkbox berdasarkan status_done dari laporan
        const initialStatuses = response.data.data.reduce((acc, report) => {
          acc[report.id] = report.status_done; // Status true/false untuk setiap laporan
          return acc;
        }, {});

        setReportStatuses(initialStatuses);
      } catch (error) {
        console.error("Error fetching reports:", error);
        Swal.fire("Error", "Gagal mengambil data laporan.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Ambil fungsi setSelectedReportId dari store Zustand
  const { setSelectedReportId } = useReportStore();

  const handleActionsClick = (postId, reportId) => {
    setSelectedReportId(reportId);

    // Mengarahkan ke halaman berdasarkan post_id
    navigate(`/admin-komunitas/actions/${postId}`);
  };

  // Fungsi untuk menghapus laporan
  const handleDeleteReport = (reportId) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Laporan ini akan dihapus dan tidak bisa dipulihkan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleting...",
          text: "Menghapus laporan...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

        try {
          // Mengirim permintaan DELETE ke API
          const response = await axiosInstance.delete(`/reports/${reportId}`);
          if (response.status === 200) {
            Swal.fire("Terhapus!", "Laporan telah dihapus.", "success");

            setReports((prevReports) =>
              prevReports.filter((report) => report.id !== reportId)
            );
          }
        } catch (error) {
          Swal.fire(
            "Gagal",
            "Terjadi kesalahan saat menghapus laporan.",
            "error"
          );
          console.error("Error deleting report:", error);
        }
      }
    });
  };
  return {
    reports,
    setReports,
    reportStatuses,
    setReportStatuses,
    loading,
    searchTerm,
    setSearchTerm,
    handleSearchChange,
    handleActionsClick,
    handleDeleteReport,
  };
}
