import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-[1700px] m-auto bg-black">
          <Navbar />
          <Routes>
            <Route exact path="/atveekdungarani/" element={<Home />} />
            <Route exact path="/atveekdungarani/about" element={<About />} />
            <Route
              exact
              path="/atveekdungarani/project"
              element={<Project />}
            />
            <Route
              exact
              path="/atveekdungarani/contact"
              element={<Contact />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
