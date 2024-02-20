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

const Work = () => {
  return (
    <div className="app__work">
      <div className="img-wrap">
        <img src={brama} alt="" />
        <div className="img-text">
          <div className="title">Bramy z desek</div>
          <div className="desc">
          Solidne, eleganckie oraz trwałe bramy z deskami są nie tylko praktycznym elementem ogrodu, ale także ozdobą architektoniczną.
          </div>
        </div>
      </div>
      <div className="img-wrap">
        <img src={kwietnik2} alt="" />
        <div className="img-text">
          <div className="title">kwietniki</div>
          <div className="desc">Kwietniki, stylowe, solidne oraz wytrzymałe, podkreślają piękno roślin i dodają uroku każdemu otoczeniu.</div>
        </div>
      </div>
      <div className="img-wrap">
        <img src={kosz} alt="" />
        <div className="img-text">
          <div className="title">kosze myśliwskie</div>
          <div className="desc">Kosze myśliwskie, solidne, funkcjonalne oraz trwałe, są nieodzownym wyposażeniem dla pasjonatów łowiectwa.</div>
        </div>
      </div>
      <div className="img-wrap">
        <img src={brama2} alt="" />
        <div className="img-text">
          <div className="title">bramy metalowe</div>
          <div className="desc">Bramy metalowe, nowoczesne, solidne oraz wytrzymałe, stanowią nie tylko element ochrony, ale także elegancki akcent dla posesji.</div>
        </div>
      </div>
      <div className="img-wrap">
        <img src={stol2} alt="" />
        <div className="img-text">
          <div className="title">stoły warsztatowe</div>
          <div className="desc">Stoły warsztatowe, solidne, ergonomiczne oraz praktyczne, zapewniają wygodne i bezpieczne warunki pracy.</div>
        </div>
      </div>
      <div className="img-wrap">
        <img src={porecz} alt="" />
        <div className="img-text">
          <div className="title">poręczę i uchwyty</div>
          <div className="desc">Poręcze, estetyczne, solidne oraz bezpieczne, nie tylko podkreślają styl wnętrza, ale także zapewniają stabilność podczas użytkowania.</div>
        </div>
      </div>
      <div className="img-wrap">
        <img src={rama} alt="" />
        <div className="img-text">
          <div className="title">Konserwacja <br /> i renowacja ram</div>
          <div className="desc">Konserwacja i renowacja ram, skuteczna, solidna oraz precyzyjna, pozwala utrzymać ich trwałość i estetykę na długi czas.</div>
        </div>
      </div>
      <div className="img-wrap">
        <img src={rampa} alt="" />
        <div className="img-text">
          <div className="title">Rampy serwisowe</div>
          <div className="desc">Rampy serwisowe, solidne, praktyczne oraz trwałe, ułatwiają dostęp i manipulację ciężkimi ładunkami w każdym miejscu pracy.</div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrap(Work, "work");
