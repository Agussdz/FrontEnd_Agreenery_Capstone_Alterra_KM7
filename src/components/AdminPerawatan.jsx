import { Search, PenLine, Trash2, Plus, Info } from "lucide-react";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import useAdminPerawatan from "../hooks/useAdminPerawatan";
import UploadTanaman from "./UploadTanaman";

export default function AdminPerawatan() {
  const navigate = useNavigate();

  const {
    loading,
    plants,
    searchTerm,
    setSearchTerm,
    isModalOpen,
    selectedPlant,
    openModal,
    closeModal,
    deletePlant,
  } = useAdminPerawatan();

  const openStepPage = (plantId) => {
    navigate(`/admin-step-plants/${plantId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-roboto-700 text-primary-400">
          Kelola Perawatan Tanaman
        </h1>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-400 px-4 py-2 text-sm font-medium text-white"
          onClick={() => openModal(null)}
        >
          <Plus className="h-4 w-4" />
          <span>Tambah</span>
        </button>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 ml-3" />
        <input
          type="text"
          placeholder="Tap to search"
          className="w-full rounded-full border border-gray-200 bg-white py-3 pl-14 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-primary-400">
            <tr>
              <th className="p-4 text-center text-sm font-medium text-white">
                Gambar
              </th>
              <th className="p-4 text-center text-sm font-medium text-white">
                Nama Tanaman
              </th>
              <th className="p-4 text-center text-sm font-medium text-white">
                Deskripsi Tanaman
              </th>
              <th className="p-4 text-center text-sm font-medium text-white">
                Kategori
              </th>
              <th className="p-4 text-center text-sm font-medium text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-5">
                  <div className="flex flex-col justify-center items-center">
                    <Spinner
                      theme={{ color: { success: "fill-[#3DAC21]" } }}
                      color="success"
                      size="xl"
                    />
                    <span className="font-roboto-400 text-neutral-400">
                      Memuat data..
                    </span>
                  </div>
                </td>
              </tr>
            ) : (
              plants.map((plant) => (
                <tr key={plant.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      width={100}
                      height={67}
                      className="rounded object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">{plant.name}</td>
                  <td className="px-4 py-3">
                    {plant.description.length > 50
                      ? plant.description.substring(0, 50) + "..."
                      : plant.description}
                  </td>
                  <td className="px-4 py-3 text-secondary-500 font-roboto-500">
                    {plant.category}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        className="rounded p-1 text-primary-600 bg-green-200  hover:text-primary-700"
                        onClick={() => openStepPage(plant.id)}
                      >
                        <Info className="h-4 w-4" />
                      </button>
                      <button
                        className="rounded p-1 text-secondary-600 bg-orange-100  hover:text-secondary-700"
                        onClick={() => openModal(plant)}
                      >
                        <PenLine className="h-4 w-4" />
                      </button>
                      <button
                        className="rounded p-1 bg-red-200 text-red-500  hover:text-red-700"
                        onClick={() => deletePlant(plant.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modals for adding/updating plant */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white max-w-[70%] p-6 rounded-lg shadow-lg">
            <button
              className="absolute px-5 right-3 top-3 py-2 rounded-md text-gray-900 bg-white"
              onClick={closeModal}
            >
              X
            </button>
            <UploadTanaman plant={selectedPlant} closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}
