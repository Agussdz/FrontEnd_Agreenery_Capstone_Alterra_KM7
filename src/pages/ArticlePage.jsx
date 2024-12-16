import { useState } from "react";
import { SidebarComponent } from "../components/SidebarComponent"; // Tambahin komponen ini di setiap page
import { NavbarComponent } from "../components/NavbarComponent"; //Tambahin komponen ini di setiap page
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi"; // Ikon hamburger dan Arrow tambahin di setiap page
import Article from "../components/Article";

export default function ArticlePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar Component */}
        <SidebarComponent isSidebarOpen={isSidebarOpen} />

        {/*Content */}
        <main className="flex-grow bg-gray-50">
          {/* Hamburger Icon */}
          <div
            className="lg:hidden fixed top-2 left-2 bg-transparent text-primary-400 p-2 rounded-md z-50 cursor-pointer"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <HiOutlineArrowLeft className="w-6 h-6 align-middle" /> //closed icon
            ) : (
              <HiOutlineMenu className="w-6 h-6" /> // Hamburger icon
            )}
          </div>

          {/* Content */}
          <div className="relative lg:pl-64">
            {/* Navbar Component */}
            <NavbarComponent />
            {/*Konten Fitur bisa dimulai di sini */}
            <Article />
          </div>
        </main>
      </div>
    </>
  );
}
