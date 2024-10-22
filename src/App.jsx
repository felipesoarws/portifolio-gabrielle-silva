import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ProjectDetails from "./pages/ProjectDetails";
import Works from "./pages/Works";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<ProjectDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
