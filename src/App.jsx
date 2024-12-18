import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WateringSchedulePage from "./pages/WateringSchedulePage";
import WateringScheduleFormPage from "./pages/WateringScheduleFormPage";
import PerawatanTanaman from "./pages/PerawatanTanaman";
import UserProtectedRoutes from "./routes/UserProtectedRoutes";
import AdminProtectedRoutes from "./routes/AdminProtectedRoutes";
import AlertPassword from "./components/AlertPassword";
import CarePage from "./pages/CarePage";
import DetailEnrollment from "./pages/DetailEnrollment";


import SideAndNav from "./pages/SideAndNav";
import HeroCuaca from "./pages/HeroCuaca";
import FormCuaca from "./pages/FormCuaca";
import WeatherDetails from "./pages/WeatherDetails";
import TodayWeatherPage from "./pages/TodayWeatherPage";
import CurentWeatherPage from "./pages/CurrentWeatherPage";
import DailyWeatherPage from "./pages/DailyWeatherPage";

import LoadingAnimation from "./components/LoadingAnimation";
import ChatbotPage from "./pages/ChatbotPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import FarmCommunityPage from "./pages/FarmCommunityPage";
import AdminArticlePage from "./pages/AdminArticlePage";
import AdminCommunityPage from "./pages/AdminCommunityPage";
import AdminCommunityActionsPage from "./pages/AdminCommunityActionsPage";
import AdminKategoriPage from "./pages/AdminKategoriPage";
import UserNotificationPage from "./pages/UserNotificationPage";
import AdminNotificationPage from "./pages/AdminNotificationPage";
import HomePage from "./pages/HomePage";
import AdminStepPlantsPage from "./pages/AdminStepPlantsPage";
import AdminPerawatanPage from "./pages/AdminPerawatanPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sidenav" element={<SideAndNav />} />
        

        {/* User Private Route */}
        <Route element={<UserProtectedRoutes />}>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/cuaca" element={<HeroCuaca />} />
          <Route path="/formcuaca" element={<FormCuaca />} />
          <Route path="/weather-details" element={<WeatherDetails />} />
          <Route path="/todayweather" element={<TodayWeatherPage />} />
          <Route path="/currentweather" element={<CurentWeatherPage />} />
          <Route path="/dailyweather" element={<DailyWeatherPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/jadwal-penyiraman" element={<WateringSchedulePage />} />
          <Route path="/care/:id" element={<CarePage />} />
          <Route path="/perawatan-tanaman/:enrollmentId" element={<DetailEnrollment />} />
          <Route path="/perawatan" element={<PerawatanTanaman />} />
          <Route
            path="/jadwal-penyiraman/add"
            element={<WateringScheduleFormPage />}
          />
          <Route
            path="/jadwal-penyiraman/edit/:id"
            element={<WateringScheduleFormPage />}
          />
          <Route path="/artikel-pertanian" element={<ArticlePage />} />
          <Route
            path="/artikel-pertanian/:id"
            element={<ArticleDetailsPage />}
          />
          <Route path="/user-notification" element={<UserNotificationPage />} />
        </Route>
        <Route path="/komunitas-petani" element={<FarmCommunityPage />} />

        {/* Admin Private Route */}
        <Route element={<AdminProtectedRoutes />}>
          <Route path="/dashboard" element={<AdminArticlePage />} />
          <Route path="/admin-article" element={<AdminArticlePage />} />
          <Route path="/admin-perawatan" element={<AdminPerawatanPage />} />
          <Route path="/admin-komunitas" element={<AdminCommunityPage />} />
          <Route
            path="/admin-komunitas/actions/:postId"
            element={<AdminCommunityActionsPage />}
          />
          <Route path="/admin-kategori" element={<AdminKategoriPage />} />
          <Route
            path="/admin-notification"
            element={<AdminNotificationPage />}
          />
          <Route
            path="/admin-step-plants/:plantId"
            element={<AdminStepPlantsPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
