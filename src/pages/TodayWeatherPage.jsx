import React from "react";
import useTodayWeather from "../hooks/useTodayWeather";

export default function TodayWeatherPage() {
  const { weatherData, loading, error } = useTodayWeather();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cuaca Hari Ini</h1>
      {loading && <p>Memuat data cuaca...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weatherData.map((weather, index) => (
            <div
              key={index}
              className="p-4 border rounded shadow-md bg-white flex flex-col items-center"
            >
              <img src={weather.icon} alt={weather.main} className="w-16 h-16" />
              <h2 className="text-xl font-bold">{weather.main}</h2>
              <p>{weather.description}</p>
              <p>Suhu: {weather.temp}°C</p>
              <p>Kelembaban: {weather.humidity}%</p>
              <p>Kecepatan Angin: {weather.wind_speed} m/s</p>
              <p className="text-sm text-gray-500">{weather.date_time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
