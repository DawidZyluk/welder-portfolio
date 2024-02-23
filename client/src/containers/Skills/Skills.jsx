import React, { useRef } from "react";
import "./Skills.scss";
import welding from "../../assets/welding.png";
import beam from "../../assets/beam.png";
import car from "../../assets/car.png";
import { motion } from "framer-motion";
import gate from "../../assets/gate.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <div id="skills" className="app__header-skills">
      <motion.div
        className="skills-badges"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{  once: true, margin: "0px 0px -200px 0px" }}
      >
        <motion.div variants={item} className="skill" >
          <img src={welding} alt="" />
          <div className="text">
            <div className="title">Spawanie</div>
            <p className="desc">
              Spawanie różnymi metodami, trwałe i estetyczne połączenia
            </p>
          </div>
        </motion.div>
        <motion.div className="skill" variants={item}>
          <img src={beam} alt="" />
          <div className="text">
            <div className="title">Obróbka metali</div>
            <p className="desc">
              precyzyjna obróbka metali, obejmująca cięcie, gięcie i frezowanie
            </p>
          </div>
        </motion.div>
        <motion.div className="skill" variants={item}>
          <img src={car} alt="" />
          <div className="text">
            <div className="title">Mechanika pojazdowa</div>
            <p className="desc">
              diagnozowanie, naprawa i konserwacja pojazdów.
            </p>
          </div>
        </motion.div>
        <motion.div className="skill" variants={item}>
          <img src={gate} alt="" />
          <div className="text">
            <div className="title">Bramy i ogrodzenia</div>
            <p className="desc">
              projektowanie i montaż solidnych i estetycznych bram oraz ogrodzeń
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
