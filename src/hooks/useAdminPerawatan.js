import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";

const useAdminPerawatan = () => {
  const [loading, setLoading] = useState(true);
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  // Fetch plants data
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axiosInstance.get("/plants", {
          params: {
            page: 1,
            limit: 10,
            sort: "desc",
            sort_by: "created_at",
          },
        });
        if (response?.data?.meta?.status) {
          setPlants(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching plants data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  // Open modal for adding or editing plant
  const openModal = (plant) => {
    setSelectedPlant(plant);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlant(null);
  };

  // Delete plant
  const deletePlant = async (id) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data tanaman ini akan dihapus secara permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus",
    });

    if (result.isConfirmed) {
      try {
        await axiosInstance.delete(`/plants/${id}`);
        setPlants((prevPlants) =>
          prevPlants.filter((plant) => plant.id !== id)
        );
        Swal.fire("Terhapus!", "Tanaman telah berhasil dihapus.", "success");
      } catch (error) {
        console.error("Error deleting plant:", error);
        Swal.fire("Gagal!", "Gagal menghapus tanaman.", "error");
      }
    }
  };

  // Filter plants based on search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    loading,
    plants: filteredPlants,
    searchTerm,
    setSearchTerm,
    isModalOpen,
    selectedPlant,
    openModal,
    closeModal,
    deletePlant,
  };
};

export default useAdminPerawatan;
