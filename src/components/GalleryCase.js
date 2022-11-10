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
        <div
          className="Display_Item_Photo"
          style={{
            backgroundImage: `url(${Summer1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">Summer Shot</div>
      </div>
      <div className="DisplayItem">
        <div
          className="Display_Item_Photo"
          style={{
            backgroundImage: `url(${Blur1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">Summer Shot</div>
      </div>
      <div className="DisplayItem">
        <div
          className="Display_Item_Photo"
          style={{
            backgroundImage: `url(${Class1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">Summer Shot</div>
      </div>
      <div className="DisplayItem">
        <div
          className="Display_Item_Photo"
          style={{
            backgroundImage: `url(${Orange1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">Summer Shot</div>
      </div>
      <div className="DisplayItem">
        <div
          className="Display_Item_Photo"
          style={{
            backgroundImage: `url(${Pinboard1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">Summer Shot</div>
      </div>
      <div className="DisplayItem">
        <div
          className="Display_Item_Photo"
          style={{
            backgroundImage: `url(${Techni1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="Display_Title">Summer Shot</div>
      </div>

      {/*
      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <div
            className="Merch_Item_Image"
            style={{ background-image: { Blur1 } }}
          ></div>
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div>

      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <div
            className="Merch_Item_Image"
            style={{ background-image: { Class1 } }}
          ></div>
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div>

      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <div
            className="Merch_Item_Image"
            style={{ background-image: { Orange1 } }}
          ></div>
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div>

      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <div
            className="Merch_Item_Image"
            style={{ background-image: { Pinboard1 } }}
          ></div>
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div>
      <div className="DisplayItem">
        <div className="Display_Item_Photo">
          <div
            className="Merch_Item_Image"
            style={{ background-image: { Techni1 } }}
          ></div>
        </div>
        <div className="Display_Title">Summer Shot</div>
      </div> */}
    </div>
  );
};

export default galleryCase;
