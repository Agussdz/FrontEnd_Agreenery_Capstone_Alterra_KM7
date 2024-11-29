import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AlertPassword from "./components/AlertPassword";

function App() {
  return (
    <>
      {/* <AlertPassword/> */}
      {/* <RegisterPage/> */}
      {/* <LoginPage/> */}
      {/* Navbar Taruh di Apps <Navbar/> */}
      {/* <Login/> */}
      <Router>
        <Routes>{/* <Route path="/" element={<LandingPage />} /> */}</Routes>
      </Router>
    </>
  );
}

export default App;
