import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";

export default function useUserNotification() {
  const [notifications, setNotifications] = useState([]);

  // Mengambil notifikasi dari server
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosInstance.get("notifications/user", {
          params: {
            limit: 100,
            sort_by: "created_at",
            sort: "desc",
          },
        });
        setNotifications(response.data.data);
      } catch (error) {
        console.error("Error fetching notifications", error);
      }
    };

    fetchNotifications();
  }, []);

  // Menandai satu notifikasi sebagai dibaca
  const handleMarkAsRead = async (notificationId) => {
    try {
      const response = await axiosInstance.post(
        `notifications/user/${notificationId}/read`
      );
      if (response.data.meta.status) {
        setNotifications((prevNotifications) =>
          prevNotifications.map((notif) =>
            notif.id === notificationId ? { ...notif, is_read: true } : notif
          )
        );
      }
    } catch (error) {
      console.error("Error marking notification as read", error);
      Swal.fire({
        icon: "error",
        title: "Gagal menandai notifikasi!",
        text: "Terjadi kesalahan saat menandai notifikasi.",
      });
    }
  };

  // Menandai semua notifikasi sebagai dibaca
  const handleMarkAllAsRead = async () => {
    try {
      const response = await axiosInstance.post("notifications/user/read");
      if (response.data.meta.status) {
        setNotifications((prevNotifications) =>
          prevNotifications.map((notif) => ({ ...notif, is_read: true }))
        );
        Swal.fire({
          icon: "success",
          title: "Semua notifikasi telah ditandai sebagai dibaca!",
        });
      }
    } catch (error) {
      console.error("Error marking all notifications as read", error);
      Swal.fire({
        icon: "error",
        title: "Gagal menandai semua notifikasi!",
        text: "Terjadi kesalahan saat menandai semua notifikasi.",
      });
    }
  };

  return { notifications, handleMarkAsRead, handleMarkAllAsRead };
}
