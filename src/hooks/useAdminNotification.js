import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";
import formDateFormatter from "../utils/formDateFormatter";

export default function useAdminNotification() {
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [sendAt, setSendAt] = useState("");
  const [editingNotificationId, setEditingNotificationId] = useState(null);

  // Fetch notif dari API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosInstance.get("/notifications");
        setNotifications(response.data.data);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  // Fungsi untuk menhandle penambahan notif
  const handleAddNotification = async () => {
    const formattedDate = formDateFormatter(new Date(sendAt));

    if (!formattedDate) {
      Swal.fire({
        icon: "error",
        title: "Format tanggal tidak valid",
        text: "Tanggal harus dalam format 'yyyy-mm-dd'.",
      });
      return;
    }

    try {
      const response = await axiosInstance.post("/notifications", {
        title,
        subtitle,
        send_at: formattedDate,
      });

      Swal.fire({
        icon: "success",
        title: "Notifikasi berhasil ditambahkan!",
        text: response.data.meta.message,
      });

      setNotifications((prev) => [...prev, response.data.data]);

      // Reset form
      setTitle("");
      setSubtitle("");
      setSendAt("");
      setShowModal(false);
    } catch (error) {
      console.error("Failed to add notification:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal menambahkan notifikasi",
        text: error.response?.data?.meta?.message || "Terjadi kesalahan",
      });
    }
  };

  const handleEditNotification = async (id) => {
    const notification = notifications.find((notif) => notif.id === id);
    setTitle(notification.title);
    setSubtitle(notification.subtitle);
    setSendAt(notification.send_at);
    setEditingNotificationId(id);
    setShowModal(true);
  };

  const handleUpdateNotification = async () => {
    const formattedDate = formDateFormatter(new Date(sendAt));

    if (!formattedDate) {
      Swal.fire({
        icon: "error",
        title: "Format tanggal tidak valid",
        text: "Tanggal harus dalam format 'yyyy-mm-dd'.",
      });
      return;
    }

    try {
      const response = await axiosInstance.put(
        `/notifications/${editingNotificationId}`,
        {
          title,
          subtitle,
          send_at: formattedDate,
        }
      );

      Swal.fire({
        icon: "success",
        title: "Notifikasi berhasil diperbarui!",
        text: response.data.meta.message,
      });

      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === editingNotificationId
            ? { ...notif, title, subtitle, send_at: formattedDate }
            : notif
        )
      );

      setTitle("");
      setSubtitle("");
      setSendAt("");
      setShowModal(false);
      setEditingNotificationId(null);
    } catch (error) {
      console.error("Failed to update notification:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal memperbarui notifikasi",
        text: error.response?.data?.meta?.message || "Terjadi kesalahan",
      });
    }
  };

  const handleDeleteNotification = async (id) => {
    const confirmDelete = await Swal.fire({
      icon: "warning",
      title: "Apakah Anda yakin?",
      text: "Data yang sudah dihapus tidak bisa dikembalikan.",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axiosInstance.delete(`/notifications/${id}`);

        Swal.fire({
          icon: "success",
          title: "Notifikasi berhasil dihapus!",
          text: "Notifikasi telah dihapus.",
        });

        setNotifications((prev) => prev.filter((notif) => notif.id !== id));
      } catch (error) {
        console.error("Failed to delete notification:", error);
        Swal.fire({
          icon: "error",
          title: "Gagal menghapus notifikasi",
          text: error.response?.data?.meta?.message || "Terjadi kesalahan",
        });
      }
    }
  };

  const handleSendNotification = async (id) => {
    try {
      const response = await axiosInstance.post(`/notifications/${id}/send`);

      Swal.fire({
        icon: "success",
        title: "Notifikasi berhasil dikirim!",
        text: response.data.meta.message,
      });

      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, is_sent: true } : notif
        )
      );
    } catch (error) {
      console.error("Failed to send notification:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal mengirim notifikasi",
        text: error.response?.data?.meta?.message || "Terjadi kesalahan",
      });
    }
  };

  return {
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
  };
}
