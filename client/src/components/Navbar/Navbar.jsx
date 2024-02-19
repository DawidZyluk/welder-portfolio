import React from "react";
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
  const visibleSection = useVisibleSection(sections);
  console.log(visibleSection)
  return (
    <div className="app__navbar">
      <ul>
        {sections.map((data) => (
          <li
            key={data.id}
            className={`app__navbar-link ${
              visibleSection === data.id ? "active" : ""
            }`}
          >
            <a href={`#${data.id}`}>{data.title}</a>
            <div />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
