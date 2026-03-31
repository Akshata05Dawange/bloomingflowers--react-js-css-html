import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Ourservices from "./views/OurServices/OurServices";
import Notfound from "./views/Notfound/Notfound";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="app-layout">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourservices" element={<Ourservices />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
