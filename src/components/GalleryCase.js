import React from "react";
import "./GalleryCase.css";
import "../App.css";
import {
  Summer1,
  Blur1,
  Class1,
  Orange1,
  Pinboard1,
  Techni1,
} from "./photoGallery";

const galleryCase = () => {
  // console.log(galleryJson);

  return (
    <div className="GalleryDisplayCase">
      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <img className="Merch_Item_Image" src={Summer1} alt="hi there" />
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div>

      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <img className="Merch_Item_Image" src={Blur1} alt="hi there" />
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div>
      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <img className="Merch_Item_Image" src={Class1} alt="hi there" />
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div>
      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <img className="Merch_Item_Image" src={Orange1} alt="hi there" />
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div>
      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <img className="Merch_Item_Image" src={Pinboard1} alt="hi there" />
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div>
      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <img className="Merch_Item_Image" src={Techni1} alt="hi there" />
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div>
    </div>
  );
};

export default galleryCase;
