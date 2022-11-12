import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import GalleryCase from "./GalleryCase";
import Contact from "./Contact";
import Focus1 from "./GalleryFocuses/Focus1";
import Focus2 from "./GalleryFocuses/Focus2";
import Focus3 from "./GalleryFocuses/Focus3";
import Focus4 from "./GalleryFocuses/Focus4";
import Focus5 from "./GalleryFocuses/Focus5";
import Focus6 from "./GalleryFocuses/Focus6";

import "../App.css";
import "./GalleryCase.css";

function run() {
  console.log("run");
}

function switchBoard() {
  console.log("switch");
}

const GalleryControl = () => {
  const [slideCalled, updateSlide] = useState(<GalleryCase />);

  useEffect(() => {
    let handler = (e) => {
      if (e.target.classList.contains("Display_Item_Photo")) {
        console.log(e.target.id);
      }
    };
    document.addEventListener("click", handler);
  });

  return (
    <div className="GalleryControl">
      {slideCalled}

      <button onClick={() => updateSlide(<Focus1 />)}>handle1</button>
      <button onClick={() => updateSlide(<Focus2 />)}>handle2</button>
      <button onClick={() => updateSlide(<Focus3 />)}>handle3</button>
      <button onClick={() => updateSlide(<Focus4 />)}>handle4</button>
      <button onClick={() => updateSlide(<Focus5 />)}>handle5</button>
      <button onClick={() => updateSlide(<Focus6 />)}>handle6</button>
    </div>
  );
};

export default GalleryControl;
