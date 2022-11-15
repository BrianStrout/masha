import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SiVsco, SiInstagram } from "react-icons/si";
import { GrLocationPin } from "react-icons/gr";

export const containerVariants2 = {
  hidden: {
    y: -400,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 1.2,
      duration: 0.2,
    },
  },
  exit: {
    y: -400,
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 5,
    },
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
      // delay: 5,
      type: "spring",
      // stiffness: 100,
      // mass: 0.3,
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
    opacity: 0,
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
      key={"businesscardkey2"}
      variants={containerVariants2}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="business_card"
    >
      <AnimatePresence exitBeforeEnter>
        <motion.h1
          key={"businesscardName"}
          variants={dropUpVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bcTitle"
        >
          Masha
        </motion.h1>
        <motion.span
          variants={dropUpVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={"a"}
          style={{ display: "inline-block" }}
          className="bcTitle"
        >
          Model
        </motion.span>
        <motion.span
          variants={dropUpVariants}
          key={"aa"}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
          className="bcTitle"
        >
          &
        </motion.span>
        <motion.span
          variants={dropUpVariants}
          key={"aaa"}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
          className="bcTitle"
        >
          Stylist
        </motion.span>
        <br />
        <motion.span
          variants={dropUpVariants}
          key={"aaaa"}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
          className="bcTitleDet"
        >
          Beauty
        </motion.span>
        <motion.span
          variants={dropUpVariants2}
          key={"aaaaa"}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
          className="bcTitleDet"
        >
          /
        </motion.span>
        <motion.span
          variants={dropUpVariants}
          key={"b"}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
          className="bcTitleDet"
        >
          Commercial{" "}
        </motion.span>
        <motion.span
          variants={dropUpVariants2}
          key={"bb"}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
          className="bcTitleDet"
        >
          /
        </motion.span>
        <motion.span
          variants={dropUpVariants}
          key={"bbb"}
          initial="hidden"
          animate="visible"
          exit="exit"
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
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
          className="bcTitleDet"
        >
          <GrLocationPin /> Lisbon based
        </motion.span>
        <br />
        <motion.span
          variants={dropUpVariants2}
          key={"bbbbb"}
          initial="hidden"
          animate="visible"
          exit="exit"
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
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
          className="bcTitleDet"
        >
          Email:asd form
        </motion.span>
        <motion.span
          variants={dropUpVariants2}
          key={"cc"}
          initial="hidden"
          animate="visible"
          exit="exit"
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
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
          className="bcTitleDet"
        >
          <Link to="https://www.instagram.com/highmashion/?hl=en">
            <SiInstagram />
            @highmashion
          </Link>
        </motion.span>
        <br />
        <br />
        <motion.span
          variants={dropUpVariants3}
          key={"cccc"}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
          className="bcTitleDet"
        >
          <Link to="https://www.vsco.co/">
            <SiVsco />
            @highmashion
          </Link>
        </motion.span>
      </AnimatePresence>
    </motion.div>
    // </motion.div>
  );
}
