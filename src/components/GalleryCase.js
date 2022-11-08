import React from "react";
import "./GalleryCase.css";
<script
  src="https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js"
  async
></script>;

const galleryCase = () => {
  return (
    <div className="GalleryDisplayCase">
      <div className="DisplayItem">
        <div className="DisplayItemPhoto">
          <img src="" alt="photo here" />
        </div>
        <div className="DisplayTitle">1</div>
      </div>
      <div className="DisplayItem">
        <div className="DisplayItemPhoto">
          <img src="" alt="photo here" />
        </div>
        <div className="DisplayTitle">2</div>
      </div>
      <div className="DisplayItem">
        <div className="DisplayItemPhoto">
          <img src="" alt="photo here" />
        </div>
        <div className="DisplayTitle">3</div>
      </div>
      <div className="DisplayItem">
        <div className="DisplayItemPhoto">
          <img src="" alt="photo here" />
        </div>
        <div className="DisplayTitle">4</div>
      </div>
      <div className="DisplayItem">
        <div className="DisplayItemPhoto">
          <img src="" alt="photo here" />
        </div>
        <div className="DisplayTitle">5</div>
      </div>
      <div className="DisplayItem">
        <div className="DisplayItemPhoto">
          <img src="" alt="photo here" />
        </div>
        <div className="DisplayTitle">6</div>
      </div>
      <div className="DisplayItem">
        <div className="DisplayItemPhoto">
          <img src="" alt="photo here" />
        </div>
        <div className="DisplayTitle">7</div>
      </div>
      <div className="DisplayItem">
        <div className="DisplayItemPhoto">
          <img src="" alt="photo here" />
        </div>
        <div className="DisplayTitle">
          <div
            class="pa-gallery-player-widget"
            style="width:100%; height:480px; display:none;"
            data-link="https://photos.google.com/album/AF1QipOXGZOSMVfpC7LjAAfuwBxnopR9Zx1DNTYPXF-x"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default galleryCase;
