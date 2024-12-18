import React from "react";
import useTodayWeather from "../hooks/useTodayWeather";

export default function TodayWeatherPage() {
  const { weatherData, loading, error } = useTodayWeather();

  return (
    <div className="p-6 text-neutral-100">
      <h1 className="font-roboto-500 text-[24px] mb-4">Cuaca Hari Ini</h1>
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
                  <h2 className="font-roboto-700 text-[20px]">
                    {weather.main}
                  </h2>
                  <p className="font-roboto-300 text-[14px]">
                    {weather.description}
                  </p>
                </td>

                {/* Detail Cuaca */}
                <td className="p-3 text-left">
                  <p className="font-roboto-300 text-[14px]">
                    Suhu: {weather.temp}°C
                  </p>
                  <p className="font-roboto-300 text-[14px]">
                    Kelembaban: {weather.humidity}%
                  </p>
                  <p className="font-roboto-300 text-[14px]">
                    Kecepatan Angin: {weather.wind_speed} m/s
                  </p>
                  <p className="text-gray-400 text-[14px]">
                    {new Date(weather.date_time).toLocaleDateString("id-ID", {
                      weekday: "long", // Hari
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-400 text-[14px]">
                    {new Date(weather.date_time).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
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
