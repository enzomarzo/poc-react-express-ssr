import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;