import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/";

import "./Header.scss";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-150, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>🙌</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Rumman</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">✔ Fullstack Developer</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">✔ MERN Developer</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">✔ Web Designer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1.175] }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile-circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle"
      >
        {[images.javascript, images.node, images.react].map((circle, i) => (
          <div className="circle-cmp app__flex" key={`circle-${i}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
