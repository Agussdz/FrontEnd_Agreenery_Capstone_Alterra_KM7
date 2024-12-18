import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2"; // Pastikan Anda mengimpor Swal

export default function useProfile() {
  const [activeTab, setActiveTab] = useState("edit");
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    display_name: "",
    email: "",
    phone: "",
  });
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(`/auth/me`);
        setUserData(response.data.data);
        setFormData({
          display_name: response.data.data.display_name,
          email: response.data.data.email,
          phone: response.data.data.phone,
        });
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, []);

  const handleProfileUpdate = async () => {
    try {
      // Menampilkan loading SweetAlert sebelum request API
      const loadingAlert = Swal.fire({
        title: "Loading...",
        text: "Updating profile...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.hideLoading();
        },
      });

      const response = await axiosInstance.put("/auth/me", formData);
      loadingAlert.close();
      Swal.fire("Success", "Profile updated successfully", "success");
    } catch (error) {
      console.error("Error updating profile", error);
      Swal.fire("Error", "Failed to update profile", "error");
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const data = new FormData();
    data.append("file", file);

    try {
      // Menampilkan loading SweetAlert sebelum request API
      const loadingAlert = Swal.fire({
        title: "Loading...",
        text: "Uploading profile photo...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.hideLoading();
        },
      });

      const response = await axiosInstance.post("/auth/me/photo", data);
      loadingAlert.close();
      Swal.fire("Success", "Profile photo uploaded successfully", "success");

      // Update profile picture URL in the user data
      setUserData((prevData) => ({
        ...prevData,
        photo: response.data.data.photo,
      }));
    } catch (error) {
      console.error("Error uploading photo", error);
      Swal.fire("Error", "Failed to upload photo", "error");
    }
  };

  return {
    activeTab,
    setActiveTab,
    userData,
    isLoading,
    file,
    setFile,
    formData,
    setFormData,
    handleProfileUpdate,
    handleFileUpload,
  };
}
