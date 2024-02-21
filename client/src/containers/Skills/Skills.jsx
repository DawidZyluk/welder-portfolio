import React from "react";
import "./Skills.scss";
import welding from "../../assets/welding.png";
import beam from "../../assets/beam.png";
import car from "../../assets/car.png";
import gate from "../../assets/gate.png";

const Skills = () => {
  return (
    <div id="skills" className="app__header-skills">
      <div className="skills-badges">
        <div className="skill">
          <img src={welding} alt="" />
          <div className="text">
            <div className="title">Spawanie</div>
            <p className="desc">
              Spawanie różnymi metodami, trwałe i estetyczne połączenia
            </p>
          </div>
        </div>
        <div className="skill">
          <img src={beam} alt="" />
          <div className="text">
            <div className="title">Obróbka metali</div>
            <p className="desc">
              precyzyjna obróbka metali, obejmująca cięcie, gięcie i frezowanie
            </p>
          </div>
        </div>
        <div className="skill">
          <img src={car} alt="" />
          <div className="text">
            <div className="title">Mechanika pojazdowa</div>
            <p className="desc">
              diagnozowanie, naprawa i konserwacja pojazdów.
            </p>
          </div>
        </div>
        <div className="skill">
          <img src={gate} alt="" />
          <div className="text">
            <div className="title">Bramy i ogrodzenia</div>
            <p className="desc">
              projektowanie i montaż solidnych i estetycznych bram oraz ogrodzeń
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
