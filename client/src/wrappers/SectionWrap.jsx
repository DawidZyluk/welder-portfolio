import React from "react";

const SectionWrap = (Component, id, classNames) =>
  function HOC() {
    return (
      <div id={id} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default SectionWrap;
