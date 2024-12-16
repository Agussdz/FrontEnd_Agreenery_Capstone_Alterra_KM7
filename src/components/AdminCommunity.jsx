import { useNavigate } from "react-router-dom";
import { ArrowRight, Trash, Search } from "lucide-react";
import useReportStore from "../stores/useReportStore";
import useAdminCommunity from "../hooks/useAdminCommunity";
import { Spinner } from "flowbite-react";

export default function AdminCommunity() {
  const {
    reports,
    setReports,
    reportStatuses,
    setReportStatuses,
    loading,
    searchTerm,
    setSearchTerm,
    handleSearchChange,
    handleActionsClick,
    handleDeleteReport,
  } = useAdminCommunity();

  return (
    <div className="p-4 lg:p-6 bg-gray-50">
      <h1 className="mb-6 text-2xl font-roboto-500 text-primary-400">
        Kelola Komunitas
      </h1>
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

      {/* Table */}
      <div className="md:block overflow-hidden rounded-lg shadow-md">
        <table className="w-full">
          <thead>
            <tr className="bg-primary-400 text-white">
              <th className="text-center p-4">Nama Pengguna</th>
              <th className="text-center p-4">Jenis Laporan</th>
              <th className="text-center p-4">Tanggal Laporan</th>
              <th className="text-center p-4">Status</th>
              <th className="text-center p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {loading ? (
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
              reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-100">
                  <td className="p-4 text-center">
                    {report.user.display_name}
                  </td>
                  <td className="p-4 text-center">{report.report_type}</td>
                  <td className="p-4 text-center">
                    {new Date(report.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 ">
                    <div className="flex items-center justify-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5"
                        readOnly
                        checked={reportStatuses[report.id] || false}
                      />
                      <span className="text-gray-600">selesai</span>
                    </div>
                  </td>
                  <td className="p-4 flex gap-2 justify-center items-center">
                    {/* Tombol Tinjau */}
                    <button
                      className="flex items-center  text-green-600 hover:text-green-700"
                      onClick={() =>
                        handleActionsClick(report.post_id.String, report.id)
                      }
                    >
                      Tinjau
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>

                    {/* Tombol Hapus Laporan */}
                    <button
                      className="flex items-center  text-red-600 hover:text-red-700 pl-3"
                      onClick={() => handleDeleteReport(report.id)}
                    >
                      Hapus
                      <Trash className="w-4 h-4 ml-1" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
