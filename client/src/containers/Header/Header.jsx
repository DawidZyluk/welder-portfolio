import React from "react";
import "./Header.scss";
import SectionWrap from "../../wrappers/SectionWrap";
import jason from "../../assets/jason.png";
import jason2 from "../../assets/jason2.png";
import jason3 from "../../assets/jason3.png";
import background2 from "../../assets/background2.jpg";
import welding from "../../assets/welding.png";
import beam from "../../assets/beam.png";
import car from "../../assets/car.png";
import gate from "../../assets/gate.png";
import farba from "../../assets/farba.png";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="app__header app__flex">
        <div className="app__header-overlay" />
        <div className="app__header-info">
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
            </div>
          </div>
        </div>
        <div className="app__header-profile">
          <img src={jason} alt="" className="profile-photo" />
          <div className="fade"></div>
          <img src={farba} alt="" className="profile-background" />
        </div>
      </div>
      <div className="app__header-skills">
        <div className="skills-badges">
          <div className="skill">
            <img src={welding} alt="" />
            <div className="title">Spawanie</div>
            <p className="desc">
              Spawanie różnymi metodami, trwałe i estetyczne połączenia
            </p>
          </div>
          <div className="skill">
            <img src={beam} alt="" />
            <div className="title">Obróbka metali</div>
            <p className="desc">
              precyzyjna obróbka metali, obejmująca
              cięcie, gięcie i frezowanie
            </p>
          </div>
          <div className="skill">
            <img src={car} alt="" />
            <div className="title">Mechanika pojazdowa</div>
            <p className="desc">
              diagnozowanie, naprawa i konserwacja pojazdów.
            </p>
          </div>
          <div className="skill">
            <img src={gate} alt="" />
            <div className="title">Bramy i ogrodzenia</div>
            <p className="desc">
              projektowanie i montaż solidnych i
              estetycznych bram oraz ogrodzeń
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrap(Header, "home");
