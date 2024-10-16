import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import DesignDetails from "./pages/DesignDetails";
import PhotosDesign from "./pages/PhotosDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:id" element={<DesignDetails />} />
        <Route path="/photos/:id" element={<PhotosDesign />} />
      </Routes>
    </Router>
  );
}

export default App;
