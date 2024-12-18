import { ArrowLeft, Camera } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useProfile from "../hooks/useProfile";
import { Spinner } from "flowbite-react";

export default function UserProfile() {
  const {
    activeTab,
    setActiveTab,
    userData,
    isLoading,
    formData,
    file,
    setFile,
    handleFileUpload,
    handleProfileUpdate,
    setFormData,
  } = useProfile();

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center mt-[10%]">
        <Spinner
          theme={{ color: { success: "fill-[#3DAC21]" } }}
          color="success"
          aria-label="Extra large spinner example"
          size="xl"
        />
        <span className="mt-4 font-roboto-400 text-neutral-500">
          Memuat data..
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Back Button */}
      <Link
        to="/homepage"
        className="inline-flex items-center text-primary-500 text-xl font-roboto-500 hover:text-primary-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span>Kembali</span>
      </Link>

      {/* Profile Text */}
      <h1 className="text-center text-xl font-roboto-500 text-primary-500 mb-6">
        Profile
      </h1>

      {/* Main Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6">
        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab("edit")}
            className={`pb-4 px-4 ${
              activeTab === "edit"
                ? "border-b-2 border-primary-500 text-primary-500"
                : "text-gray-500"
            }`}
          >
            Edit Profile
          </button>
        </div>

        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                <img
                  src={userData.photo || "/placeholder.svg"}
                  alt="Profile picture"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => document.getElementById("fileInput").click()}
                className="absolute bottom-0 right-0 p-2 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors"
              >
                <Camera className="w-4 h-4" />
              </button>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-700 mb-1"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                value={formData.display_name}
                onChange={(e) =>
                  setFormData({ ...formData, display_name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-gray-700 mb-1"
              >
                No. Telepon
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleProfileUpdate}
              className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Simpan
            </button>
            {file && (
              <button
                onClick={handleFileUpload}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors ml-4"
              >
                Upload Photo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
