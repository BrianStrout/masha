import React from "react";
import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { SiVsco, SiInstagram } from "react-icons/si";
import { SlMenu } from "react-icons/sl";
import "../App.css";
import "./drop.css";
// import DropdownItem from

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
  // console.log(menuRef, "...");
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log("hit");
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
        {/* 
        <div
          className="logoBox menu-trigger"
          ref={menuRef}
          onClick={() => {
            setOpen(!open);
          }}
        > */}
        <div className="menu-container" ref={menuRef}>
          <div
            className="logoBox"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <SlMenu />
            {/* <div className="hi"> */}

            {/* <p>
              {" "}
              
            </p> */}
            {/* </div> */}
          </div>

          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <h3>
              Masha
              <br />
              <ul className="businessCard">
                <li>
                  <span>Model</span>
                </li>
                <li>
                  <span>📍 Lisbon based</span>
                </li>
                <li>
                  <span>📍 London often</span>
                </li>
                <li>
                  <span>Mgmt: Strout Agency</span>
                </li>
              </ul>
            </h3>

            <ul>
              <li className="dropDownItem">
                <SiInstagram />
                <span> @MEEEEE</span>
              </li>
              <li className="dropDownItem">
                <SiVsco />
                <span>@MEEEE2</span>
              </li>
            </ul>
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
        {/* </div> */}
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
