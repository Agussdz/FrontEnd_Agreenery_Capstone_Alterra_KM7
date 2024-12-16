import ReactQuill from "react-quill";
import { Upload } from "lucide-react";
import "react-quill/dist/quill.snow.css";
import useAdminUploadArticle from "../hooks/useAdminUploadArticle";

export default function AdminUploadArticle({ article, closeModal }) {
  const {
    categories,
    selectedCategory,
    thumbnailPreview,
    title,
    content,
    setContent,
    handleFileChange,
    handleSubmit,
    setTitle,
    setSelectedCategory,
  } = useAdminUploadArticle(article, closeModal);

  return (
    <div className="bg-gray-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-[300px,1fr]">
            {/* Thumbnail Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">Thumbnail</h2>
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
              {/* Title */}
              <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-700"
                >
                  Judul
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              {/* Content (Quill Editor) */}
              <div className="relative">
                <label
                  htmlFor="content"
                  className="text-sm font-medium text-gray-700"
                >
                  Isi Artikel
                </label>
                <div className="relative h-72 overflow-hidden">
                  <ReactQuill
                    value={content}
                    onChange={setContent}
                    modules={{
                      toolbar: [
                        [{ header: "1" }, { header: "2" }, { font: [] }], // Header dan font
                        [{ size: ["small", "medium", "large", "huge"] }], // Ukuran teks
                        [{ list: "ordered" }, { list: "bullet" }], // List ordered dan bullet
                        [{ indent: "-1" }, { indent: "+1" }], // Indentasi
                        ["bold", "italic", "underline", "strike"], // Gaya teks
                        [{ color: [] }, { background: [] }], // Warna teks dan latar belakang
                        [{ align: [] }], // Penyusunan teks (kiri, tengah, kanan)
                        ["blockquote", "code-block"], // Blockquote dan kode
                        [{ direction: "rtl" }], // Bahasa kanan ke kiri
                      ],
                    }}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Category */}
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
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
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
              className="rounded-md bg-green-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              {article ? "Perbarui Artikel" : "Tambah Artikel"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
