import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProtectedRoutes from "./routes/UserProtectedRoutes";
import AdminProtectedRoutes from "./routes/AdminProtectedRoutes";
import LoadingAnimation from "./components/LoadingAnimation";
import AlertPassword from "./components/AlertPassword";
import SideAndNav from "./pages/SideAndNav";
import HeroCuaca from "./pages/HeroCuaca";
import FormCuaca from "./pages/FormCuaca";
import WeatherDetails from "./pages/WeatherDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sidenav" element={<SideAndNav />} />
          <Route path="/cuaca" element={<HeroCuaca/>} />


          {/* User Private Route */}
          <Route element={<UserProtectedRoutes />}>
            <Route path="/homepage" element={<AlertPassword />} />
            <Route path="/formcuaca" element={<FormCuaca/>} />
            <Route path="/weather-details" element={<WeatherDetails/>} />
          </Route>

          {/* Admin Private Route */}
          <Route element={<AdminProtectedRoutes />}>
            <Route path="/dashboard" element={<LoadingAnimation />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
