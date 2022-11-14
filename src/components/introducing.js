import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Masha from "../images/masha_insta.jpeg";
import GalleryControl from "./GalleryControl";
import Contact from "./Contact";
import "../App.css";
import { Footer } from "./Footer";

function Home({ imageDim, image }) {
  useEffect(() => {
    let handler = (e) => {
      if (e.target.classList.contains("Display_Item_Photo")) {
        // console.log("hit");
      }
    };
    document.addEventListener("mousedown", handler);
  });

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
  const imageDetails = {
    width: 524,
    height: 650,
  };

  const viewPull = document.documentElement.clientHeight;
  const viewCalc = viewPull / 2 - viewPull * 0.1;
  const viewBump = document.documentElement.clientHeight / 10;
  const [canScroll, setCanScroll] = useState(false);
  const [introduced, introducer] = useState(false);

  React.useEffect(() => {
    if (introduced === true) {
      document.getElementById("findMe").classList.remove("hide");
    }
  }, [introduced]);

  React.useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
      introducer(true);
    }
  }, [canScroll]);

  const { scrollYProgress } = useScroll();
  const yScaled = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const firstName = {
    initial: {
      y: 120,
    },
    animate: {
      y: 120,
      transition: {
        // duration: 1,
        delayChildren: 1.5,
        staggerChildren: 0.25,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    initial: {
      y: 200,
      opacity: 0,
      transition: {
        // delay: 3,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        // delay: 2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const dropper = {
    initial: {
      y: 80,
    },
    animate: {
      y: 80,
      transition: {
        delayChildren: 3.5,
        staggerChildren: 0.25,
        staggerDirection: -1,
      },
    },
  };

  const droppingIn = {
    initial: {
      y: -100,
      opacity: 0,
      transition: {
        // delay: 3,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        // delay: 2,
        // ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const scroller = {
    initial: {
      x: 0,
    },
    animate: {
      x: 0,
      transition: {
        delayChildren: 6.5,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const scrolling = {
    initial: {
      x: 250,
    },
    animate: {
      x: 0,
      transition: {
        // delay: 1,
        duration: 0.8,
        // repeat: Infinity,
      },
    },
  };
  const fader = {
    animate: {
      transition: {
        delayChildren: 4,
        staggerChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };
  const fadey = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [0, 0.4, 0.8, 0.8, 0.4, 0],
      transition: {
        duration: 3,
      },
    },
  };
  // const assembled = <GalleryAlbums />;

  // console.log(assembled);
  // console.log(viewCalc, "calculated2");
  return (
    <>
      <motion.div
        onAnimationComplete={() => setCanScroll(true)}
        className="single"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* beginner */}
        <div className="container fluid">
          <div className="row center top-row">
            <div className="top">
              <motion.div className="quoter" variants={fader}>
                <motion.span variants={fadey}>Lisbon </motion.span>
                <motion.span variants={fadey}>based </motion.span>
                <motion.span variants={fadey}>model</motion.span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.2, ...transition },
                }}
                className="details"
              >
                <div className="blocker">
                  <motion.div className="location" variants={dropper}>
                    <motion.span
                      style={{ display: "inline-block", color: "var(--acct1)" }}
                      variants={droppingIn}
                    >
                      {"38.7223° N "}
                    </motion.span>
                    {/* <motion.span variants={droppingIn}></motion.span> */}
                    <motion.span
                      style={{ display: "inline-block", color: "var(--acct2)" }}
                      variants={droppingIn}
                    >
                      9.1393° W
                    </motion.span>

                    <motion.span
                      style={{ display: "block" }}
                      variants={droppingIn}
                    >
                      Contact:clickable
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div className="model">
                <motion.span className="first" variants={firstName}>
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={letter}
                  >
                    M
                  </motion.span>
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={letter}
                  >
                    A
                  </motion.span>
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={letter}
                  >
                    S
                  </motion.span>
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={letter}
                  >
                    H
                  </motion.span>
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={letter}
                  >
                    A
                  </motion.span>
                </motion.span>
              </motion.div>
            </div>
          </div>

          {/* MIDWAY */}

          <div className="row bottom-row">
            <div className="bottom">
              {/* SCROLL */}
              <motion.div className="scrollDown" variants={scroller}>
                <motion.span
                  style={{
                    display: "inline-block",
                    opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
                    // opacity: ".50",
                  }}
                  variants={scrolling}
                >
                  S
                </motion.span>
                <motion.span
                  style={{
                    display: "inline-block",
                    opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
                    // opacity: ".50",
                  }}
                  variants={scrolling}
                >
                  C
                </motion.span>
                <motion.span
                  style={{
                    display: "inline-block",
                    opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
                    // opacity: ".50",
                  }}
                  variants={scrolling}
                >
                  R
                </motion.span>
                <motion.span
                  style={{
                    display: "inline-block",
                    opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
                    // opacity: ".50",
                  }}
                  variants={scrolling}
                >
                  O
                </motion.span>
                <motion.span
                  style={{
                    display: "inline-block",
                    opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
                    // opacity: ".50",
                  }}
                  variants={scrolling}
                >
                  L
                </motion.span>
                <motion.span
                  style={{
                    display: "inline-block",
                    opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
                    // opacity: ".50",
                  }}
                  variants={scrolling}
                >
                  L
                </motion.span>
              </motion.div>

              <motion.div className="image-container-single">
                <motion.div
                  className="thumbnail"
                  ref={image}
                  initial={{
                    y: -viewCalc,
                    width: imageDetails.width,
                    height: viewCalc,
                  }}
                  animate={{
                    y: viewBump,
                    width: "100vw",
                    height: viewCalc,
                    transition: { delay: 0.8, ...transition },
                  }}
                >
                  <div className="frame">
                    <motion.img
                      className="imageScaled"
                      style={{
                        scale: yScaled,
                      }}
                      src={Masha}
                      alt="Masha"
                      transition={transition}
                      initial={{
                        width: imageDetails.width,
                        y: 0,
                      }}
                      animate={{
                        y: -700,
                        // y: 400,
                        width: "100vw",
                        z: -1,
                        transition: { delay: 0.8, ...transition },
                        // y: window.innerWidth > 1440 ? 40 : 0,
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="detailed-information">
          <div className="container">
            <div className="bio">
              <h2 className="title">
                Masha header <br /> & and details.
              </h2>
              <p>
                We should talk about how lovely Masha is here but I don't know
                the appropriate terminology so I'll just fill this space with a
                couple of facts. She knows Val from the coffee shop, seems very
                pretty and talented and didn't say my music was horrible. Woo,
                what a bio.
              </p>
            </div>
          </div>
        </div>

        <GalleryControl />
        <Contact />
        <Footer />

        {/* ender */}
      </motion.div>
    </>
  );
}
export default Home;
