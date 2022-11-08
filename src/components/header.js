import React from "react";
import Mashal from "../images/logo.gif";
import { motion } from "framer-motion";
import "../App.css";

// variants
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Header = () => {
  return (
    <div className="header">
      <motion.svg
        id="logoGif"
        width="100"
        height="100"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="50%"
          cy="50%"
          r="280"
          stroke="#000000"
          variants={draw}
          custom={1}
        />
      </motion.svg>
      {/* <img
        id="logoGif"
        src={Mashal}
        alt=""
        onClick={console.log("Masha Clicked")}
      /> */}
    </div>
  );
};

export default Header;
