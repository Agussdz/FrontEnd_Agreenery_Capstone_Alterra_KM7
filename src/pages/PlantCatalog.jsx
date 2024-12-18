import { Search } from 'lucide-react';
import { useState } from "react";

const plants = [
  {
    id: 1,
    name: "Tanaman Tomat",
    scientificName: "Solanum lycopersicum",
    category: "Tanaman Hortikultura",
    description: "Buah Tomat ( Lycopersicum Esculentum Mill) merupakan buah yang berasal dari benua Amerika, terdiri dari berbagai bentuk dan ukuran, tingginya bisa mencapai 2,5 meter, ditanam sebagai tanaman buah di ladang, pekarangan, atau ditemukan liar di ketinggian 1-1600 derajat Celcius. Tomat tergolong buah karena merupakan bagian tumbuhan yang dapat dimakan yang mengandung biji atau biji.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Tanaman Jagung",
    scientificName: "Zea mays",
    category: "Tanaman Pangan",
    description: "Jagung (Zea mays) merupakan tanaman semusim yang termasuk keluarga graminae. Tanaman jagung hidup di daerah tropis maupun subtropis dengan suhu tumbuh optimum berkisar antara 30-32°C namun dapat hidup pada suhu terendah pada 9°C dan suhu tertinggi pada 44°C. Jagung secara botani termasuk buah, karena dihasilkan dari bunga atau ovarium tanaman jagung.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Tanaman Cabai",
    scientificName: "Capsicum frutescens",
    category: "Tanaman Hortikultura",
    description: "Cabai merupakan tanaman perdu yang termasuk dalam keluarga Solanaceae. Tanaman ini memiliki banyak varietas dengan bentuk dan tingkat kepedasan yang berbeda-beda.",
    image: "/placeholder.svg"
  }
];

const categories = ["All", "Tanaman Pangan", "Tanaman Hortikultura", "Tanaman Industri"];

export default function PlantCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlants = plants.filter(plant => {
    const matchesCategory = selectedCategory === "All" || plant.category === selectedCategory;
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Perawatan Tanaman
            </a>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-green-600 font-medium">Daftar Tanaman</li>
        </ol>
      </nav>

      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Cari disini..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${category === selectedCategory
                ? category === "All"
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border-2 border-green-600"
                : "bg-white text-gray-600 border border-gray-300 hover:border-green-600 hover:text-green-600"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Plant List */}
      <div className="space-y-6">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h2 className="text-xl font-bold text-gray-900">
                    {plant.name}
                  </h2>
                  <span className="text-gray-600">
                    ({plant.scientificName})
                  </span>
                </div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-orange-700 bg-orange-100 rounded-full mb-4">
                  {plant.category}
                </span>
                <p className="text-gray-600 mb-4">
                  {plant.description}
                </p>
                <button className="inline-flex items-center px-4 py-2 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-colors">
                  Tambah
                  <span className="ml-2">+</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
