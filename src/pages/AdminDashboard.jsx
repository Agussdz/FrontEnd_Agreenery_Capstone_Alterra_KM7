import { useState } from "react";
import { AdminSidebarComponent } from "../components/AdminSidebarComponent";
import { AdminNavbarComponent } from "../components/AdminNavbarComponent";
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi"; // Ikon hamburger dan Arrow tambahin di setiap page

export default function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar Component */}
        <AdminSidebarComponent isSidebarOpen={isSidebarOpen} />

        {/*Content */}
        <main className="flex-grow bg-gray-100">
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
            <AdminNavbarComponent />
            {/*Konten Fitur bisa dimulai di sini */}
            Ini contoh pemakaian sidebar sama navbar: Konten tiap page fitur
            bisa mulai slicing di tag ini
          </div>
        </main>
      </div>
    </>
  );
}
