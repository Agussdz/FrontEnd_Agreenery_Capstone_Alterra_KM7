import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function useDailyWeather() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDailyWeather = async (latitude, longitude) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/weathers/daily?lat=${latitude}&lon=${longitude}`
      );
      setWeatherData(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mengambil data cuaca harian.");
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
          fetchDailyWeather(latitude, longitude);
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
