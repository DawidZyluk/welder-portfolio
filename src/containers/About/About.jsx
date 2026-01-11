import React from "react";
import "./About.scss";
import SectionWrap from "../../wrappers/SectionWrap";
import { motion } from "framer-motion";
import warsztat2 from "../../assets/about/warsztat2.jpg";

const container = {
  hidden: { x: -200, opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const About = () => {
  return (
    <div className="app__about">
      <motion.div
        className="wrapper"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -300px 0px" }}
      >
        <div className="app__about-content">
          <div className="app__about-profile">
            <img src={warsztat2} alt="" loading="lazy" />
            <div className="profile-badge">Ponad 10 lat doświadczenia</div>
          </div>
          <div className="app__about-text">
            <h2>O mnie</h2>
            <p>
              Jestem doświadczonym spawaczem, który łączy precyzję techniczną z kreatywnym
              wyrazem artystycznym. Specjalizuję się w tworzeniu unikalnych rzeźb z metalu
              oraz wykonywaniu precyzyjnych prac spawalniczych.
            </p>
            <p>
              Moje doświadczenie obejmuje różne metody spawania, interpretację rysunków
              technicznych oraz ręczne kształtowanie metalu. Tworzę zarówno rzeźby
              artystyczne, jak i realizuję projekty techniczne, zawsze dbając o najwyższą
              jakość i trwałość wykonania.
            </p>
            <p>
              Każda praca, czy to rzeźba artystyczna czy konstrukcja techniczna, jest dla
              mnie okazją do wykorzystania umiejętności rzemieślniczych i artystycznej wizji.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrap(About, "about");
