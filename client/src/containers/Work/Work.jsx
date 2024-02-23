import React from "react";
import "./Work.scss";
import SectionWrap from "../../wrappers/SectionWrap";
import brama from "../../assets/brama.jpg";
import brama2 from "../../assets/brama2.jpg";
import kwietnik from "../../assets/kwietnik.jpg";
import kwietnik2 from "../../assets/kwietnik2.jpg";
import porecz from "../../assets/porecz.jpg";
import stol from "../../assets/stol.jpg";
import stol2 from "../../assets/stol2.jpg";
import rampa from "../../assets/rampa.jpg";
import kosz from "../../assets/kosz.png";
import rama from "../../assets/rama.png";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
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

const Work = () => {
  return (
    <motion.div
      className="app__work"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -300px 0px" }}
    >
      <motion.div variants={item} className="img-wrap">
        <img src={brama} alt="" />
        <div className="img-text">
          <div className="title">Bramy z desek</div>
          <div className="desc">
            Solidne, eleganckie oraz trwałe bramy z deskami są nie tylko
            praktycznym elementem ogrodu, ale także ozdobą architektoniczną.
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="img-wrap">
        <img src={kwietnik2} alt="" />
        <div className="img-text">
          <div className="title">kwietniki</div>
          <div className="desc">
            Kwietniki, stylowe, solidne oraz wytrzymałe, podkreślają piękno
            roślin i dodają uroku każdemu otoczeniu.
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="img-wrap">
        <img src={kosz} alt="" />
        <div className="img-text">
          <div className="title">kosze myśliwskie</div>
          <div className="desc">
            Kosze myśliwskie, solidne, funkcjonalne oraz trwałe, są nieodzownym
            wyposażeniem dla pasjonatów łowiectwa.
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="img-wrap">
        <img src={brama2} alt="" />
        <div className="img-text">
          <div className="title">bramy metalowe</div>
          <div className="desc">
            Bramy metalowe, nowoczesne, solidne oraz wytrzymałe, stanowią nie
            tylko element ochrony, ale także elegancki akcent dla posesji.
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="img-wrap">
        <img src={stol2} alt="" />
        <div className="img-text">
          <div className="title">stoły warsztatowe</div>
          <div className="desc">
            Stoły warsztatowe, solidne, ergonomiczne oraz praktyczne, zapewniają
            wygodne i bezpieczne warunki pracy.
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="img-wrap">
        <img src={porecz} alt="" />
        <div className="img-text">
          <div className="title">poręczę i uchwyty</div>
          <div className="desc">
            Poręcze, estetyczne, solidne oraz bezpieczne, nie tylko podkreślają
            styl wnętrza, ale także zapewniają stabilność podczas użytkowania.
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="img-wrap">
        <img src={rama} alt="" />
        <div className="img-text">
          <div className="title">
            Konserwacja <br /> i renowacja ram
          </div>
          <div className="desc">
            Konserwacja i renowacja ram, skuteczna, solidna oraz precyzyjna,
            pozwala utrzymać ich trwałość i estetykę na długi czas.
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="img-wrap">
        <img src={rampa} alt="" />
        <div className="img-text">
          <div className="title">Rampy serwisowe</div>
          <div className="desc">
            Rampy serwisowe, solidne, praktyczne oraz trwałe, ułatwiają dostęp i
            manipulację ciężkimi ładunkami w każdym miejscu pracy.
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrap(Work, "work");
