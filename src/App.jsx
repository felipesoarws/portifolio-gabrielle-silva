import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
