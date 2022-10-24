import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.facebook.com/jahidhasan.rumman.3"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://github.com/RummanH" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          href=" https://www.linkedin.com/in/jahid-hasan-rumman-bba00b236/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
