import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SideAndNav from "./pages/SideAndNav";
import PerawatanTanaman from "./pages/PerawatanTanaman";
import UserProtectedRoutes from "./routes/UserProtectedRoutes";
import AdminProtectedRoutes from "./routes/AdminProtectedRoutes";
import AlertPassword from "./components/AlertPassword";
import LoadingAnimation from "./components/LoadingAnimation";
import CarePage from "./pages/CarePage";
import DetailEnrollment from "./pages/DetailEnrollment";

function App() {
  return (
    <Router>
      {/* <h1 className="text-primary-600 text-5xl font-roboto-700">Tes</h1> */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sidenav" element={<SideAndNav />} /> 
        <Route path="/perawatan" element={<PerawatanTanaman />} /> 
        <Route path="/care/:id" element={<CarePage />} />
        <Route path="/perawatan-tanaman/:enrollmentId" element={<DetailEnrollment />} />
        

        {/* User Private Route */}
        <Route element={<UserProtectedRoutes />}>
          <Route path="/homepage" element={<AlertPassword />} />
        </Route>

        {/* Admin Private Route */}
        <Route element={<AdminProtectedRoutes />}>
          <Route path="/dashboard" element={<LoadingAnimation />} />
        </Route>
      </Routes>
    </Router> 
  );
}

export default App;
