import { Star, Bell } from "lucide-react";

import useUserNotification from "../hooks/useUserNotification";

export default function UserNotification() {
  const { notifications, handleMarkAsRead, handleMarkAllAsRead } =
    useUserNotification();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="border-l-4 mb-4 border-primary-100 px-4 py-2 flex flex-row gap-4 justify-between items-center">
            <div>
              <h1 className="text-xl font-roboto-700 text-primary-400">
                Notifikasi
              </h1>
            </div>
          </div>
          <button
            onClick={handleMarkAllAsRead}
            className="text-blue-600 font-roboto-500 hover:text-blue-700 font-medium"
          >
            Tandai Sudah dibaca
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`flex gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors ${
                item.is_read ? "bg-gray-100" : "bg-white"
              }`}
            >
              <div className="flex-shrink-0">
                <img
                  src={
                    item.icon ||
                    "https://storage.googleapis.com/agreenery/uploads/agreenery-logo.png"
                  }
                  alt="Notification Icon"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">
                  {item.title} -{" "}
                  <span className="font-semibold">{item.subtitle}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(item.created_at).toLocaleString()}
                </p>
              </div>
              {!item.is_read && (
                <button
                  onClick={() => handleMarkAsRead(item.id)}
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  Tandai sebagai dibaca
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
