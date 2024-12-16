import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function useWeather(region) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!region) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get(
          `/weathers/current?region=${region}`
        );
        setWeather(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || "Gagal mengambil data cuaca.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [region]);

  return { weather, loading, error };
}
