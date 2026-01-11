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
        <h2>O mnie</h2>
        <div className="app__about-content">
          <div className="app__about-profile">
            <img src={warsztat2} alt="" />
            <div className="profile-badge">Ponad 10 lat doświadczenia</div>
          </div>
          <div className="app__about-text">
            <p>
              Jestem pasjonatem spawania z wieloletnim doświadczeniem w branży
              metalurgicznej. Moja droga zawodowa rozpoczęła się od nauki
              podstawowych technik spawalniczych, które następnie rozwijałem w
              trakcie pracy w różnych firmach przemysłowych.
            </p>
            <p>
              Przez lata zdobywałem umiejętności w obszarach takich jak
              interpretacja rysunków technicznych, przygotowanie materiałów,
              oraz wykonywanie precyzyjnych i trwałych spoin. Moje doświadczenie
              obejmuje pracę zarówno z ręcznymi, jak i zautomatyzowanymi
              metodami spawania.
            </p>
            <p>
              W mojej karierze zawodowej szczególnie dumny jestem z udziału w
              projektach związanych z budową konstrukcji stalowych dla przemysłu
              energetycznego oraz produkcją precyzyjnych elementów dla przemysłu
              motoryzacyjnego. Moje osiągnięcia zawodowe opierają się na
              dokładności, kreatywności i dążeniu do ciągłego doskonalenia.
            </p>
            <p>
              Jestem zmotywowany do wykorzystania moich umiejętności i
              doświadczenia, aby przyczynić się do realizacji wyzwań w
              dziedzinie spawania oraz rozwijania innowacyjnych rozwiązań w
              branży metalurgicznej.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrap(About, "about");
