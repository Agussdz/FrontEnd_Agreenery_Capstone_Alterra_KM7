import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance"; // Impor axios instance

const useCardTanaman = () => {
  const [plants, setPlants] = useState([]); // State untuk menyimpan data tanaman
  const [loading, setLoading] = useState(true); // Status loading
  const [error, setError] = useState(null); // Status error

  useEffect(() => {
    // Fungsi untuk mengambil data tanaman
    const fetchPlants = async () => {
      try {
        const response = await axiosInstance.get("/plants?page=1&limit=3&sort=desc"); // API call
        setPlants(response.data.data); // Menyimpan data tanaman dalam state
        setLoading(false); // Mengubah status loading menjadi false
      } catch (err) {
        setError("Gagal mengambil data tanaman"); // Menangani error
        setLoading(false); // Mengubah status loading menjadi false
      }
    };

    fetchPlants(); // Panggil fungsi fetchPlants
  }, []); // Memanggil hanya sekali saat komponen pertama kali dimuat

  return { plants, loading, error };
};

export default useCardTanaman;
