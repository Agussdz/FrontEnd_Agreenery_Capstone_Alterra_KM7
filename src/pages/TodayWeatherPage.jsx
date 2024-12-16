import React from "react";
import useTodayWeather from "../hooks/useTodayWeather";

export default function TodayWeatherPage() {
  const { weatherData, loading, error } = useTodayWeather();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cuaca Hari Ini</h1>
      {loading && <p>Memuat data cuaca...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && weatherData.length > 0 && (
        <table className="min-w-full border-collapse">
          <tbody>
            {weatherData.map((weather, index) => (
              <tr key={index} className="border-b border-gray-300">
                {/* Ikon Cuaca */}
                <td className="p-3 text-center">
                  <img
                    src={weather.icon}
                    alt={weather.main}
                    className="w-12 h-12 object-contain mx-auto"
                  />
                </td>

                {/* Informasi */}
                <td className="p-3">
                  <h2 className="text-sm font-semibold">{weather.main}</h2>
                  <p className="text-gray-500 text-xs">{weather.description}</p>
                </td>

                {/* Detail Cuaca */}
                <td className="p-3 text-left">
                  <p className="text-xs">
                    Suhu: {weather.temp}°C
                  </p>
                  <p className="text-xs">
                    Kelembaban: {weather.humidity}%
                  </p>
                  <p className="text-xs">
                    Kecepatan Angin: {weather.wind_speed} m/s
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(weather.date_time).toLocaleDateString()}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!loading && !error && weatherData.length === 0 && (
        <p className="text-gray-500">Tidak ada data cuaca tersedia.</p>
      )}
    </div>
  );
}
