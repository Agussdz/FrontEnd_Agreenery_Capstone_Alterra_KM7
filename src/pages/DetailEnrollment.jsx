import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { NavbarComponent } from "../components/NavbarComponent";
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi";
import { CirclePlus } from "lucide-react";
import SidebarCare from "../components/SidebarCare";

export default function DetailEnrollment() {
  const { enrollmentId } = useParams(); 
  const [enrollmentData, setEnrollmentData] = useState(null);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // GET request untuk mengambil data berdasarkan ID
    const fetchDetail = async () => {
      try {
        const response = await axiosInstance.get(`/enrollments/${enrollmentId}`);
        setEnrollmentData(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error("Gagal mengambil data detail:", error);
        setError("Gagal mengambil data detail.");
      }
    };

    fetchDetail();
  }, [enrollmentId]);

  return (
    

    <div className="relative">
       <div className="flex h-screen">
        {/* Sidebar Component */}
        {/* <SidebarCare isSidebarOpen={isSidebarOpen} /> */}
        <SidebarCare step={enrollmentData?.steps}/>

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
            {/* <div className="flex justify-end mx-20">
              <div className="bg-primary-400 text-neutral-100 pl-6 py-2 rounded-lg w-32">
                <button className="flex items-center gap-2">
                  <h1>Tambah</h1>
                  <CirclePlus className="text-neutral-100 h-4" />
                </button>
              </div>
            </div> */}
            <div>
            {enrollmentData ? (
              <h2 className="text-lg font-semibold">
                {/* Nama: {enrollmentData.name} */}
                <h1>{enrollmentData.name}</h1>
                
                <h1>{enrollmentData.description}</h1>


                
                
              </h2>

              
            ) : (
              <p>Memuat data...</p>
            )}
          </div>

               
          
          </div>
        </main>
      </div>

    </div>
  );
}