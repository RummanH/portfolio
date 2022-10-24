import React, { useState } from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { client, urlFor } from "../../client";
import { AppWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <div>
      <h2 className="head-text">
        I know that<span> better code</span> <br />
        means <span>better performance</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.35 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
