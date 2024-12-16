import { useLocation } from "react-router-dom";
import useWeather from "../hooks/useWeather";
import DailyWeatherPage from "./DailyWeatherPage";

export default function WeatherDetails() {
  const location = useLocation();
  const { region } = location.state || {}; // Ambil region dari navigasi sebelumnya
  const { weather, loading, error } = useWeather(region);

  if (!region) {
    return (
      <p>
        Region tidak tersedia. Kembali ke halaman sebelumnya dan pilih lokasi.
      </p>
    );
  }

  if (loading) {
    return <p>Memuat data cuaca...</p>;
  }

  if (error) {
    return <p>Terjadi kesalahan: {error}</p>;
  }

  if (!weather) {
    return <p>Tidak ada data cuaca untuk ditampilkan.</p>;
  }

  const {
    main,
    description,
    temp,
    temp_min,
    temp_max,
    humidity,
    wind_speed,
    icon,
  } = weather;

  return (
    <>
    <div className="p-6 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Detail Cuaca</h1>
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img src={icon} alt={main} className="w-24 h-24" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-xl font-bold">{main}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-lg">Suhu: {temp}°C</p>
        <p className="text-lg">Suhu Minimal: {temp_min}°C</p>
        <p className="text-lg">Suhu Maksimal: {temp_max}°C</p>
        <p className="text-lg">Kelembaban: {humidity}%</p>
        <p className="text-lg">Kecepatan Angin: {wind_speed} m/s</p>
      </div>
    </div>
    <DailyWeatherPage/>
    </>
  );
}
