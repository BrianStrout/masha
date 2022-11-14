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

const Header = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      console.log("hadnler coming");
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const { scrollYProgress } = useScroll();
  const yScaled = useTransform(scrollYProgress, [0.2, 1], [1, 0]);
  const yScaled2 = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  return (
    <>
      <div id="findMe" className="hide">
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
