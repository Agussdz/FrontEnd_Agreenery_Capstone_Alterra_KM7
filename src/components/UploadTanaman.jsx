import { Upload } from "lucide-react";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";

export default function UploadTanaman({ closeModal, plant }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    plant ? plant.category_id : ""
  );
  const [thumbnailPreview, setThumbnailPreview] = useState(
    plant ? plant.thumbnail : ""
  );
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [name, setName] = useState(plant ? plant.name : "");
  const [description, setDescription] = useState(
    plant ? plant.description : ""
  );

  // Fetch categories for selection
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories", {
          params: {
            page: 1,
            limit: 10,
            category_type: "plant",
          },
        });
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnailPreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingSwal = Swal.fire({
      title: "Sedang memproses...",
      text: "Mohon tunggu sebentar.",
      showConfirmButton: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category_id", selectedCategory);
    if (thumbnailFile) {
      formData.append("image", thumbnailFile);
    }

    try {
      const response = plant
        ? await axiosInstance.put(`/plants/${plant.id}`, formData)
        : await axiosInstance.post("/plants", formData);

      loadingSwal.close();

      Swal.fire({
        title: plant
          ? "Tanaman berhasil diperbarui!"
          : "Tanaman berhasil ditambahkan!",
        icon: "success",
      });

      closeModal();
    } catch (error) {
      loadingSwal.close();
      Swal.fire({
        title: "Terjadi kesalahan!",
        text: error.response?.data?.message || "Silakan coba lagi.",
        icon: "error",
      });
    }
  };

  return (
    <div className="bg-gray-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-[300px,1fr]">
            {/* Thumbnail Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">
                {plant ? "Perbarui Tanaman" : "Tambah Tanaman"}
              </h2>
              <div className="relative">
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="thumbnail"
                  className="flex min-h-[250px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                >
                  {thumbnailPreview ? (
                    <img
                      src={thumbnailPreview}
                      alt="Preview"
                      className="h-full w-full rounded-lg object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <Upload className="mb-2 h-16 w-16 text-gray-400" />
                      <span className="text-sm font-medium text-gray-600">
                        Pilih Foto
                      </span>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Nama Tanaman
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  required
                />
              </div>

              {/* Description Field */}
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="text-sm font-medium text-gray-700"
                >
                  Deskripsi Tanaman
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  required
                />
              </div>

              {/* Category Selection */}
              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-700"
                >
                  Kategori
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  required
                >
                  <option value="">Pilih Kategori</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-primary-400 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              {plant ? "Perbarui Tanaman" : "Tambah Tanaman"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
