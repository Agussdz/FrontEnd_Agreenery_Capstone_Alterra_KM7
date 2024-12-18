import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { SidebarComponent } from "../components/SidebarComponent"; 
import { NavbarComponent } from "../components/NavbarComponent"; 
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi"; 
import logo from "../assets/empty.svg";
import axiosInstance from "../utils/axiosInstance";
import { CirclePlus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SideAndNav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);  
  const [searchQuery, setSearchQuery] = useState("");  
  const endPoint = "/plants"; 
  const navigate = useNavigate();


  const location = useLocation(); // Hook untuk mendeteksi lokasi saat ini

  // Fungsi untuk mengambil data dari API
  const getPlants = async () => {
    try {
      const response = await axiosInstance.get(endPoint);  
      setData(response.data.data); 
      
    } catch (error) {
      console.log("Error fetching data:", error); 
    }
  };

  useEffect(() => {
    getPlants();  
  }, []);

  // Fungsi untuk memfilter data berdasarkan kata kunci pencarian
  const filteredData = data.filter((item) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Menentukan kelas berdasarkan path saat ini
  const isCarePage = location.pathname === "/care"; // Menyesuaikan path perawatan tanaman



  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <SidebarComponent isSidebarOpen={isSidebarOpen} />

      {/* Content */}
      <main className="flex-grow bg-gray-100 min-h-screen overflow-y-scroll ">
        {/* Hamburger Icon */}
        <div
          className="lg:hidden fixed top-2 left-2 bg-transparent text-primary-400 p-2 rounded-md z-50 cursor-pointer"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <HiOutlineArrowLeft className="w-6 h-6 align-middle" /> // Closed icon
          ) : (
            <HiOutlineMenu className="w-6 h-6" /> // Hamburger icon
          )}
        </div>

        {/* Content */}
        <div className="relative lg:pl-64">
          {/* Navbar Component */}
          <NavbarComponent />

          <div className="mx-10 py-10">
            <h1
              className={`border-l-4 border-l-primary-100 text-lg font-roboto-700 text-primary-400 pl-2 ${
                isCarePage ? "text-gray-400" : "" 
              }`}
            >
              Perawatan Tanaman
            </h1>
          </div>

          {/* Search Input */}
          <div className="relative p-4 bg-gray-100 mx-6 w-4/5 mb-4">
            <input
              type="text"
              placeholder="Cari disini..."
              className="w-full px-4 py-2 pl-10 border bg-transparent border-gray-300 rounded-lg shadow-sm"
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>

          <div className="flex gap-4 mx-10">
            {/* Tombol Filter */}
            <button
              className={`px-4 py-2 ${isCarePage ? "bg-primary-400 text-white" : "border border-primary-400 text-primary-400"} rounded-full hover:bg-primary-600`}
            >
              All
            </button>

            <button
              className={`px-4 py-2 ${isCarePage ? "bg-primary-400 text-white" : "border border-primary-400 text-primary-400"} rounded-full hover:bg-primary-600`}
            >
              Tanaman Pangan
            </button>

            <button
              className={`px-4 py-2 ${isCarePage ? "bg-primary-400 text-white" : "border border-primary-400 text-primary-400"} rounded-full hover:bg-primary-600`}
            >
              Tanaman Hortikultura
            </button>

            <button
              className={`px-4 py-2 ${isCarePage ? "bg-primary-400 text-white" : "border border-primary-400 text-primary-400"} rounded-full hover:bg-primary-600`}
            >
              Tanaman Industri
            </button>
          </div>
              
          {/* Konten Kondisional */}
          {filteredData.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <div className="text-center -mb-5 mt-5 font-roboto-700 text-lg">
                  <p>Data Perawatan</p>
                  <p>Tanaman Kosong</p>
              </div>
              <img src={logo} alt="Logo" className="" />
            </div>
          ) : (
            <div className="flex flex-col gap-8 mr-8 mt-10 ml-5 mb-10">
              {filteredData.map((item, index) => (
                <div
                  key={index}
                  className="p-10 border rounded-lg shadow-md bg-white flex gap-6 items-start h-96"
                >
                  {/* Gambar di samping */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 flex items-center mt-14 "
                  />

                  {/* Konten lainnya */}
                  <div className="flex flex-col gap-4">
                    {/* Nama tanaman */}
                    <h2 className="font-roboto-700 text-xl text-gray-800">{item.name}</h2>

                    {/* Kategori */}
                    <span className="text-sm bg-yellow-400 text-white px-3 py-1 rounded-full self-start">
                      {item.category}
                    </span>

                    {/* Deskripsi */}
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Rekomendasi Pupuk: {item.fertilizer}
                    </p>

                    {/* Tombol Tambah */}
                    <button
                      className="mt-4 px-4 py-2 bg-transparent border border-primary-500 text-primary-500 rounded-lg flex items-center gap-2 hover:bg-primary-600 hover:text-white w-28"
                      onClick={() => navigate(`/care/${item.id}`)} // Gunakan backticks dan nama fungsi yang benar
                    >
                      Tambah <CirclePlus size={18} />
                    </button>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}