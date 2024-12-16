// Hook untuk mengambil data cuaca hari ini dengan lokasi otomatis
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function useTodayWeather() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get(
          `/weathers/today?lat=${latitude}&lon=${longitude}`
        );
        setWeatherData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || "Gagal mengambil data cuaca.");
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (err) => {
            setError("Gagal mendapatkan lokasi. Pastikan izin lokasi diaktifkan.");
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation tidak didukung oleh browser Anda.");
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  return { weatherData, loading, error };
}
