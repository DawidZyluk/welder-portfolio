import React from "react";
import "./Sculptures.scss";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

const Sculptures = () => {

  return (
    <div id="sculptures" className="app__sculptures">

      <div className="carousel-section-wrapper">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel />
        </motion.div>
        <div className="carousel-description">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5 }}
          >
            Rzeźby z metalu
          </motion.h2>
          <p>
            Prezentowane prace to moje najnowsze realizacje, wykonane całkowicie ręcznie z dbałością
            o każdy detal. Każda rzeźba jest unikalnym dziełem, łączącym precyzję techniczną z artystyczną
            wizją. Wykonane z metalu instalacje artystyczne są efektem wieloletniego doświadczenia w spawaniu
            oraz zaawansowanej obróbce materiałów. Każda praca powstaje w moim warsztacie, gdzie łączę
            tradycyjne techniki spawalnicze z nowoczesnym designem, tworząc niepowtarzalne dzieła sztuki.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sculptures;

