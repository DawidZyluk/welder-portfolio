import React, { useState } from "react";
import "./Navbar.scss";
import { useVisibleSection } from "../../hooks/useVisibleSection";

const sections = [
  {
    id: "home",
    title: "home",
    color: "#216fed",
  },
  {
    id: "about",
    title: "o mnie",
    color: "#fcba03",
  },
  {
    id: "skills",
    title: "umiejętności",
    color: "#1fab38",
  },
  {
    id: "work",
    title: "Praca",
    color: "#ed2121",
  },
];

const Navbar = () => {
  const [opacity, setOpacity] = useState(true)

  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      setOpacity(false)
    } else {
      setOpacity(true)
    }
  })

  return (
    <div id="navbar" className={`${opacity ? 'app__navbar opacity' : 'app__navbar'}`}>
      <ul>
        {sections.map((data) => (
          <li key={data.id} className="app__navbar-link">
            <a href={`#${data.id}`}>{data.title}</a>
            <div />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
