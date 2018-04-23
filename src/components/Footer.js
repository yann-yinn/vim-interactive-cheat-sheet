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
      <p>
        Inspiration :{" "}
        <ul>
          <li>
            {" "}
            <a href="https://www.catswhocode.com/blog/vim-cheat-sheet-for-2016">
              https://www.catswhocode.com/blog/vim-cheat-sheet-for-2016
            </a>
          </li>
          <li>
            {" "}
            <a href="https://vim.rtorr.com/">https://vim.rtorr.com/</a>
          </li>
        </ul>
      </p>
    </footer>
  );
};

export default Footer;
