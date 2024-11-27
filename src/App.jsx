import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-primary-600 text-5xl font-roboto-700">Tes</h1>
      {/* Navbar Taruh di Apps <Navbar/> */}
      <Router>
        <Routes>{/* <Route path="/" element={<LandingPage />} /> */}</Routes>
      </Router>
    </>
  );
}

export default App;
