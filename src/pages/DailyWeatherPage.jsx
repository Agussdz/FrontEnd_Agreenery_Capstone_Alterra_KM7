import React from "react";
import useDailyWeather from "../hooks/useDailyWeather";

export default function DailyWeatherPage() {
  const { weatherData, loading, error } = useDailyWeather();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Prakiraan Cuaca Harian</h1>
      {loading && <p>Memuat data cuaca...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && weatherData.length > 0 && (
        <div className="flex flex-col space-y-4">
          {weatherData.map((weather, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-t border-gray-300 py-4"
            >
              {/* Ikon Cuaca */}
              <div className="flex-shrink-0 w-16 h-16">
                <img
                  src={weather.icon}
                  alt={weather.main}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Informasi Tengah */}
              <div className="flex-1 text-center">
                <h2 className="text-lg font-bold">{weather.main}</h2>
                <p className="text-gray-500">{weather.description}</p>
                <p className="text-sm text-gray-400">
                  {new Date(weather.date_time).toLocaleDateString()}
                </p>
              </div>

              {/* Suhu Rendah dan Tinggi */}
              <div className="text-right">
                <p className="bg-gray-200 px-2 py-1 rounded mb-1">
                  Low: {weather.temp_min}°C
                </p>
                <p className="bg-gray-200 px-2 py-1 rounded">
                  High: {weather.temp_max}°C
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {!loading && !error && weatherData.length === 0 && (
        <p className="text-gray-500">Tidak ada data cuaca tersedia.</p>
      )}
    </div>
  );
}
