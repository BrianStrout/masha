import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header";
import Home2 from "./components/home2";
import Introducing from "./components/introducing";
import GalleryCase from "./components/GalleryCase";

const App = () => {
  const location = useLocation();

  return (
    <div className="main_container">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home2 />} />
          <Route path="introducing" element={<Introducing />} />
          <Route path="gallery" element={<GalleryCase />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
