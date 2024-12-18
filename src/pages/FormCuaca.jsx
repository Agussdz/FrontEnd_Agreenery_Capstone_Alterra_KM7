import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useLocation from "../hooks/useLocation";
import { SidebarComponent } from "../components/SidebarComponent"; // Tambahin komponen ini di setiap page
import { NavbarComponent } from "../components/NavbarComponent"; //Tambahin komponen ini di setiap page
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi"; // Ikon hamburger dan Arrow tambahin di setiap page
import herocuaca from "../assets/hero-cuaca.png";

export default function FormCuaca() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const {
    provinces,
    regencies,
    districts,
    villages,
    selectedProvince,
    setSelectedProvince,
    selectedRegency,
    setSelectedRegency,
    selectedDistrict,
    setSelectedDistrict,
  } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah perilaku default form (reload halaman).

    // Validasi: Cek apakah kecamatan sudah dipilih
    if (!selectedDistrict) {
      alert("Harap pilih lokasi hingga kecamatan."); // Tampilkan peringatan jika kecamatan belum dipilih
      return; // Menghentikan eksekusi jika validasi gagal
    }

    // Navigasikan ke halaman "WeatherDetails" dengan membawa data "region" (kecamatan yang dipilih)
    navigate("/weather-details", { state: { region: selectedDistrict } });
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar Component */}
        <SidebarComponent isSidebarOpen={isSidebarOpen} />

        {/* Content */}
        <main className="flex-grow bg-neutral-100">
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
          <div className="relative lg:pl-64">
            {/* Navbar Component */}
            <NavbarComponent />

            {/* Konten Fitur dibagi menjadi dua bagian */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
              {/* Bagian Kiri: Form */}
              <div className="p-6 relative top-[131px]">
                <div className="textsection w-[466px] h-[116px]">
                  <p className=" font-roboto-500 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#19460D] to-[#3DAC21] text-[32px]">
                    Masukkan lokasi anda
                  </p>
                </div>
                <div className="form ">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="mb-5">
                      <label
                        htmlFor="provinsi"
                        className="block text-neutral-400 text-sm font-medium"
                      >
                        Provinsi
                      </label>
                      <select
                        id="provinsi"
                        name="provinsi"
                        className="mt-1 w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                        value={selectedProvince || ""}
                        onChange={(e) => setSelectedProvince(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Pilih Provinsi
                        </option>
                        {provinces.map((province) => (
                          <option key={province.code} value={province.code}>
                            {province.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="kota"
                        className="block text-neutral-400 text-sm font-medium"
                      >
                        Kota/Kabupaten
                      </label>
                      <select
                        id="kota"
                        name="kota"
                        className="mt-1 w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                        value={selectedRegency || ""}
                        onChange={(e) => setSelectedRegency(e.target.value)}
                        disabled={!selectedProvince}
                        required
                      >
                        <option value="" disabled>
                          Pilih Kota/Kabupaten
                        </option>
                        {regencies.map((regency) => (
                          <option key={regency.code} value={regency.code}>
                            {regency.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="kecamatan"
                        className="block text-neutral-400 text-sm font-medium"
                      >
                        Kecamatan
                      </label>
                      <select
                        id="kecamatan"
                        name="kecamatan"
                        className="mt-1 w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                        value={selectedDistrict || ""}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        disabled={!selectedRegency}
                        required
                      >
                        <option value="" disabled>
                          Pilih Kecamatan
                        </option>
                        {districts.map((district) => (
                          <option key={district.code} value={district.code}>
                            {district.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-5 relative">
                      <label
                        htmlFor="kelurahan"
                        className="block text-neutral-400 text-sm font-medium"
                      >
                        Desa/Kelurahan
                      </label>
                      <select
                        id="kelurahan"
                        name="kelurahan"
                        className="mt-1 w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                        disabled={!selectedDistrict}
                        required
                      >
                        <option value="" disabled selected>
                          Pilih Desa/Kelurahan
                        </option>
                        {villages.map((village) => (
                          <option key={village.code} value={village.code}>
                            {village.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-primary-500 text-neutral-100 font-semibold rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    >
                      Simpan
                    </button>
                  </form>
                </div>
              </div>

              {/* Bagian Kanan: Gambar */}
              <div className="flex items-center justify-center relative top-[217px] bg-neutral-100">
                <img className=" items-center relative z-10" src={herocuaca} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
