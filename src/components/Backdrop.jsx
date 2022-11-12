import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Backdrop = () => {
  return (
    <motion.div
      className="backdrop"
      // onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    ></motion.div>
  );
};

export default Backdrop;
