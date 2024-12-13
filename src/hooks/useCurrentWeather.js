import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function useCurrentWeather() {
  const [weatherData, setWeatherData] = useState(null); // Fokus pada 1 data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCurrentWeather = async (latitude, longitude) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/weathers/current?lat=${latitude}&lon=${longitude}`
      );
      setWeatherData(response.data.data); // Ambil hanya data penting
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mengambil data cuaca.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getLocationAndFetchWeather = () => {
      if (!navigator.geolocation) {
        setError("Geolocation tidak didukung oleh browser Anda.");
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCurrentWeather(latitude, longitude);
        },
        () => {
          setError("Gagal mendapatkan lokasi. Pastikan izin lokasi diaktifkan.");
          setLoading(false);
        }
      );
    };

    getLocationAndFetchWeather();
  }, []);

  return { weatherData, loading, error };
}
