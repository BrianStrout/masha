import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SiVsco, SiInstagram } from "react-icons/si";
import { GrLocationPin } from "react-icons/gr";
// import "./styles.css";
// import styles from "./aboutGreeting.module.scss";

export const containerVariants = {
  hidden: {
    y: 400,
    opacity: 1,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.5, // this will set a delay before the children start animating
      staggerChildren: 0.3, // this will set the time inbetween children animation
    },
  },
};
export const containerVariants2 = {
  hidden: {
    y: -400,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.5, // this will set a delay before the children start animating
      staggerChildren: 0.2, // this will set the time inbetween children animation
    },
  },
  exit: {
    y: -400,
    opacity: 0,
  },
};
export const dropUpVariants = {
  hidden: {
    x: 400,
    y: 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
      // remove delay: 0.3,
    },
  },
  exit: {
    x: 0,
    y: 400,
  },
};

export const dropUpVariants2 = {
  hidden: {
    x: -5,
    y: 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
      // remove delay: 0.3,
    },
  },
  exit: {
    x: 0,
    y: 400,
  },
};
export const dropUpVariants3 = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,

    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
      // remove delay: 0.3,
    },
  },
  exit: {
    x: 0,
    y: 400,
  },
};

export default function BusinessCard() {
  return (
    <motion.div
      key={"businesscardkey"}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={containerVariants2} className="business_card">
        <motion.h1 variants={dropUpVariants}>Masha</motion.h1>
        <AnimatePresence exitBeforeEnter>
          <motion.span
            // initial="hidden"
            // animate="animate"
            // exit="exit"
            variants={dropUpVariants}
            key={"a"}
            style={{ display: "inline-block" }}
            className="bcTitle"
          >
            Model
          </motion.span>
          <motion.span
            variants={dropUpVariants}
            key={"aa"}
            style={{ display: "inline-block" }}
            className="bcTitle"
          >
            &
          </motion.span>
          <motion.span
            variants={dropUpVariants}
            key={"aaa"}
            style={{ display: "inline-block" }}
            className="bcTitle"
          >
            Stylist
          </motion.span>
          <br />
          <motion.span
            variants={dropUpVariants}
            key={"aaaa"}
            style={{ display: "inline-block" }}
            className="bcTitleDet"
          >
            Beauty
          </motion.span>
          <motion.span
            variants={dropUpVariants2}
            key={"aaaaa"}
            style={{ display: "inline-block" }}
            className="bcTitleDet"
          >
            /
          </motion.span>
          <motion.span
            variants={dropUpVariants}
            key={"b"}
            style={{ display: "inline-block" }}
            className="bcTitleDet"
          >
            Commercial{" "}
          </motion.span>
          <motion.span
            variants={dropUpVariants2}
            key={"bb"}
            style={{ display: "inline-block" }}
            className="bcTitleDet"
          >
            /
          </motion.span>
          <motion.span
            variants={dropUpVariants}
            key={"bbb"}
            style={{ display: "inline-block" }}
            className="bcTitleDet"
          >
            Editorial
          </motion.span>
          <br />
          <br />
          <motion.span
            variants={dropUpVariants2}
            key={"bbbb"}
            style={{ display: "inline-block" }}
            className="bcTitleDet"
          >
            <GrLocationPin /> Lisbon based
          </motion.span>{" "}
          <br />
          <motion.span
            variants={dropUpVariants2}
            key={"bbbbb"}
            style={{ display: "inline-block" }}
            className="bcTitleDet"
          >
            <GrLocationPin />
            London often
          </motion.span>
          <br />
          <motion.span
            variants={dropUpVariants2}
            key={"c"}
            style={{ display: "inline-block" }}
            className="bcTitleDet"
          >
            Email:asd form
          </motion.span>{" "}
          <motion.span
            variants={dropUpVariants2}
            key={"cc"}
            style={{ display: "inline-block" }}
            className="bcTitleDet right"
          >
            form below
          </motion.span>
          <br />
          <br />
          <motion.span
            variants={dropUpVariants3}
            key={"ccc"}
            style={{ display: "inline-block" }}
            className="bcTitleDet"
          >
            <Link to="https://www.instagram.com/highmashion/?hl=en">
              {" "}
              <SiInstagram />
              @highmashion
            </Link>{" "}
          </motion.span>
          <br />
          <br />
          <motion.span
            variants={dropUpVariants3}
            key={"cccc"}
            style={{ display: "inline-block" }}
            className="bcTitleDet"
          >
            <Link to="https://www.vsco.co/">
              {" "}
              <SiVsco />
              @highmashion
            </Link>
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
