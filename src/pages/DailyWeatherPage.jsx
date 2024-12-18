import React from "react";
import useDailyWeather from "../hooks/useDailyWeather";

export default function DailyWeatherPage() {
  const { weatherData, loading, error } = useDailyWeather();

  return (
    <div
      className="min-h-screen relative bg-[url('/images/background-cuaca.png')] 
      bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay Blur */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md z-0"></div>

      {/* Konten Cuaca */}
      <div className="relative p-6 max-w-screen-lg mx-auto text-white z-10">
        <h1 className="font-roboto-700 text-[24px]">Prakiraan Cuaca Mingguan</h1>
        <p className="font-roboto-300">Prakiraan cuaca selama satu minggu ke depan</p>
        {loading && <p>Memuat data cuaca...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && weatherData.length > 0 && (
          <div className="flex flex-col space-y-4 mt-4">
            {weatherData.map((weather, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-t border-gray-400 py-4"
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
                  <h2 className="font-roboto-500">{weather.main}</h2>
                  <p className="font-roboto-300">{weather.description}</p>
                  <p className="text-sm text-gray-300">
                    {new Date(weather.date_time).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                {/* Suhu Rendah dan Tinggi */}
                <div className="text-right">
                  <p className="bg-gray-700 text-white px-2 py-1 rounded font-roboto-400 mb-1">
                    Low: {weather.temp_min}°C
                  </p>
                  <p className="bg-gray-700 text-white px-2 py-1 rounded">
                    High: {weather.temp_max}°C
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {!loading && !error && weatherData.length === 0 && (
          <p className="text-gray-200">Tidak ada data cuaca tersedia.</p>
        )}
      </div>
    </div>
  );
}
