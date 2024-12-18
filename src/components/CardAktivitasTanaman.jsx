import React from "react";

export default function CardAktivitasTanaman() {
  const aktivitas = [
    { id: 1, nama: "Menyiram tanaman jagung", waktu: "1 menit yang lalu" },
    { id: 2, nama: "Menyiram tanaman cabai", waktu: "45 menit yang lalu" },
    { id: 3, nama: "Menyiram tanaman tomat", waktu: "1 jam yang lalu" },
    { id: 4, nama: "Menyiram tanaman tomat", waktu: "1 jam yang lalu" },
  ];

  return (
    <div className="w-[407px] h-[516px] bg-primary-100 bg-opacity-25 rounded-lg p-6 shadow-lg">
      {/* Header */}
      <h2 className=" font-roboto-700 text-primary-800 text-[24px] mb-4">
        Aktivitas Hari Ini
      </h2>

      {/* List aktivitas */}
      <ul className="space-y-4">
        {aktivitas.map((item) => (
          <li key={item.id} className="flex flex-col">
            <span className=" text-neutral-500 font-roboto-500 text-[18px]">{item.nama}</span>
            <span className=" text-neutral-500 font-roboto-300 text-[]">{item.waktu}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
