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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weatherData.map((weather, index) => (
            <div
              key={index}
              className="p-4 border rounded shadow-md bg-white flex flex-col items-center"
            >
              <img
                src={weather.icon}
                alt={weather.main}
                className="w-16 h-16 mb-2"
              />
              <h2 className="text-xl font-bold">{weather.main}</h2>
              <p className="text-gray-600">{weather.description}</p>
              <p>Suhu: {weather.temp}°C</p>
              <p>Kelembapan: {weather.humidity}%</p>
              <p>Kecepatan Angin: {weather.wind_speed} m/s</p>
              <p className="text-sm text-gray-500">
                Tanggal: {new Date(weather.date_time).toLocaleDateString()}
              </p>
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
