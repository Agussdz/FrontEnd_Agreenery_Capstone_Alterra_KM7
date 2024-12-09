import { useState } from "react";
import { SidebarComponent } from "../components/SidebarComponent"; // Tambahin komponen ini di setiap page
import { NavbarComponent } from "../components/NavbarComponent"; //Tambahin komponen ini di setiap page
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi"; // Ikon hamburger dan Arrow tambahin di setiap page
import herocuaca from "../assets/hero-cuaca.png";

export default function FormCuaca() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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
              <HiOutlineArrowLeft className="w-6 h-6 align-middle" /> // closed icon
            ) : (
              <HiOutlineMenu className="w-6 h-6" /> // Hamburger icon
            )}
          </div>

          {/* Content */}
          <div className="relative">
            {/* Navbar Component */}
            <NavbarComponent />

            {/* Konten Fitur dibagi menjadi dua bagian */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
              {/* Bagian Kiri: Form */}
              <div className="p-6 relative top-[378px]">
                <div className="textsection w-[466px] h-[116px]">
                  <h1 className="font-roboto-700 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#19460D] to-[#3DAC21] text-[48px]">
                    Lihat informasi cuaca
                  </h1>

                  <p className=" font-roboto-400 text-primary-800 opacity-50 mb-6">
                    Masukkan data lokasi secara manual atau izinkan akses lokasi
                    untuk pengalaman yang lebih optimal.
                  </p>
                </div>
                <div className="flex space-x-4 mt-5">
                  <button className="px-4 py-2 border border-primary-500 text-primary-500 font-medium rounded-md hover:bg-green-100">
                    Input manual
                  </button>
                  <button className="px-4 py-2 bg-primary-500 text-white font-medium rounded-md hover:bg-green-600">
                    Lokasi otomatis
                  </button>
                </div>
              </div>

              {/* Bagian Kanan: Gambar */}
              <div className="flex items-center justify-center relative top-[217px]">
                <img className=" items-center relative z-10" src={herocuaca} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
