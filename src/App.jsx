"use client"

import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx"
import HomePage from "./pages/HomePage/HomePage.jsx"
import AboutPage from "./pages/AboutPage/AboutPage.jsx"
import BlogPage from "./pages/BlogPage/BlogPage.jsx"
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage.jsx"
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx"
import ContactPage from "./pages/ContactPage/ContactPage.jsx"
import Footer from "./components/Footer/Footer.jsx"
import StarryNight from "./components/StarryNight/StarryNight.jsx"
import "./App.css"

function App() {
  return (
    <div className="app">
      <StarryNight />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
