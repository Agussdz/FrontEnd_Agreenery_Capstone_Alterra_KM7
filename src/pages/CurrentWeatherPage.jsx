import React from "react";
import useCurrentWeather from "../hooks/useCurrentWeather";
import TodayWeatherPage from "./TodayWeatherPage";
import { useNavigate } from "react-router-dom";

export default function CurrentWeatherPage() {
  const { weatherData, loading, error } = useCurrentWeather();
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <>
      <div className="p-6">
        {loading && <p>Memuat data cuaca...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && weatherData && (
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            {/* Informasi Cuaca */}
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">{weatherData.main}</h2>
              <p className="text-gray-600 mb-4">{weatherData.description}</p>
              <div className="space-y-2">
                <p>
                  Suhu: <strong>{weatherData.temp}°C</strong>
                </p>
                <p>
                  Kelembapan: <strong>{weatherData.humidity}%</strong>
                </p>
                <p>
                  Kecepatan Angin: <strong>{weatherData.wind_speed} m/s</strong>
                </p>
              </div>
            </div>

            {/* Ikon Cuaca */}
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

      {/* Navigasi */}
      <div
        className="text-center text-blue-600 font-semibold mt-6 cursor-pointer justify-end"
        onClick={() => navigate("/dailyweather")}
      >
        Lihat Prakiraan Cuaca Mingguan
      </div>
    </>
  );
}
