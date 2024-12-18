import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  PenLine,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";

export default function AdminStepPlants() {
  const [openSteps, setOpenSteps] = useState([]);
  const [plant, setPlant] = useState(null);
  const [newStep, setNewStep] = useState({
    title: "",
    description: "",
    video_url: "",
    isEdit: false,
    stepId: null,
    open: false,
  });
  const { plantId } = useParams();

  const fetchPlantDetails = async () => {
    try {
      const response = await axiosInstance.get(`/plants/${plantId}`);
      if (response.data.meta.status) {
        setPlant(response.data.data);
        setOpenSteps(
          response.data.data.steps
            ? response.data.data.steps.map((step) => step.id)
            : []
        );
      }
    } catch (error) {
      console.error("Error fetching plant details:", error);
    }
  };

  useEffect(() => {
    fetchPlantDetails();
  }, [plantId]);

  const handleStepSubmit = async () => {
    if (!newStep.title || !newStep.description || !newStep.video_url) {
      Swal.fire("Error", "Harap isi semua kolom", "error");
      return;
    }

    const stepData = {
      ...newStep,
      plant_id: plantId,
    };

    Swal.fire({
      title: newStep.isEdit
        ? "Mengupdate Langkah..."
        : "Menambahkan Langkah...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      if (newStep.isEdit) {
        await axiosInstance.put(`/steps/${newStep.stepId}`, stepData);
        Swal.fire("Berhasil", "Langkah berhasil diperbarui", "success");
      } else {
        await axiosInstance.post("/steps", stepData);
        Swal.fire("Berhasil", "Langkah berhasil ditambahkan", "success");
      }
      setNewStep({
        title: "",
        description: "",
        video_url: "",
        isEdit: false,
        stepId: null,
        open: false,
      });
      fetchPlantDetails();
    } catch (error) {
      console.error("Error submitting step:", error);
      Swal.fire("Gagal", "Gagal menambahkan/ memperbarui langkah", "error");
    }
  };

  const toggleStep = (stepId) => {
    setOpenSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId]
    );
  };

  const extractYouTubeID = (url) => {
    const match =
      url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/) ||
      url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&]+)/);
    return match ? match[1] : null;
  };

  const handleDeleteStep = async (stepId) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Langkah ini akan dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.delete(`/steps/${stepId}`);
          Swal.fire("Terhapus!", "Langkah berhasil dihapus.", "success");
          fetchPlantDetails();
        } catch (error) {
          console.error("Error deleting step:", error);
          Swal.fire("Gagal", "Gagal menghapus langkah", "error");
        }
      }
    });
  };

  const handleEditStep = (stepId) => {
    const stepToEdit = plant.steps.find((step) => step.id === stepId);
    setNewStep({
      title: stepToEdit.name,
      description: stepToEdit.description,
      video_url: stepToEdit.video_url,
      isEdit: true,
      stepId: stepId,
      open: true,
    });
  };

  const closeModal = () => {
    setNewStep({
      title: "",
      description: "",
      video_url: "",
      isEdit: false,
      stepId: null,
      open: false,
    });
  };

  if (!plant)
    return (
      <div className="">
        <div className="flex flex-col justify-center items-center mt-[25%]">
          <Spinner
            theme={{ color: { success: "fill-[#3DAC21]" } }}
            color="success"
            size="xl"
          />
          <span className="font-roboto-400 text-neutral-400">
            Memuat data..
          </span>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <nav className="flex items-center mb-5 space-x-2 bg-white p-4 text-sm text-gray-600 md:px-6 rounded-md">
        <Link to="/admin-perawatan" className="hover:text-gray-900">
          Langkah-langkah
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-primary-400">Detail Tanaman</span>
      </nav>
      <h1 className="text-2xl font-roboto-500 text-primary-500">
        Detail Tanaman
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <div className="flex gap-6">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-40 h-40 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold">{plant.name}</h2>
            <p>{plant.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-roboto-500 text-primary-500 mb-3">
          Langkah-Langkah Perawatan
        </h3>
        <div className="space-y-4">
          {plant.steps && plant.steps.length > 0 ? (
            plant.steps.map((step) => {
              const youtubeId = extractYouTubeID(step.video_url);
              return (
                <div key={step.id}>
                  <button
                    onClick={() => toggleStep(step.id)}
                    className="flex items-center justify-between w-full p-4 bg-white rounded-tl-lg rounded-tr-lg shadow-md"
                  >
                    <span>{step.name}</span>
                    {openSteps.includes(step.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openSteps.includes(step.id) && (
                    <div className="p-4 bg-white flex items-start gap-4 rounded-bl-lg rounded-br-lg">
                      {youtubeId && (
                        <div className="max-w-[300px] max-h-[150px] md:h-64">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-md"
                          ></iframe>
                        </div>
                      )}
                      <div className="flex-1">
                        <p>{step.description}</p>
                        <div className="mt-4 flex gap-2">
                          <button
                            className="px-2 py-2 bg-red-300 text-red-600 rounded-md"
                            onClick={() => handleDeleteStep(step.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <button
                            className="px-2 py-2 bg-orange-200 text-orange-400 rounded-md"
                            onClick={() => handleEditStep(step.id)}
                          >
                            <PenLine className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p>Tidak ada langkah perawatan untuk tanaman ini.</p>
          )}
        </div>

        <button
          className="mt-4 w-full py-3 px-4 bg-primary-400 text-white rounded-md flex items-center justify-center gap-2"
          onClick={() => setNewStep({ ...newStep, open: true, isEdit: false })}
        >
          <Plus className="h-5 w-5" />
          Tambah Langkah
        </button>

        {(newStep.open || newStep.isEdit) && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
              <h3 className="text-xl font-semibold">
                {newStep.isEdit ? "Edit Langkah" : "Tambah Langkah"}
              </h3>
              <input
                type="text"
                placeholder="Judul Langkah"
                className="w-full p-2 border border-gray-300 mt-4"
                value={newStep.title}
                onChange={(e) =>
                  setNewStep({ ...newStep, title: e.target.value })
                }
              />
              <textarea
                placeholder="Deskripsi Langkah"
                className="w-full p-2 border border-gray-300 mt-4"
                value={newStep.description}
                onChange={(e) =>
                  setNewStep({ ...newStep, description: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="URL Video"
                className="w-full p-2 border border-gray-300 mt-4"
                value={newStep.video_url}
                onChange={(e) =>
                  setNewStep({ ...newStep, video_url: e.target.value })
                }
              />
              <button
                className="mt-4 px-4 py-2 w-full bg-primary-400 text-white rounded-md"
                onClick={handleStepSubmit}
              >
                {newStep.isEdit ? "Perbarui Langkah" : "Tambah Langkah"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
