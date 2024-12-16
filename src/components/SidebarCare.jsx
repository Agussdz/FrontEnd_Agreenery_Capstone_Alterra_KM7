import { Sidebar } from "flowbite-react";
import logosidebar from "../assets/logo-green.png";

export default function SidebarCare() {
  const sidebarData = [
    {
      id: "1",
      name: "Persiapan Awal Penanaman Tomat",
      duration: "05:00 Menit",
    },
    {
      id: "2",
      name: "Perawatan Tanaman Tomat",
      duration: "05:00 Menit",
    },
    {
      id: "3",
      name: "Pengendalian Hama dan Penyakit Tanaman Tomat",
      duration: "05:00 Menit",
    },
    {
      id: "4",
      name: "Proses Panen Tanaman Tomat",
      duration: "05:00 Menit",
    },
    {
      id: "5",
      name: "Tips-Tips Menanam Tanaman Tomat",
      duration: "05:00 Menit",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      {/* Logo */}
      <img src={logosidebar} alt="Logo" className="w-80 p-1 -mb-10 -mt-10" />

      {/* Sidebar Content */}
      <Sidebar aria-label="Sidebar example" className="w-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {sidebarData.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-gray-200 p-6 mb-2 rounded-xl shadow-sm"
              >
                {/* Icon YouTube */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-400 rounded-md mr-4">
                  <span className="text-white">▶</span>
                </div>
                {/* Text Content */}
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.duration}</p>
                </div>
              </div>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
