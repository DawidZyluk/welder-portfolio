import React from "react";
import "./Navbar.scss";
import { useVisibleSection } from "../../hooks/useVisibleSection";

const sections = [
  {
    id: "home",
    title: "Header",
    color: "#216fed",
  },
  {
    id: "about",
    title: "About",
    color: "#fcba03",
  },
  {
    id: "skills",
    title: "Skills",
    color: "#1fab38",
  },
  {
    id: "work",
    title: "Work",
    color: "#ed2121",
  },
  {
    id: "footer",
    title: "Footer",
    color: "#fcba03",
  },
];

const Navbar = () => {
  const visibleSection = useVisibleSection(sections);
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
