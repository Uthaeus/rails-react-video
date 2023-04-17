import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Projects from "../components/Projects";
import ProjectDetail from "../components/projectDetail";

export default (
    <Router>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/project/:id' element={<ProjectDetail />} />
        </Routes>
    </Router>
);