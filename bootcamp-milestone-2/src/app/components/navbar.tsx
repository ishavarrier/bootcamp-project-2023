import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1> Isha's Personal Website </h1>
      <nav>
        <ul className={style.navList}>
          <li>
            <a href="../">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            {" "}
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            {" "}
            <a href="/resume">Resume</a>
          </li>
          <li>
            {" "}
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
