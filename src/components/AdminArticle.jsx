import { Search, PenLine, Trash2, Plus } from "lucide-react";
import AdminUploadArticle from "./AdminUploadArticle";
import { Spinner } from "flowbite-react";
import useAdminArticle from "../hooks/useAdminArticle";

export default function AdminArticle() {
  const {
    articles,
    loading,
    isModalOpen,
    searchTerm,
    setSearchTerm,
    selectedArticle,
    openModal,
    closeModal,
    handleSearchChange,
    deleteArticle,
  } = useAdminArticle();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="border-l-4 mb-8 border-primary-100 px-4 py-2 flex flex-row gap-4 justify-between items-center">
          <div>
            <h1 className="text-2xl font-roboto-700 text-primary-400">
              Kelola Artikel
            </h1>
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-400 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
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
          className="w-full rounded-full border border-gray-200 bg-white py-3 pl-14 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-md">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-primary-400 ">
            <tr>
              <th className="p-4 text-center text-sm font-medium text-white">
                Thumbnail
              </th>
              <th className="p-4 text-center text-sm font-medium text-white">
                Judul
              </th>
              <th className="p-4 text-center text-sm font-medium text-white">
                Status Publikasi
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
              // SweetAlert loading sudah menangani loading, tidak perlu skeleton lagi
              <tr>
                <td colSpan="5" className="text-center py-5">
                  <div className="flex flex-col justify-center items-center">
                    <Spinner
                      theme={{ color: { success: "fill-[#3DAC21]" } }}
                      color="success"
                      aria-label="Extra large spinner example"
                      size="xl"
                    />
                    <span className="font-roboto-400 text-neutral-400">
                      Memuat data..
                    </span>
                  </div>
                </td>
              </tr>
            ) : (
              articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      width={100}
                      height={67}
                      className="rounded object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm text-gray-900">{article.title}</p>
                  </td>
                  <td className="px-4 py-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={article.publish_status}
                        className="sr-only peer"
                        disabled
                      />
                      <div className="relative w-11 h-6 bg-neutral-300 after:border-neutral-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-neutral-100 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-400"></div>
                    </label>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {article.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        className="rounded p-1 text-primary-600 bg-green-200 hover:bg-gray-100 hover:text-primary-700"
                        onClick={() => openModal(article)}
                      >
                        <PenLine className="h-4 w-4" />
                      </button>
                      <button
                        className="rounded p-1 bg-red-200 text-red-500 hover:bg-red-50 hover:text-red-700"
                        onClick={() => deleteArticle(article.id)}
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white max-w-[70%] p-6 rounded-lg shadow-lg">
            <button
              className="absolute px-5 right-3 top-3 py-2 rounded-md text-gray-900 bg-white "
              onClick={closeModal}
            >
              Close
            </button>
            <AdminUploadArticle article={selectedArticle} closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}
