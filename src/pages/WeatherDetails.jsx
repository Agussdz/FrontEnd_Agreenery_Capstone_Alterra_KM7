import { useState } from "react";
import { SidebarComponent } from "../components/SidebarComponent";
import { NavbarComponent } from "../components/NavbarComponent";
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import useWeather from "../hooks/useWeather";
import DailyWeatherPage from "./DailyWeatherPage";
import bgcuaca from "../assets/background-cuaca.png";

export default function WeatherDetails() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Ambil data cuaca
  const location = useLocation();
  const { region } = location.state || {}; // Ambil region dari navigasi sebelumnya
  const { weather, loading, error } = useWeather(region);

  if (!region) {
    return (
      <p className="p-6 text-center">
        Region tidak tersedia. Kembali ke halaman sebelumnya dan pilih lokasi.
      </p>
    );
  }

  if (loading) {
    return <p className="p-6 text-center">Memuat data cuaca...</p>;
  }

  if (error) {
    return (
      <p className="p-6 text-center text-red-600">Terjadi kesalahan: {error}</p>
    );
  }

  if (!weather) {
    return (
      <p className="p-6 text-center">Tidak ada data cuaca untuk ditampilkan.</p>
    );
  }

  // Data cuaca
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
      <div className="flex h-screen">
        {/* Sidebar Component */}
        <SidebarComponent isSidebarOpen={isSidebarOpen} />

        {/* Main Content */}
        <main
          className="flex-grow"
          style={{
            backgroundImage: `url(${bgcuaca})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // Pastikan background tetap saat scroll
            height: "100vh", // Memastikan elemen utama mengambil seluruh tinggi layar
          }}
        >
          {/* Hamburger Icon */}
          <div
            className="lg:hidden fixed top-2 left-2 bg-transparent text-primary-400 p-2 rounded-md z-50 cursor-pointer"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <HiOutlineArrowLeft className="w-6 h-6 align-middle" /> // Arrow Close
            ) : (
              <HiOutlineMenu className="w-6 h-6" /> // Hamburger Menu
            )}
          </div>

          {/* Content */}
          <div
            className="relative lg:pl-64 overflow-y-auto"
            style={{ height: "calc(100vh - 4rem)" }}
          >
            {/* Navbar Component */}
            <NavbarComponent />

            {/* Detail Cuaca */}
            <div className="p-6 max-w-screen-lg mx-auto mt-4 bg-opacity-80 backdrop-blur-md">
              <h1 className="font-roboto-700 text-[64px] font-bold mb-6 text-left text-white">
                Detail Cuaca
              </h1>
              <div className="flex items-center justify-between">
                {/* Ikon Cuaca dan Deskripsi */}
                <div className="flex items-center space-x-4">
                  {/* Ikon Cuaca */}
                  <div className="flex-shrink-0">
                    <img src={icon} alt={main} className="w-32 h-32" />
                  </div>

                  {/* Deskripsi Cuaca */}
                  <div className="text-left text-white">
                    <p className="font-roboto-700 font-bold">{main}</p>
                    <p className=" font-roboto-300">{description}</p>
                  </div>
                </div>

                {/* Suhu di bagian kanan */}
                <div className="text-right text-white">
                  <p className="text-6xl font-roboto-700">{temp}°C</p>
                </div>
              </div>

              {/* Informasi Cuaca */}
              <div className="text-white mt-4 space-y-2">
                <p className="text-lg font-roboto-400 text-[14px]">
                  Suhu:<span className="font-roboto-700">{temp}°C</span>
                </p>
                <p className="text-lg font-roboto-400 text-[14px]">
                  Suhu Minimal:{" "}
                  <span className="font-roboto-700">{temp_min}°C</span>
                </p>
                <p className="text-lg font-roboto-400 text-[14px]">
                  Suhu Maksimal:{" "}
                  <span className="font-roboto-700">{temp_max}°C</span>
                </p>
                <p className="text-lg font-roboto-400 text-[14px]">
                  Kelembaban:{" "}
                  <span className="font-roboto-700">{humidity}%</span>
                </p>
                <p className="text-lg font-roboto-400 text-[14px]">
                  Kecepatan Angin:{" "}
                  <span className="font-roboto-700">{wind_speed} m/s</span>
                </p>
              </div>
            </div>

            {/* Prakiraan Mingguan */}
            <div className="bg-opacity-80 backdrop-blur-md p-6 max-w-screen-lg mx-auto mt-4">
              <DailyWeatherPage />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
