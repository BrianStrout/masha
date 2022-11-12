import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import GalleryCase from "./GalleryCase";

import Focus1 from "./GalleryFocuses/Focus1";
import Focus2 from "./GalleryFocuses/Focus2";
import Focus3 from "./GalleryFocuses/Focus3";
import Focus4 from "./GalleryFocuses/Focus4";
import Focus5 from "./GalleryFocuses/Focus5";
import Focus6 from "./GalleryFocuses/Focus6";

import "../App.css";
import "./GalleryCase.css";

const GalleryControl = () => {
  const [slideCalled, updateSlide] = useState(<GalleryCase />);

  useEffect(() => {
    let handler = (e) => {
      if (
        e.target.classList.contains("Display_Item_Photo") ||
        e.target.classList.contains("focus_tab")
      ) {
        console.log(e.target.id + "this is the handlers target id");

        switch (e.target.id) {
          case "hi":
            console.log("works");
            break;

          case "Menu":
            updateSlide(<GalleryCase />);
            break;
          case "Focus1":
            updateSlide(<Focus1 update={handler} />);
            break;
          case "Focus2":
            updateSlide(<Focus2 update={handler} />);
            break;
          case "Focus3":
            updateSlide(<Focus3 update={handler} />);
            break;
          case "Focus4":
            updateSlide(<Focus4 update={handler} />);
            break;
          case "Focus5":
            updateSlide(<Focus5 update={handler} />);
            break;
          case "Focus6":
            updateSlide(<Focus6 update={handler} />);
            break;

          default:
            break;
        }
      }
    };
    document.addEventListener("click", handler);
  });

  return <div className="GalleryControl">{slideCalled}</div>;
};

export default GalleryControl;
