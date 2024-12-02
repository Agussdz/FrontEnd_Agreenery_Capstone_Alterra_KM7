import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useLoginStore from "../stores/useLoginStore";
import axiosInstance from "../utils/axiosInstance";
import { jwtDecode } from "jwt-decode";

const AdminProtectedRoutes = () => {
  const token = useLoginStore((state) => state.token);
  const logout = useLoginStore((state) => state.logout);

  // Cek validitas token ketika halaman dimuat untuk memastikan token tidak dirusak
  useEffect(() => {
    const checkTokenValidity = async () => {
      if (!token) {
        return;
      }
      try {
        const response = await axiosInstance.get("/auth/me");
        if (response.status !== 200) {
          logout();
        }
      } catch (error) {
        logout();
      }
    };

    checkTokenValidity();
  }, [token, logout]);

  // Cek apakah token valid dan dapat di-decode
  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;

    // Redirect jika role bukan 'admin'
    if (!token || userRole !== "admin") {
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    logout();
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AdminProtectedRoutes;
