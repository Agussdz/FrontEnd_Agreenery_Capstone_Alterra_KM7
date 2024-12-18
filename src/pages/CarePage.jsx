import { useState, useEffect } from "react";
import { SidebarComponent } from "../components/SidebarComponent"; 
import { NavbarComponent } from "../components/NavbarComponent"; 
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi"; 
import axiosInstance from "../utils/axiosInstance"; 
import { CirclePlus, Trash2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function SideAndNav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [careSteps, setCareSteps] = useState({});
  const { id } = useParams()
  const [error, setError] = useState(null); // State untuk menangani error

  const getCareSteps = async () => {
    try {
      // Panggil API enrollments
      const response = await axiosInstance.post(`/enrollments`, {plant_id: id}); 
      setCareSteps(response.data.data); 
      console.log("Data fetched:", response.data.data) 
    } catch (error) {
      console.error("Error fetching enrollments:", error);
      setError("Gagal mengambil data enrollments."); // Set error message
    }
  };

  useEffect(() => {
    getCareSteps(); 
  }, []); 

  const navigate = useNavigate();

const handleDetailClick = (id) => {
  navigate(`/perawatan-tanaman/${id}`);
};


  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar Component */}
        <SidebarComponent isSidebarOpen={isSidebarOpen} />

        {/* Content */}
        <main className="flex-grow bg-gray-100">
          {/* Hamburger Icon */}
          <div
            className="lg:hidden fixed top-2 left-2 bg-transparent text-primary-400 p-2 rounded-md z-50 cursor-pointer"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <HiOutlineArrowLeft className="w-6 h-6 align-middle" /> 
            ) : (
              <HiOutlineMenu className="w-6 h-6" /> 
            )}
          </div>

          {/* Content */}
          <div className="relative">
            {/* Navbar Component */}
            <NavbarComponent />
            <div className="mx-10 py-10">
              <h1 className="border-l-4 border-l-primary-100 text-lg font-roboto-700 text-primary-400 pl-2">Perawatan Tanaman</h1>
            </div>
            <div className="flex justify-end mx-20">
              <div className="bg-primary-400 text-neutral-100 pl-6 py-2 rounded-lg w-32">
                <button className="flex items-center gap-2">
                  <h1>Tambah</h1>
                  <CirclePlus className="text-neutral-100 h-4" />
                </button>
              </div>
            </div>
               
            <div className="p-4">
              <h1 className="text-xl font-bold">Data Enrollments</h1>
              {error ? ( // Tampilkan pesan error jika ada
                <p>{error}</p>
              ) : careSteps.length === 0 ? (
                <p>Data enrollments tidak ditemukan.</p>
              ) : (
                <div>
                    <div  className="flex flex-col gap-8 mr-8 mt-10 ml-5 mb-10">
                      <div className="border rounded-lg shadow-md bg-white flex gap-6 items-center h-full py-20 px-10">
                        <img src={careSteps.image} alt="" className="w-40 h-40" />
                        <div className="flex flex-col gap-4 mx-18">
                          <h2 className="font-roboto-700 text-xl text-gray-800"> {careSteps.name}</h2>
                          <span className="text-sm bg-yellow-400 text-white px-3 py-1 rounded-full self-start">{careSteps.category}</span>
                          <p className="text-gray-600 text-base leading-relaxed text-justify">{careSteps.description}</p>
                          {/* <p className="text-gray-600 text-base leading-relaxed">Rekomendasi Pupuk: {careSteps.fertilizer}</p> */}
                        
                        </div>
                          <div className="flex gap-8 items-center ">
                          
                            <button
                            onClick={() => handleDetailClick(careSteps.id)} 
                            className="bg-red-300 py-2 px-4 rounded-2xl text-red-800 hover:bg-red-500 hover:text-neutral-100 duration-300 ">Belum</button>
                            <Trash2 />
                          </div>
                      </div>
                    </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
