import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuSlide } from "./animations";
import NavLink from "./NavLink";
import usePathname from "../../hooks/usePathname";

const navItems = [
  {
    title: "Home",
    href: "/#home",
  },
  {
    title: "O mnie",
    href: "/#about",
  },
  {
    title: "Umiejętności",
    href: "/#skills",
  },
  {
    title: "Projekty",
    href: "/#work",
  },
  {
    title: "Kontakt",
    href: "/#contact",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      className="app__navbar-menu"
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="app__navbar-body">
        <div
          className="app__navbar-nav"
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
        >
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
