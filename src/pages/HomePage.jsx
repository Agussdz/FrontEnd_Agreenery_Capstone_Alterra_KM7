import { useState } from "react";
import { SidebarComponent } from "../components/SidebarComponent"; // Tambahin komponen ini di setiap page
import { NavbarComponent } from "../components/NavbarComponent"; //Tambahin komponen ini di setiap page
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi"; // Ikon hamburger dan Arrow tambahin di setiap page
import CardCuaca from "../components/CardCuaca";
import CardTanaman from "../components/CardTanaman";
import CardArtikel from "../components/CardArtikel";

export default function HomePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar Component */}
        <SidebarComponent isSidebarOpen={isSidebarOpen} />

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
          <div className="relative">
            {/* Navbar Component */}
            <NavbarComponent />

            {/* Saya ingin ini dibungkus di kiri sampai artikel komponen */}
            {/*Cuaca*/}
            <CardCuaca />
            <div class="flex w-full"></div>
            {/* Section View Tanaman */}
            <div className="pl-4 pt-8 flex items-center justify-between w-[630px] h-[52px] relative">
              <div className="pl-5 font-roboto-500 text-primary-600 text-[24px]">
                Tanaman Saya
              </div>
              <div className="pr-5">
                <div className="flex items-center gap-2 cursor-viewall relative">
                  <p className=" text-neutral-400 text-[14px]">View All</p>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6 8.40001L11.8375 0.525006C11.5 0.187506 10.975 0.187506 10.6375 0.525006C10.3 0.862506 10.3 1.38751 10.6375 1.72501L16.9375 8.13751H1.00005C0.550049 8.13751 0.175049 8.51251 0.175049 8.96251C0.175049 9.41251 0.550049 9.82501 1.00005 9.82501H17.0125L10.6375 16.3125C10.3 16.65 10.3 17.175 10.6375 17.5125C10.7875 17.6625 11.0125 17.7375 11.2375 17.7375C11.4625 17.7375 11.6875 17.6625 11.8375 17.475L19.6 9.60001C19.9375 9.26251 19.9375 8.73751 19.6 8.40001Z"
                      fill="#616161"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Section Card Tanaman */}
            <div className="pl-4 pt-8 w-[630px] flex gap-4">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <CardTanaman />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <CardTanaman />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <CardTanaman />
              </div>
            </div>

            {/* Section View Artikel */}
            <div className="pl-4 pt-8 flex items-center justify-between w-[630px] h-[52px] relative">
              <div className="pl-5 font-roboto-500 text-primary-600 text-[24px]">
                Artikel
              </div>
              <div className="pr-5">
                <div className="flex items-center gap-2 cursor-viewall">
                  <p className=" text-neutral-400 text-[14px]">View All</p>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6 8.40001L11.8375 0.525006C11.5 0.187506 10.975 0.187506 10.6375 0.525006C10.3 0.862506 10.3 1.38751 10.6375 1.72501L16.9375 8.13751H1.00005C0.550049 8.13751 0.175049 8.51251 0.175049 8.96251C0.175049 9.41251 0.550049 9.82501 1.00005 9.82501H17.0125L10.6375 16.3125C10.3 16.65 10.3 17.175 10.6375 17.5125C10.7875 17.6625 11.0125 17.7375 11.2375 17.7375C11.4625 17.7375 11.6875 17.6625 11.8375 17.475L19.6 9.60001C19.9375 9.26251 19.9375 8.73751 19.6 8.40001Z"
                      fill="#616161"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Section Card Artikel */}
            <div className="pl-4 pt-8 w-[630px] flex gap-7">
              <CardArtikel />
              <CardArtikel />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
