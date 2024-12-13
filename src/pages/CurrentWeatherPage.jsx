import React from "react";
import useCurrentWeather from "../hooks/useCurrentWeather";

export default function CurrentWeatherPage() {
  const { weatherData, loading, error } = useCurrentWeather();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cuaca Hari Ini</h1>
      {loading && <p>Memuat data cuaca...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && weatherData && (
        <div className="p-4 border rounded shadow-md bg-white max-w-md mx-auto">
          <img
            src={weatherData.icon}
            alt={weatherData.main}
            className="w-16 h-16 mx-auto"
          />
          <h2 className="text-xl font-bold text-center">{weatherData.main}</h2>
          <p className="text-center text-gray-600">{weatherData.description}</p>
          <div className="mt-4">
            <p>Suhu: <strong>{weatherData.temp}°C</strong></p>
            <p>Kelembapan: <strong>{weatherData.humidity}%</strong></p>
            <p>Kecepatan Angin: <strong>{weatherData.wind_speed} m/s</strong></p>
          </div>
        </div>
      )}
    </div>
  );
}
