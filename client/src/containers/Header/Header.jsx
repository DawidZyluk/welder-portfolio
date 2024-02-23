import React from "react";
import "./Header.scss";
import SectionWrap from "../../wrappers/SectionWrap";
import jason from "../../assets/jason.png";
import farba from "../../assets/farba.png";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const text = {
  hidden: { x: -200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
  },
};

const background = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { delay: 0.6, duration: 0.5, ease: "easeInOut" },
  },
};

const Header = () => {
  return (
    <>
      <div className="app__header app__flex">
        <div className="app__header-overlay" />
        <motion.div
          className="app__header-info"
          variants={text}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="info-title">Henryk Ladrowski</div>
          <span>Spawacz / Metalurg</span>
          <div className="info-desc">
            Jestem doświadczonym spawaczem i metalurgiem z solidnymi
            umiejętnościami w obszarze obróbki metali. Posiadam bogate
            doświadczenie w interpretacji rysunków technicznych, przygotowywaniu
            materiałów oraz wykonywaniu spawania różnymi metodami.
          </div>
          <div className="info-cta">
            <div className="info-contact">
              <div className="email">
                <FiMail />
                ladrowski@email.com
              </div>
              <div className="phone">
                <FiPhone />
                +48 321 654 987
              </div>
              <div className="map">
                <FiMapPin />
                Trzebnice 137, 59-140 Chocianów
              </div>
            </div>
          </div>
        </motion.div>
        <div className="app__header-profile">
          <motion.img
            whileInView={{
              y: [-100, 0],
              opacity: [0, 1],
              transition: { delay: 0.2, duration: 0.5 },
            }}
            src={jason}
            alt=""
            className="profile-photo"
            viewport={{ once: true }}
          />
          <div className="fade"></div>
          <motion.img
            variants={background}
            initial="hidden"
            whileInView="show"
            className="profile-background"
            src={farba}
            alt="circle"
            viewport={{ once: true }}
            // viewport={{ once: true }}
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrap(Header, "home");
