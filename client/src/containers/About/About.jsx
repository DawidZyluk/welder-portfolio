import React from "react";
import "./About.scss";
import SectionWrap from "../../wrappers/SectionWrap";

const About = () => {
  return (
    <section id="o-mnie">
      <h2>O Mnie</h2>
      <p>
        Jestem pasjonatem spawania z wieloletnim doświadczeniem w branży
        metalurgicznej. Moja droga zawodowa rozpoczęła się od nauki podstawowych
        technik spawalniczych, które następnie rozwijałem w trakcie pracy w
        różnych firmach przemysłowych.
      </p>
      <p>
        Przez lata zdobywałem umiejętności w obszarach takich jak interpretacja
        rysunków technicznych, przygotowanie materiałów, oraz wykonywanie
        precyzyjnych i trwałych spoin. Moje doświadczenie obejmuje pracę zarówno
        z ręcznymi, jak i zautomatyzowanymi metodami spawania.
      </p>
      <p>
        W mojej karierze zawodowej szczególnie dumny jestem z udziału w
        projektach związanych z budową konstrukcji stalowych dla przemysłu
        energetycznego oraz produkcją precyzyjnych elementów dla przemysłu
        motoryzacyjnego. Moje osiągnięcia zawodowe opierają się na dokładności,
        kreatywności i dążeniu do ciągłego doskonalenia.
      </p>
      <p>
        Jestem zmotywowany do wykorzystania moich umiejętności i doświadczenia,
        aby przyczynić się do realizacji wyzwań w dziedzinie spawania oraz
        rozwijania innowacyjnych rozwiązań w branży metalurgicznej.
      </p>
    </section>
  );
};

export default SectionWrap(About, "about");
