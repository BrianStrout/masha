import * as React from "react";
import Masha from "../images/masha_insta.jpeg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import ProgressiveImage from "react-progressive-image";
import { motion } from "framer-motion";
import "../App.css";

function Home({ imageDim, image }) {
  const transition = { duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const imageDetails = {
    width: 524,
    height: 650,
  };
  const viewPull = document.documentElement.clientHeight;
  // const viewBig =

  // the dom height divided by two - dom height / 10 meaning 0.4 original height

  const viewCalc = viewPull / 2 - viewPull * 0.1;

  console.log(viewCalc, "calculated");

  return (
    <>
      <div className="row center top-row">
        <div className="top"></div>
      </div>
      <div className="row bottom-row">
        <div className="bottom">
          <motion.div
            className="thumbnail"
            ref={image}
            style={{
              width: imageDetails.width,
              height: viewCalc,
            }}
          >
            <div className="frame">
              <Link to={"/introducing"}>
                {/* <ProgressiveImage src={Masha}>
                  {(src) => ( */}
                <motion.img
                  className="imageScaled"
                  src={Masha}
                  alt="Masha"
                  initial={{ width: imageDetails.width }}
                  animate={{ width: imageDetails.width }}
                  whileHover={{ scale: 1.1, width: imageDetails.width }}
                  transition={{
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                />
                {/* )} */}
                {/* </ProgressiveImage> */}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
