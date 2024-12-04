import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages";

function App() {
  return (
    <>
   
    <Home />
     
      {/* Navbar Taruh di Apps <Navbar/> */}
    
      <Router>
        <Routes>{/* <Route path="/" element={<LandingPage />} /> */}</Routes>
      </Router>
    </>
  );
}

export default App;
