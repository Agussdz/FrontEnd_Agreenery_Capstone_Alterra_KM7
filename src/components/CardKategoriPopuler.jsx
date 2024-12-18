import React from "react";

export default function CardKategoriPopuler() {
  // Data kategori
  const categories = [
    { title: "Petani Muda", posts: "100 Postingan" },
    { title: "Petani Milenial", posts: "65 Postingan" },
    { title: "Sukses Bertani", posts: "50 Postingan" },
    { title: "Pupuk Tanaman", posts: "35 Postingan" },
    { title: "Teknologi Pertanian", posts: "30 Postingan" },
    { title: "Tanaman Hortikultura", posts: "20 Postingan" },
  ];

  return (
    <div className="max-w-[407px] h-[516px] bg-primary-100 bg-opacity-25 text-black p-6 rounded-lg shadow-lg">
      {/* Judul Card */}
      <h2 className="font-roboto-700 text-primary-800 text-[24px] mb-4">
        Kategori Populer
      </h2>

      {/* Daftar Kategori */}
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className=" text-neutral-500 font-roboto-500 text-[18px]">
              {category.title}
            </h3>
            <p className=" text-neutral-500 font-roboto-300 text-[14px]">
              {category.posts}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
