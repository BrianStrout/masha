import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header";
import Home2 from "./components/home2";
import Introducing from "./components/introducing";
import Contact from "./components/Contact";
import GalleryControl from "./components/GalleryControl";
import CompCard from "./components/CompCard";
import Scroll from "./components/mechanics/Scroller.jsx";

const App = () => {
  const location = useLocation();
  const detected = window.innerWidth;
  const [isMobile, detectMobile] = useState(false);
  if (!isMobile && detected <= 750) {
    console.log("less", detected);
    detectMobile(true);
  }
  // console.log(isMobile, "again?");

  const [mainHeadOpacity, setMainHeadOpacity] = useState(0);
  const [subHeadOpacity, setSubHeadOpacity] = useState(0);
  const [headColor, setHeadColor] = useState("green");
  const [tuckedLeft, setTuckedLeft] = useState(true);
  const [variableForScrollDesk, setVariableForScrollDesk] = useState(1);

  useEffect(() => {
    // console.log("changed on app: " + mainHeadOpacity);
  }, [mainHeadOpacity]);

  return (
    <div className="main_container">
      <Header
        mainHeadOpacity={mainHeadOpacity}
        subHeadOpacity={subHeadOpacity}
        headColor={headColor}
        tuckedLeft={tuckedLeft}
      />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home2 isMobile={isMobile} />} />
          <Route
            path="introducing"
            element={
              <Introducing
                isMobile={isMobile}
                setMainHeadOpacity={setMainHeadOpacity}
                setSubHeadOpacity={setSubHeadOpacity}
                setHeadColor={setHeadColor}
                tuckedLeft={tuckedLeft}
                setTuckedLeft={setTuckedLeft}
                variableForScrollDesk={variableForScrollDesk}
                setVariableForScrollDesk={setVariableForScrollDesk}
              />
            }
          />
          <Route
            path="gallery"
            element={<GalleryControl isMobile={isMobile} />}
          />
          <Route path="contact" element={<Contact isMobile={isMobile} />} />
          <Route path="head" element={<Header isMobile={isMobile} />} />
          <Route path="comp" element={<CompCard isMobile={isMobile} />} />
          <Route path="scrolls" element={<Scroll isMobile={isMobile} />} />

          {/* errrorrrrr */}
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
