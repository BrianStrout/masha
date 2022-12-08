import React from "react";
import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { SlMenu } from "react-icons/sl";
import "../App.css";
import "./drop.css";
import BusinessCard from "./BusinessCard";

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

const Header = (props) => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      console.log("handler coming");
      // console.log(scrollYProgress);
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // const { scrollYProgress } = useScroll();
  // const yScaled = useTransform(scrollYProgress, [0.2, 1], [1, 0]);
  // const yScaled2 = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  return (
    <>
      <div id="findMe">
        <motion.div
          className="header"
          style={{ opacity: `${props.subHeadOpacity}` }}
        ></motion.div>
        <motion.div
          className="header2"
          style={{
            // backgroundColor: `${props.headColor}`,
            opacity: `${props.mainHeadOpacity}%`,
            color: "black",
          }}
        ></motion.div>
        <motion.div className="headerIn">
          <motion.h2
            className={`smallName ${props.tuckedLeft ? `tuckedLeft` : ""}`}
            style={{
              opacity: 100,
            }}
          >
            Masha
          </motion.h2>

          <div className="menu-container" ref={menuRef}>
            <div className="dropFlex">
              <div
                className="logoBox"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <SlMenu />
              </div>

              {/* {cardShown} */}
              <AnimatePresence exitBeforeEnter>
                {open ? <BusinessCard /> : null}
              </AnimatePresence>
            </div>
          </div>

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
        </motion.div>
      </div>
    </>
  );
};

export default Header;
