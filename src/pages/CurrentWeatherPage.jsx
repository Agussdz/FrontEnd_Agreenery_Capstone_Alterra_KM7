import React, { useState } from "react";
import { SidebarComponent } from "../components/SidebarComponent";
import { NavbarComponent } from "../components/NavbarComponent";
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi";
import useCurrentWeather from "../hooks/useCurrentWeather";
import TodayWeatherPage from "./TodayWeatherPage";
import { useNavigate } from "react-router-dom";
import bgcuaca from "../assets/background-cuaca.png";
import { FiArrowRight } from "react-icons/fi";

export default function CurrentWeatherPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { weatherData, loading, error } = useCurrentWeather();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Component */}
      <SidebarComponent isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <main
        className="flex-grow bg-gray-100 overflow-y-auto"
        style={{
          backgroundImage: `url(${bgcuaca})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hamburger Icon */}
        <div
          className="lg:hidden fixed top-2 left-2 bg-transparent text-primary-400 p-2 rounded-md z-50 cursor-pointer"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <HiOutlineArrowLeft className="w-6 h-6" /> // Closed icon
          ) : (
            <HiOutlineMenu className="w-6 h-6" /> // Hamburger icon
          )}
        </div>

        {/* Content Wrapper */}
        <div className="relative lg:pl-64">
          {/* Navbar Component */}
          <NavbarComponent />

          {/* Weather Content */}
          <div className="p-6 text-neutral-100">
            {loading && <p>Memuat data cuaca...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && weatherData && (
              <div className="max-w-3xl mx-auto flex items-center justify-between">
                {/* Weather Information */}
                <div className="flex-1">
                  <h2 className="font-roboto-500 text-[40px]">
                    {weatherData.main}
                  </h2>
                  <p className="font-roboto-500 mb-4">
                    {weatherData.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-roboto-300">
                      Suhu:{" "}
                      <strong className="font-roboto-700">
                        {weatherData.temp}&#8451;
                      </strong>
                    </p>
                    <p className="font-roboto-300">
                      Kelembapan:{" "}
                      <strong className="font-roboto-700">
                        {weatherData.humidity}%
                      </strong>
                    </p>
                    <p className="font-roboto-300">
                      Kecepatan Angin:{" "}
                      <strong className="font-roboto-700">
                        {weatherData.wind_speed} m/s
                      </strong>
                    </p>
                  </div>
                </div>

                {/* Weather Icon */}
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={weatherData.icon}
                    alt={weatherData.main}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          <TodayWeatherPage />

          {/* Navigation to Weekly Forecast */}
          <div
            className="text-end text-neutral-100 font-semibold mt-6 cursor-pointer pr-8 pb-8 flex items-center justify-end"
            onClick={() => navigate("/dailyweather")}
          >
            Lihat Prakiraan Cuaca Mingguan
            <FiArrowRight className="ml-2" />{" "}
            {/* Menambahkan ikon panah dengan margin kiri */}
          </div>
        </div>
      </main>
    </div>
  );
}
