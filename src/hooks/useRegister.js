import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function useRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    display_name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Fungsi untuk menangani perubahan input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mengirimkan data form ke API
      const response = await axios.post(
        "https://agreenery.cloud/api/v1/auth/register",
        formData
      );

      if (response.data.meta.status) {
        // Jika registrasi berhasil, tampilkan sweetalert sukses
        Swal.fire({
          icon: "success",
          title: "Registrasi Sukses!",
          text: "Akun Anda berhasil dibuat. Silakan masuk.",
        });

        // Redirect ke halaman login setelah 2 detik
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      // Menangani error jika terjadi
      console.error("Error during registration:", error);
      Swal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text:
          error.response?.data?.meta?.message ||
          "Terjadi kesalahan, coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  };
  return {
    formData,
    setFormData,
    loading,
    setLoading,
    handleInputChange,
    handleSubmit,
  };
}
