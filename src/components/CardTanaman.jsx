import React from "react";
import { Card } from "flowbite-react";
import useCardTanaman from "../hooks/useCardTanaman"; // Impor hook

export default function CardTanaman() {
  const { plants, loading, error } = useCardTanaman(); // Mengambil data tanaman

  if (loading) {
    return <p>Memuat data tanaman...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-wrap">
      {plants.map((plant) => (
        <Card key={plant.id} className="max-w-sm w-[180px] h-[247px] m-3">
          <div>
            <img
              src={plant.image} // Gambar tanaman
              alt={plant.name} // Nama tanaman sebagai alt text
              className="w-full h-auto object-cover rounded-t-lg"
            />
          </div>
          <p className="text-center font-roboto-400 text-[18px] text-neutral-400">
            {plant.name} {/* Nama tanaman */}
          </p>
        </Card>
      ))}
    </div>
  );
}
