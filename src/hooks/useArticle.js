import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

export default function useArticle() {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);

  const tabs = ["All", "Terbaru"];

  // Mengambil data artikel dari API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);

        let sort_by = "";
        let sort_order = "";

        if (activeTab === "Terbaru") {
          sort_by = "created_at";
          sort_order = "desc";
        } else {
          sort_by = "created_at";
          sort_order = "asc";
        }

        // Melakukan request ke API
        const response = await axiosInstance.get("/articles", {
          params: {
            page: 1,
            limit: 10,
            sort_by: sort_by,
            sort: sort_order,
            publish_status: true,
          },
        });

        if (response.data.meta.status) {
          setPosts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching articles", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [activeTab]);

  // Fungsi untuk menghitung waktu yang lalu
  const timeAgo = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1)
      return interval === 1 ? "1 tahun lalu" : `${interval} tahun lalu`;
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1)
      return interval === 1 ? "1 bulan lalu" : `${interval} bulan lalu`;
    interval = Math.floor(seconds / 86400);
    if (interval >= 1)
      return interval === 1 ? "1 hari lalu" : `${interval} hari lalu`;
    interval = Math.floor(seconds / 3600);
    if (interval >= 1)
      return interval === 1 ? "1 jam lalu" : `${interval} jam lalu`;
    interval = Math.floor(seconds / 60);
    if (interval >= 1)
      return interval === 1 ? "1 menit lalu" : `${interval} menit lalu`;
    return seconds === 1 ? "1 detik lalu" : `${seconds} detik lalu`;
  };

  return { posts, activeTab, setActiveTab, loading, tabs, timeAgo };
}
