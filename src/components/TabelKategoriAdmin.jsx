import { Table, Modal, Button } from "flowbite-react";
import { useState } from "react";
import useCategory from "../hooks/useCategory";

export default function TabelKategoriAdmin2() {
  // State untuk modal
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // State untuk form input
  const [formData, setFormData] = useState({
    nama: "",
    jenis: "",
  });

  // Hooks untuk kategori
  const {
    categories,
    isLoading,
    error,
    addCategory,
    editCategory,
    deleteCategory,
  } = useCategory();

  // Function untuk membuka modal (untuk tambah atau edit)
  const handleOpen = (category = null) => {
    if (category) {
      setIsEditing(true);
      setEditId(category.id);
      setFormData({ nama: category.name, jenis: category.type });
    } else {
      setIsEditing(false);
      setFormData({ nama: "", jenis: "" });
    }
    setIsOpen(true);
  };

  // Function untuk menutup modal
  const handleClose = () => {
    setIsOpen(false);
    setFormData({ nama: "", jenis: "" }); // Reset form saat modal ditutup
  };

  // Function untuk handle perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function untuk handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.nama && formData.jenis) {
      if (isEditing) {
        await editCategory(editId, {
          name: formData.nama,
          type: formData.jenis,
        });
      } else {
        await addCategory({ name: formData.nama, type: formData.jenis });
      }
      handleClose();
    } else {
      Swal.fire({
        icon: "warning",
        title: "Form Tidak Lengkap",
        text: "Mohon isi semua kolom sebelum menyimpan.",
      });
    }
  };

  // Function untuk menghapus kategori
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Apakah Anda Yakin?",
      text: "Kategori yang dihapus tidak dapat dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (confirm.isConfirmed) {
      await deleteCategory(id);
    }
  };

  return (
    <div className="overflow-x-auto px-[40px] py-[24px]">
      {/* Header */}
      <div className="flex justify-between items-center pb-3">
        <div className="kategori font-roboto-500 text-neutral-400 text-[28px]">
          Kategori
        </div>
        <button
          onClick={() => handleOpen()}
          className="bg-primary-400 text-white px-4 py-2 hover:bg-green rounded-xl"
        >
          Tambah
        </button>
      </div>

      {/* Tabel */}
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Nama Kategori</Table.HeadCell>
          <Table.HeadCell>Jenis Kategori</Table.HeadCell>
          <Table.HeadCell>Aksi</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan="3" className="text-center">
                Loading...
              </Table.Cell>
            </Table.Row>
          ) : error ? (
            <Table.Row>
              <Table.Cell colSpan="3" className="text-center text-red-500">
                {error}
              </Table.Cell>
            </Table.Row>
          ) : (
            categories.map((category) => (
              <Table.Row key={category.id}>
                <Table.Cell>{category.name}</Table.Cell>
                <Table.Cell>{category.type}</Table.Cell>
                <Table.Cell>
                  <button
                    className="text-blue-500"
                    onClick={() => handleOpen(category)}
                  >
                    <svg
                      width="32"
                      height="25"
                      viewBox="0 0 32 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="32"
                        height="24"
                        rx="5"
                        fill="#3DAC21"
                        fill-opacity="0.25"
                      />
                      <g clip-path="url(#clip0_671_2555)">
                        <path
                          d="M23.3 7.74995C22.5 6.89995 21.65 6.04995 20.8 5.22495C20.625 5.04995 20.425 4.94995 20.2 4.94995C19.975 4.94995 19.75 5.02495 19.6 5.19995L10.175 14.55C10.025 14.7 9.92501 14.875 9.85001 15.05L8.47501 19.25C8.40001 19.45 8.45001 19.65 8.55001 19.8C8.67501 19.95 8.85001 20.05 9.07501 20.05H9.17501L13.45 18.625C13.65 18.55 13.825 18.45 13.95 18.3L23.325 8.94995C23.475 8.79995 23.575 8.57495 23.575 8.34995C23.575 8.12495 23.475 7.92495 23.3 7.74995ZM13.15 17.525C13.125 17.55 13.1 17.55 13.075 17.575L9.85001 18.65L10.925 15.425C10.925 15.4 10.95 15.375 10.975 15.35L17.85 8.49995L20.025 10.675L13.15 17.525ZM20.8 9.87495L18.625 7.69995L20.15 6.17495C20.875 6.87495 21.6 7.62495 22.3 8.34995L20.8 9.87495Z"
                          fill="#266B15"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_671_2555">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(8 4.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button
                    className="text-red-500 ml-2"
                    onClick={() => handleDelete(category.id)}
                  >
                    <svg
                      width="32"
                      height="25"
                      viewBox="0 0 32 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="32"
                        height="24"
                        rx="5"
                        fill="#F10C0C"
                        fill-opacity="0.3"
                      />
                      <g clip-path="url(#clip0_671_2553)">
                        <path
                          d="M20.225 6.70005H18.3V6.27505C18.3 5.52505 17.7 4.92505 16.95 4.92505H15.025C14.275 4.92505 13.675 5.52505 13.675 6.27505V6.70005H11.75C11.025 6.70005 10.425 7.30005 10.425 8.02505V8.77505C10.425 9.32505 10.75 9.77505 11.225 9.97505L11.625 18.625C11.675 19.45 12.325 20.075 13.15 20.075H18.775C19.6 20.075 20.275 19.425 20.3 18.625L20.75 9.95005C21.225 9.75005 21.55 9.27505 21.55 8.75005V8.00005C21.55 7.30005 20.95 6.70005 20.225 6.70005ZM14.825 6.27505C14.825 6.15005 14.925 6.05005 15.05 6.05005H16.975C17.1 6.05005 17.2 6.15005 17.2 6.27505V6.70005H14.85V6.27505H14.825ZM11.575 8.02505C11.575 7.92505 11.65 7.82505 11.775 7.82505H20.225C20.325 7.82505 20.425 7.90005 20.425 8.02505V8.77505C20.425 8.87505 20.35 8.97505 20.225 8.97505H11.775C11.675 8.97505 11.575 8.90005 11.575 8.77505V8.02505ZM18.8 18.95H13.2C12.975 18.95 12.8 18.775 12.8 18.575L12.4 10.1H19.625L19.225 18.575C19.2 18.775 19.025 18.95 18.8 18.95Z"
                          fill="#F10C0C"
                        />
                        <path
                          d="M16 12.275C15.7 12.275 15.425 12.525 15.425 12.85V16.725C15.425 17.025 15.675 17.3 16 17.3C16.3 17.3 16.575 17.05 16.575 16.725V12.825C16.575 12.525 16.3 12.275 16 12.275Z"
                          fill="#F10C0C"
                        />
                        <path
                          d="M18.325 12.75C18.025 12.725 17.75 12.975 17.725 13.275L17.575 16.15C17.55 16.45 17.8 16.725 18.1 16.75H18.125C18.425 16.75 18.675 16.525 18.675 16.225L18.825 13.35C18.875 13.025 18.625 12.775 18.325 12.75Z"
                          fill="#F10C0C"
                        />
                        <path
                          d="M13.65 12.75C13.35 12.775 13.1 13.025 13.125 13.35L13.3 16.25C13.325 16.55 13.575 16.775 13.85 16.775H13.875C14.175 16.75 14.425 16.5 14.4 16.175L14.25 13.275C14.225 12.975 13.95 12.725 13.65 12.75Z"
                          fill="#F10C0C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_671_2553">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(8 4.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>

      {/* Modal Form */}
      <Modal show={isOpen} size="md" popup onClose={handleClose}>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="nama" className="block mb-2">
                  Nama Kategori
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="jenis" className="block mb-2">
                  Jenis Kategori
                </label>
                <select
                  id="jenis"
                  name="jenis"
                  value={formData.jenis}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                >
                  <option value="">Pilih jenis</option>
                  <option value="article">Artikel</option>
                  <option value="plant">Tanaman</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <Button color="gray" onClick={handleClose}>
                  Batal
                </Button>
                <Button type="submit" color="green">
                  {isEditing ? "Simpan Perubahan" : "Tambah"}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
