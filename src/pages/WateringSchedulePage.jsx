import { useEffect, useState } from "react";
import { SidebarComponent } from "../components/SidebarComponent"; // Tambahin komponen ini di setiap page
import { NavbarComponent } from "../components/NavbarComponent"; //Tambahin komponen ini di setiap page
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi"; // Ikon hamburger dan Arrow tambahin di setiap page
import { useNavigate } from "react-router-dom";
import { ToggleSwitch } from "flowbite-react";
import axiosInstance from "../utils/axiosInstance";
import emptyState from '../assets/empty-state.png'
import { Spinner } from "flowbite-react";
import formDateFormatter from "../utils/formDateFormatter";
import Swal from "sweetalert2";

export default function SideAndNav() {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const toggleTheme = {
    "root": {
      "base": "group flex rounded-lg focus:outline-none",
      "active": {
        "on": "cursor-pointer rounded-full bg-primary-500",
        "off": "cursor-not-allowed opacity-50"
      },
    },
    "toggle": {
      "base": "relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-0 group-focus:ring-primary-300/25",
    }
  }
  const [schedules, setSchedules] = useState([])

  useEffect(() => {
    fetchScehdules()
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }

  const activeDays = (repeat) => {
    const days = [
      { id: "Monday", label: "Se", active: false },
      { id: "Tuesday", label: "Se", active: false },
      { id: "Wednesday", label: "Ra", active: false },
      { id: "Thursday", label: "Ka", active: false },
      { id: "Friday", label: "Ju", active: false },
      { id: "Saturday", label: "Sa", active: false },
      { id: "Sunday", label: "Mi", active: false },
    ];

    repeat = repeat.split(",")
    for (let k in days) {
      if (repeat.includes(days[k].id)) {
        days[k].active = true
      }
    }

    return days
  }

  const handleToggle = (index) => {
    const updatedSchedules = schedules.map((schedule, i) =>
      i === index ? { ...schedule, turn_on_notif: !schedule.turn_on_notif } : schedule
    );
    updateSchedule(schedules[index], updatedSchedules);
  };

  const updateSchedule = async (schedule, updatedSchedules) => {
    try {
      setUpdateLoading(true)

      const formData = new FormData();
      formData.append("plant_name", schedule.plant_name);
      formData.append("repeat_every", schedule.repeat_every);
      formData.append("start_date", formDateFormatter(new Date(schedule.start_date)));
      formData.append("end_date", formDateFormatter(new Date(schedule.end_date)));
      formData.append("turn_on_notif", !schedule.turn_on_notif);

      const response = await axiosInstance.put("/schedules/" + schedule.id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.data.meta.status) {
        setSchedules(updatedSchedules);
      }

      setUpdateLoading(false)
    } catch (error) {
      console.log("error updating schedules: ", error)
      setUpdateLoading(false)
    }
  }

  const fetchScehdules = async () => {
    try {
      setLoading(true)

      const response = await axiosInstance.get("/schedules");
      if (response.data.meta.status) {
        setSchedules(response.data.data)
      }

      setLoading(false)
    } catch (error) {
      console.log("error fetch schedules: ", error)
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Hapus Jadwal",
      text: "Apakah kamu yakin?",
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: "Kembali",
      confirmButtonText: "Ya, hapus",
      confirmButtonColor: "#C20A0A",
    })

    if (result.isConfirmed) {
      Swal.fire({
        title: "Memproses..",
        text: "Mohon tunggu sebentar",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),       
      });

      try {
        const response = await axiosInstance.delete("schedules/" + id)
        if (response.data.meta.status) {
          fetchScehdules();
          Swal.close();
        }
      } catch (error) {
        Swal.close();
        Swal.fire({
          title: "Gagal",
          text: "Terjadi kesalahan saat menghapus jadwal",
          icon: "error",
          confirmButtonText: "Okay",
          confirmButtonColor: "#3DAC21",
        });
        console.log("error when deleting schedule: ", error)
      }
    }
  }

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar Component */}
        <SidebarComponent isSidebarOpen={isSidebarOpen} />

        {/*Content */}
        <main className="flex-grow bg-gray-100">
          {/* Hamburger Icon */}
          <div
            className="lg:hidden fixed top-2 left-2 bg-transparent text-primary-400 p-2 rounded-md z-50 cursor-pointer"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <HiOutlineArrowLeft className="w-6 h-6 align-middle" /> //closed icon
            ) : (
              <HiOutlineMenu className="w-6 h-6" /> // Hamburger icon
            )}
          </div>

          {/* Content */}
          <div className="relative lg:pl-64 bg-gray-100 pb-8">
            {/* Navbar Component */}
            <NavbarComponent />

            <div className="border-l-4 border-primary-100 m-8 px-4 py-2 flex flex-row gap-4 justify-between items-center">
              <div>
                <h1 className="text-xl font-roboto-700 text-primary-300">Jadwal Penyiraman</h1>
                <p className="mt-2 text-sm font-roboto-300 text-neutral-500">Atur jadwal penyiraman tanaman Anda agar tidak terlewat. Dengan jadwal yang terorganisir, tanaman akan tetap sehat dan tumbuh optimal.</p>
              </div>
              <div>
                <button
                  onClick={() => navigate("/jadwal-penyiraman/add")}
                  type="button"
                  className="px-8 py-3 whitespace-nowrap bg-primary-500 text-neutral-100 font-semibold rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
                >
                  Tambah Jadwal
                </button>
              </div>
            </div>

            {loading ? (
              <div className="flex  flex-col justify-center items-center">
                <Spinner theme={{ "color": { "success": "fill-[#3DAC21]" } }} color="success" aria-label="Extra large spinner example" size="xl" />
                <span className="mt-4 font-roboto-400 text-neutral-500">Memuat data..</span>
              </div>
            ) : schedules.length == 0 ? (
              <div className="flex items-center justify-center h-screen">
                <img className="w-80" src={emptyState} alt="empty-state" />
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-6 mx-8">
                  {schedules.map((schedule, index) => (
                    <div key={schedule.id} className="border border-neutral-300 bg-white rounded-md p-4">
                      <div className="flex flex-row gap-4 justify-between items-center mb-5">
                        <p className="font-roboto-700 text-gray-800 text-lg">{schedule.plant_name}</p>
                        <div>
                          <ToggleSwitch disabled={updateLoading} checked={schedule.turn_on_notif} theme={toggleTheme} onChange={() => handleToggle(index)} />
                        </div>
                      </div>

                      <div className="flex flex-row gap-2 items-center mb-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.0625 9.40625C17.25 9.40625 19.0625 7.625 19.0625 5.40625C19.0625 3.21875 17.2812 1.40625 15.0625 1.40625C13.4375 1.40625 12.0312 2.375 11.4062 3.78125C10.625 3.34375 9.75 3.0625 8.8125 2.96875V1.8125C8.8125 1.4375 8.5 1.125 8.125 1.125C7.75 1.125 7.4375 1.4375 7.4375 1.8125V3C7.40625 3 7.375 3 7.34375 3C4.15625 3.34375 1.75 5.90625 1.75 8.96875V14.5313C1.71875 14.7813 1.65625 14.9063 1.625 15L1.125 15.875C0.937496 16.1563 0.906246 16.5313 1.09375 16.8438L1.125 16.875C1.3125 17.1563 1.59375 17.3125 1.9375 17.3125H7.46875V18.2188C7.46875 18.5938 7.78125 18.9063 8.15625 18.9063C8.53125 18.9063 8.84375 18.5938 8.84375 18.2188V17.3125H14.4062C14.75 17.3125 15.0312 17.1563 15.2187 16.875C15.4062 16.5625 15.4062 16.1875 15.2187 15.875L14.6875 15.0313C14.5937 14.875 14.5312 14.7188 14.5312 14.5625V9.34375C14.6875 9.375 14.875 9.40625 15.0625 9.40625ZM15.0625 2.8125C16.5 2.8125 17.6562 3.96875 17.6562 5.40625C17.6562 6.84375 16.5 8 15.0625 8C13.625 8 12.4687 6.84375 12.4687 5.40625C12.4687 3.96875 13.625 2.8125 15.0625 2.8125ZM13.125 8.875V14.5625C13.125 14.9688 13.25 15.375 13.4687 15.7813L13.5312 15.9063H8.15625C8.15625 15.9063 8.15625 15.9063 8.125 15.9063C8.09375 15.9063 8.125 15.9063 8.09375 15.9063H2.71875L2.84375 15.7188C3 15.4375 3.09375 15.125 3.15625 14.6875V9C3.15625 6.65625 5.03125 4.65625 7.5 4.40625C8.78125 4.25 10.0312 4.5625 11.0625 5.25C11.0625 5.3125 11.0625 5.375 11.0625 5.40625C11.0625 6.90625 11.9062 8.1875 13.125 8.875Z" fill="#3DAC21" />
                        </svg>
                        <span className="text-sm font-roboto-500 text-neutral-400">
                          {formatDate(schedule.start_date)}
                        </span>
                        <span className="text-sm font-roboto-500 text-neutral-400">-</span>
                        <span className="text-sm font-roboto-500 text-neutral-400">
                          {formatDate(schedule.end_date)}
                        </span>
                      </div>
                      <span className="text-sm font-roboto-400 text-gray-500 mb-5">Waktu penyiraman: 06.00 WIB</span>

                      <div className="flex flex-row gap-2 items-center mb-8 mt-5">
                        {activeDays(schedule.repeat_every).map((day) => (
                          <div
                            key={day.id}
                            className={
                              `font-roboto-600 text-sm h-10 w-10 flex items-center justify-center rounded-full
                              ${day.active ? "bg-primary-300 border border-primary-300 text-white" : "bg-primary-700 bg-opacity-30 border border-primary-400 text-primary-400"}`}
                          >
                            {day.label}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-row gap-4">
                        <button
                          onClick={() => navigate("/jadwal-penyiraman/edit/" + schedule.id)}
                          type="button"
                          className="p-3 whitespace-nowrap bg-primary-300 text-neutral-100 font-semibold rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
                        >
                          Edit Jadwal
                        </button>
                        <button
                          onClick={() => (handleDelete(schedule.id))}
                          type="button"
                          className="p-3 whitespace-nowrap bg-error-400 text-neutral-100 font-semibold rounded-lg hover:bg-error-500 focus:outline-none focus:ring-2 focus:ring-error-400"
                        >
                          Hapus Jadwal
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
