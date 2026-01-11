import React from "react";
import "./Header.scss";
import SectionWrap from "../../wrappers/SectionWrap";
import farba from "../../assets/header/farba.png";
import spawacz from "../../assets/header/spawacz.png";
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
          <div className="info-title">Sztuka w Metalu</div>
          <div className="info-slogan">Rzeźby artystyczne i precyzyjne spawanie</div>
          <div className="info-desc">
            Łączę kunszt rzemieślniczy z artystyczną wizją, tworząc unikalne rzeźby z metalu
            oraz wykonując precyzyjne prace spawalnicze. Każda realizacja to połączenie
            doświadczenia technicznego z kreatywnym podejściem do formy i materiału.
          </div>
        </motion.div>
        <div className="app__header-profile">
          <motion.img
            whileInView={{
              y: [-100, 0],
              opacity: [0, 1],
              transition: { delay: 0.2, duration: 0.5 },
            }}
            src={spawacz}
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
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrap(Header, "home");
