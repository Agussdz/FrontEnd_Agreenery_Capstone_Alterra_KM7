import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoginStore from "../stores/useLoginStore";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const setUser = useLoginStore((state) => state.setUser);
  const navigate = useNavigate();

  // Fungsi untuk menangani proses login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsError(false);

    try {
      // Menampilkan loading alert dengan SweetAlert2
      Swal.fire({
        title: "Loading...",
        text: "Please wait while we log you in.",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(), // Menampilkan loading saat proses login
      });

      // Mengirim permintaan POST ke endpoint login dengan email dan password
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      // Jika login berhasil (status success)
      if (response.data.meta.status) {
        const token = response.data.data.access_token; // Ambil token dari response

        if (token) {
          // Menyimpan token menggunakan store Zustand
          setUser(token);

          // Menampilkan notifikasi sukses dengan SweetAlert2
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome back to Agreenery!",
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
            willClose: () => {
              // Mengarahkan pengguna ke halaman sesuai dengan role
              const role = useLoginStore.getState().role;
              if (role === "admin") {
                navigate("/dashboard");
              } else {
                navigate("/homepage");
              }
            },
          });
        }
      } else {
        // Jika login gagal, set error message dan tampilkan pesan error
        setIsError(true);
        setErrorMessage(
          response.data.meta.message ||
            "Email atau kata sandi yang anda masukkan salah"
        );
        Swal.close();
      }
    } catch (error) {
      // Jika ada error saat permintaan, tampilkan error dan tutup alert loading
      Swal.close();
      setIsError(true);
      console.error("Login Error:", error);
      setErrorMessage(
        error.response?.data?.meta?.message ||
          "Email atau kata sandi yang anda masukkan salah"
      );
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    isError,
    handleLogin,
  };
}
