import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WateringSchedulePage from "./pages/WateringSchedulePage";
import WateringScheduleFormPage from "./pages/WateringScheduleFormPage";
import SideAndNav from "./pages/SideAndNav";
import PerawatanTanaman from "./pages/PerawatanTanaman";
import UserProtectedRoutes from "./routes/UserProtectedRoutes";
import AdminProtectedRoutes from "./routes/AdminProtectedRoutes";
import AlertPassword from "./components/AlertPassword";
import LoadingAnimation from "./components/LoadingAnimation";
import ChatbotPage from "./pages/ChatbotPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import FarmCommunityPage from "./pages/FarmCommunityPage";
import AdminArticlePage from "./pages/AdminArticlePage";
import AdminCommunityPage from "./pages/AdminCommunityPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sidenav" element={<SideAndNav />} />
        <Route path="/perawatan" element={<PerawatanTanaman />} />

        {/* User Private Route */}
        <Route element={<UserProtectedRoutes />}>
          <Route path="/homepage" element={<SideAndNav />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/jadwal-penyiraman" element={<WateringSchedulePage />} />
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
        </Route>
        <Route path="/komunitas-petani" element={<FarmCommunityPage />} />

        {/* Admin Private Route */}
        <Route element={<AdminProtectedRoutes />}>
          <Route path="/dashboard" element={<AdminArticlePage />} />
          <Route path="/admin-article" element={<AdminArticlePage />} />
          <Route path="/admin-komunitas" element={<AdminCommunityPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
