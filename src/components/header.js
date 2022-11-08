import React from "react";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import Mashal from "../images/logo.gif";
import { motion } from "framer-motion";
import "../App.css";
import { IoLogoInstagram } from react-icons/all-files/Io
import { icons } from "react-icons";

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
  const { scrollYProgress } = useScroll();
  const yScaled = useTransform(scrollYProgress, [0.2, 1], [1, 0]);
  const yScaled2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  return (
    <>
      <motion.div className="header" style={{ opacity: 1 }}></motion.div>
      <motion.div
        className="header header2"
        style={{ opacity: yScaled }}
      ></motion.div>
      <motion.div className="headerIn">
        <motion.h2
          id="smallName"
          style={{
            opacity: yScaled2,
            // opacity: ".50",
          }}
        >
          Masha
        </motion.h2>
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
          <IoLogoInstagram />
        </motion.svg>
        {/* <img
        id="logoGif"
        src={Mashal}
        alt=""
        onClick={console.log("Masha Clicked")}
      /> */}
      </motion.div>
    </>
  );
};

export default Header;
