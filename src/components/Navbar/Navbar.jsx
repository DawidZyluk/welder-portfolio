import React, { useState } from "react";
import "./Navbar.scss";
import Button from "./Button";
import logo from "../../assets/navbar/logo2.png";

const sections = [
  {
    id: "home",
    title: "home",
    color: "#216fed",
  },
  {
    id: "skills",
    title: "umiejętnośći",
    color: "#fcba03",
  },
  {
    id: "about",
    title: "o mnie",
    color: "#fcba03",
  },
  {
    id: "work",
    title: "Projekty",
    color: "#ed2121",
  },
  {
    id: "contact",
    title: "Kontakt",
    color: "#ed2121",
  },
];

const Navbar = () => {
  const [opacity, setOpacity] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setOpacity(false);
    } else {
      setOpacity(true);
    }
  });

  return (
    <div
      id="navbar"
      className={`${opacity ? "app__navbar opacity" : "app__navbar"}`}
    >
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav">
        <ul>
          {sections.map((data) => (
            <li key={data.id} className="app__navbar-link">
              <a href={`#${data.id}`}>{data.title}</a>
              <div />
            </li>
          ))}
        </ul>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
