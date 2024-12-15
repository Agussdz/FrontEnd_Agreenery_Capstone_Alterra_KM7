import { useState, useRef, useEffect } from "react";
import { SidebarComponent } from "../components/SidebarComponent"; // Tambahin komponen ini di setiap page
import { NavbarComponent } from "../components/NavbarComponent"; //Tambahin komponen ini di setiap page
import { HiOutlineArrowLeft, HiOutlineMenu } from "react-icons/hi"; // Ikon hamburger dan Arrow tambahin di setiap page
import DayButton from "../components/DayButton";
import { useNavigate, useParams } from "react-router-dom";
import CustomDatePicker from "../components/CustomDatePicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";
import { Spinner } from "flowbite-react";
import formDateFormatter from "../utils/formDateFormatter";

export default function SideAndNav() {
    const { id } = useParams();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const days = [
        { id: "Monday", label: "Senin" },
        { id: "Tuesday", label: "Selasa" },
        { id: "Wednesday", label: "Rabu" },
        { id: "Thursday", label: "Kamis" },
        { id: "Friday", label: "Jumat" },
        { id: "Saturday", label: "Sabtu" },
        { id: "Sunday", label: "Minggu" },
    ];
    const [activeDays, setActiveDays] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [initLoading, setInitLoading] = useState(false);
    const [plantName, setPlantName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file)
        }
    };

    const toggleDay = (dayId) => {
        setActiveDays((prev) => prev.includes(dayId) ? prev.filter((d) => d !== dayId) : [...prev, dayId])
    }

    useEffect(() => {
        if (id) {            
            fetchScehdule()
        }
    }, []);

    const fetchScehdule = async () => {
        try {
            setInitLoading(true)

            const response = await axiosInstance.get("/schedules/" + id)
            if (response.data.meta.status) {
                const schedule = response.data.data
                setPlantName(schedule.plant_name)
                setStartDate(new Date(schedule.start_date))
                setEndDate(new Date(schedule.end_date))
                setImageUrl(schedule.image)
                let repeat_days = schedule.repeat_every.split(",")
                setActiveDays(repeat_days)
            }

            setInitLoading(false)
        } catch (error) {
            console.log("error fetching schedule: ", error)
            setInitLoading(true)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("plant_name", plantName);
        formData.append("repeat_every", activeDays.join(","));
        formData.append("start_date", formDateFormatter(startDate));
        formData.append("end_date", formDateFormatter(endDate));
        if (selectedFile) {
            formData.append("image", selectedFile);
        }

        formData.forEach((value, key) => {
            console.log(`${key}:`, value);
        });

        try {
            setLoading(true);

            Swal.fire({
                title: "Memproses..",
                text: "Mohon tunggu sebentar",
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading(), // Menampilkan loading saat proses login
            });

            let response
            if (id) {
                response = await axiosInstance.put("/schedules/" + id, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
            } else {
                response = await axiosInstance.post("/schedules", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
            }

            if (response.data.meta.status) {
                let text = "Jadwal penyiraman telah berhasil ditambahkan."
                if (id) {
                    text = "Jadwal penyiraman telah berhasil diubah."
                }
                Swal.fire({
                    icon: "success",
                    title: "Berhasil",
                    text: text,
                    timer: 1500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    willClose: () => {
                        navigate("/jadwal-penyiraman");
                    },
                });
            }
        } catch (error) {
            setLoading(false);

            let title = "Gagal membuat Jadwal Penyiraman"
            if (id) {
                title = "Gagal mengubah Jadwal Penyiraman"
            }
            Swal.fire({
                icon: "error",
                title: title,
                text:
                    error.response?.data?.meta?.message ||
                    "Terjadi kesalahan, coba lagi.",
            });

            console.log("error creat/update watering schedule: ", error)
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
                    <div className="relative lg:pl-64 bg-gray-100 pb-2">
                        {/* Navbar Component */}
                        <NavbarComponent />
                        <div className="border-l-4 border-primary-100 m-8 px-4 py-2">
                            <h1 className="text-xl font-roboto-700 text-primary-300">Jadwal Penyiraman</h1>
                            <p className="mt-2 text-sm font-roboto-300 text-neutral-500">Atur jadwal penyiraman tanaman Anda agar tidak terlewat. Dengan jadwal yang terorganisir, tanaman akan tetap sehat dan tumbuh optimal.</p>
                        </div>

                        <div className="lg:p-10 m-8 border border-neutral-300 bg-white rounded-md">
                            {initLoading ? (
                                <div className="flex  flex-col justify-center items-center">                                    
                                    <Spinner theme={{ "color": { "success": "fill-[#3DAC21]" } }} color="success" aria-label="Extra large spinner example" size="xl" />
                                    <span className="mt-4 font-roboto-400 text-neutral-500">Memuat data..</span>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-row mb-5">
                                        {imageUrl ? (
                                            <img className="h-20 w-20 object-contain border border-radius rounded-md mr-4" src={imageUrl} alt="plant-image" />
                                        ) : (
                                            <div />
                                        )}
                                        <div className="w-full">
                                            <label
                                                htmlFor="plant_name"
                                                className="block text-neutral-400 text-sm font-medium"
                                            >
                                                Nama Tanaman
                                            </label>
                                            <input
                                                type="text"
                                                id="plant_name"
                                                value={plantName}
                                                onChange={(e) => setPlantName(e.target.value)}
                                                className="mt-1 w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                placeholder="Masukkan nama tanaman anda"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            htmlFor="repeat_every"
                                            className="block text-neutral-400 text-sm font-medium mb-2"
                                        >
                                            Hari Penyiraman
                                        </label>
                                        <div className="flex flex-row gap-1">
                                            {days.map((day) => (
                                                <DayButton key={day.id} id={day.id} label={day.label} onToggle={toggleDay} isActive={activeDays.includes(day.id)} />

                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-row w-full mb-5 gap-4">
                                        <div className="w-full">
                                            <label
                                                htmlFor="end_date"
                                                className="block text-neutral-400 text-sm font-medium"
                                            >
                                                Tanggal Mulai
                                            </label>
                                            <CustomDatePicker selectedDate={startDate} setSelectedDate={setStartDate} />
                                        </div>

                                        <div className="w-full">
                                            <label
                                                htmlFor="start_date"
                                                className="block text-neutral-400 text-sm font-medium"
                                            >
                                                Tanggal Berakhir
                                            </label>
                                            <CustomDatePicker selectedDate={endDate} setSelectedDate={setEndDate} />
                                        </div>
                                    </div>

                                    <div className="mb-5 w-full">
                                        <label
                                            className="block text-neutral-400 text-sm font-medium mb-2"
                                        >
                                            Lampirkan Gambar Tanamanmu
                                        </label>
                                        <div className="flex flex-row items-center gap-2">
                                            <div>
                                                <input
                                                    type="file"
                                                    id="plant-image"
                                                    className="hidden"
                                                    accept="image/*"
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => fileInputRef.current.click()}
                                                    className="px-4 py-2 bg-neutral-300 text-gray-900 text-sm rounded-md"
                                                >
                                                    Pilih file
                                                </button>
                                            </div>

                                            <span className="text-sm text-neutral-400">
                                                {selectedFile ? selectedFile.name : "Tidak ada file yang dipilih"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-row gap-4">
                                    <button type="submit"
                                        className={`
                                        w-52 py-3 mt-5 bg-primary-500 text-neutral-100 font-semibold rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400
                                        ${loading ? "opacity-50" : ""}
                                    `}
                                        disabled={loading}>
                                        Simpan
                                    </button>     
                                    <button type="button" onClick={() => navigate("/jadwal-penyiraman")}
                                        className={`
                                        w-52 py-3 mt-5 bg-white text-primary-300 border border-primary-300 font-semibold rounded-lg hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-400
                                        ${loading ? "opacity-50" : ""}
                                    `}
                                        disabled={loading}>
                                        Kembali
                                    </button>                                           
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}