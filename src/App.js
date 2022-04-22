import React from "react";
import animate from './animate.css'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import OurServices from "./components/OurServices";
import WorkPage from "./components/WorkPage";
import About from "./components/About";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route  path="/" exact element={<Home />} />
          <Route  path="/services" exact element={<OurServices />} />
          <Route  path="/work" exact element={<WorkPage />} />
          <Route  path="/about" exact element={<About />} />
          <Route  path="/contact" exact element={<ContactPage />} />
          {/* <Route  path="*" exact element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
