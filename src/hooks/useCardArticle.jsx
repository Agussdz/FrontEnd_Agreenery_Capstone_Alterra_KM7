import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Sesuaikan path sesuai struktur proyek Anda

export const useCardArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosInstance.get(
          "articles?page=1&limit=2&sort=asc&publish_status=true"
        ); // Endpoint sesuai
        setArticles(response.data.data); // Pastikan sesuai struktur data API Anda
      } catch (err) {
        setError(err.message || "Error fetching articles");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};
