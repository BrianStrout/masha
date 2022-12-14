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

const GalleryCase = () => {
  // console.log(galleryJson);

  return (
    <div className="GalleryDisplayCase">
      <div className="DisplayItem" data-key={"1"}>
        <div
          className="Display_Item_Photo"
          id="Focus1"
          style={{
            backgroundImage: `url(${Summer1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">At The Vineyard</div>
      </div>
      <div className="DisplayItem">
        <div
          className="Display_Item_Photo"
          id="Focus2"
          style={{
            backgroundImage: `url(${Blur1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">Blurred Solo</div>
      </div>
      <div className="DisplayItem">
        <div
          className="Display_Item_Photo"
          id="Focus3"
          style={{
            backgroundImage: `url(${Class1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">Summertime Somber</div>
      </div>
      <div className="DisplayItem">
        <div
          className="Display_Item_Photo"
          id="Focus4"
          style={{
            backgroundImage: `url(${Orange1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">London Locked Down</div>
      </div>
      <div className="DisplayItem">
        <div
          className="Display_Item_Photo"
          id="Focus5"
          style={{
            backgroundImage: `url(${Pinboard1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">PinBoard</div>
      </div>
      <div className="DisplayItem">
        <div
          className="Display_Item_Photo"
          id="Focus6"
          style={{
            backgroundImage: `url(${Techni1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">Techni</div>
      </div>
    </div>
  );
};

export default GalleryCase;
