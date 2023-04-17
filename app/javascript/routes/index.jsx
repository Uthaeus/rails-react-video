import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Projects from "../components/Projects";
import ProjectDetail from "../components/projectDetail";
import ContactPage from "../components/pages/contact";
import AboutPage from "../components/pages/about";

export default (
    <Router>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/project/:id' element={<ProjectDetail />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<AboutPage />} />
        </Routes>
    </Router>
);