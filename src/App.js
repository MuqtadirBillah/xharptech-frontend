import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import animate from './animate.css'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ServicesPageUpdated from "./components/ServicesPageUpdated";
import WorkPage from "./components/WorkPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import OurPortfolioPage from "./components/OurPortfolioPage";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <Router>
        <Routes>
          <Route  path="/" exact element={<Home />} />
          <Route  path="/services" exact element={<ServicesPageUpdated />} />
          <Route  path="/our-portfolio" exact element={<OurPortfolioPage />} />
          <Route  path="/about" exact element={<AboutPage />} />
          <Route  path="/contact" exact element={<ContactPage />} />
          {/* <Route  path="*" exact element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
