import { useLocation } from "react-router-dom";
import useWeather from "../hooks/useWeather";

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detail Cuaca</h1>
      <div className="flex items-center">
        <img src={icon} alt={main} className="w-20 h-20 mr-4" />
        <div>
          <p className="text-lg font-bold">{main}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>Suhu: {temp}°C</p>
        <p>Suhu Minimal: {temp_min}°C</p>
        <p>Suhu Maksimal: {temp_max}°C</p>
        <p>Kelembaban: {humidity}%</p>
        <p>Kecepatan Angin: {wind_speed} m/s</p>
      </div>
    </div>
  );
}
