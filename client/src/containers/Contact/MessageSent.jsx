import React from "react";

const MessageSent = ({setIsSent}) => {
  return (
    <>
      <div className="form-info">
        <div className="title">Dziękuję za kontakt!</div>
        <div className="desc">
          Dziękuje za kontakt. Postaramy się odpowiedzieć jak najszybciej. Jeśli
          masz dodatkowe pytania lub potrzebujesz dalszych informacji, proszę o
          kontakt telefoniczny.
        </div>
      </div>
      <button className="send-again" onClick={() => setIsSent(false)}>Skontaktuj się ponownie</button>
    </>
  );
};

export default MessageSent;
