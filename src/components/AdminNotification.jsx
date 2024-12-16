import { Trash2, PenSquare } from "lucide-react";
import formDateFormatter from "../utils/formDateFormatter";

import useAdminNotification from "../hooks/useAdminNotification";

export default function AdminNotification() {
  const {
    notifications,
    showModal,
    title,
    subtitle,
    sendAt,
    editingNotificationId,
    setShowModal,
    setTitle,
    setSubtitle,
    setSendAt,
    handleAddNotification,
    handleEditNotification,
    handleUpdateNotification,
    handleDeleteNotification,
    handleSendNotification,
  } = useAdminNotification();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="border-l-4 mb-8 border-primary-100 px-4 py-2 flex flex-row gap-4 justify-between items-center">
          <div>
            <h1 className="text-2xl font-roboto-700 text-primary-400">
              Kelola Notifikasi
            </h1>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-400 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
        >
          <span>Tambah</span>
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-primary-400">
            <tr>
              <th className="p-4 text-center text-sm font-medium text-white">
                Judul
              </th>
              <th className="p-4 text-center text-sm font-medium text-white">
                Isi Pesan
              </th>
              <th className="p-4 text-center text-sm font-medium text-white">
                Waktu Kirim
              </th>
              <th className="p-4 text-center text-sm font-medium text-white">
                Status
              </th>
              <th className="p-4 text-center text-sm font-medium text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {notifications.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 flex items-center gap-3">
                  <span className="text-gray-600">{item.icon}</span>
                  <span className="font-medium">{item.title}</span>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-gray-900">{item.subtitle}</p>
                </td>
                <td className="px-4 py-3 text-center">
                  {/* Format tanggal sebelum ditampilkan */}
                  <span className="text-sm text-gray-600">
                    {formDateFormatter(new Date(item.send_at))}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.is_sent === false
                        ? "text-red-600 bg-red-50"
                        : "text-green-600 bg-green-50"
                    }`}
                  >
                    {item.is_sent ? "Terkirim" : "Terjadwal"}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleDeleteNotification(item.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                    <button
                      onClick={() => handleEditNotification(item.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <PenSquare className="w-5 h-5 text-green-500" />
                    </button>
                    <button
                      onClick={() => handleSendNotification(item.id)}
                      className="px-3 py-1 text-sm text-green-600 border border-green-600 rounded-full hover:bg-green-50"
                    >
                      Kirim
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">
              {editingNotificationId ? "Edit Notifikasi" : "Tambah Notifikasi"}
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Judul
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Isi Pesan
              </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Waktu Kirim
              </label>
              <input
                type="date"
                value={sendAt}
                onChange={(e) => setSendAt(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={
                  editingNotificationId
                    ? handleUpdateNotification
                    : handleAddNotification
                }
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                {editingNotificationId ? "Update" : "Tambah"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
