import React from "react";
import useCurrentWeather from "../hooks/useCurrentWeather";

export default function CardCuaca() {
  const { weatherData, loading, error } = useCurrentWeather();

  if (loading) {
    return <p>Memuat data cuaca...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="pl-4 pt-8">
      <div className="w-[630px] h-[297px] flex flex-col justify-between p-6 rounded-3xl bg-[#5EB7DE] backdrop-blur-lg shadow-lg relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {/* Menampilkan nama hari */}
            <p className="text-left  font-roboto-300 text-[36px] text-neutral-100">
              {new Date().toLocaleDateString("id-ID", { weekday: "long" })}
            </p>
            {/* Menampilkan tanggal, bulan, dan tahun */}
            <p className="text-left font-roboto-300 text-[18px] text-neutral-100">
              {new Date().toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="relative flex items-center rounded-full p-1 px-2">
            <p className="text-lg text-neutral-100 font-medium">
              {weatherData.city || "Kota Tidak Diketahui"}
            </p>
          </div>
        </div>

        {/* Suhu dan Waktu */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            {/* Suhu */}
            <p className="text-[42px] text-neutral-100 font-medium">
              {weatherData.temp ? `${weatherData.temp.toFixed(1)}°C` : "N/A"}
            </p>

            {/* Garis Tegak */}
            <div className="w- h-12 bg-neutral-100"></div>

            {/* Waktu */}
            <p className="text-[42px] text-neutral-100 font-medium">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          {/* Ikon Cuaca */}
          <div className="w-24 h-24">
            <img
              src={weatherData.icon || ""}
              alt={weatherData.main || "Ikon Cuaca"}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <p className="text-neutral-100 font-light">
            {weatherData.description || "Clear sky"}
          </p>
        </div>
      </div>
    </div>
  );
}
