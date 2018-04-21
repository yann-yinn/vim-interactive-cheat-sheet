import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      Made with React and{" "}
      <span role="img" aria-label="love">
        💛
      </span>{" "}
      by <a href="https://yineo.fr">Yineo</a>
    </footer>
  );
};

export default Footer;
