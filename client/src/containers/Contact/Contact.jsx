import React, { useState } from "react";
import SectionWrap from "../../wrappers/SectionWrap";
import Map from "./Map";
import emailjs from "@emailjs/browser";

import "./Contact.scss";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import toast from "react-hot-toast";
import MessageSent from "./MessageSent";

const Contact = () => {
  const [isSent, setIsSent] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_EMAIL_KEY,
        }
      )
      .then(
        () => {
          setIsSent(true);
          toast.success("Wysłano wiadomość!");
        },
        (error) => {
          toast.error("Nie udało się wysłać wiadomośći");
        }
      );
  };

  return (
    <div className="app__contact">
      <Map />
      <div className="app__contact-info">
        <div className="cta">
          <div className="text">
            <h2>Kontakt</h2>
            <p>
              Masz pytania? <br /> Skontaktuj się z nami!
            </p>
          </div>
          <div class="contact-details">
            <div className="email">
              <FiMail />
              ladrowski@email.com
            </div>
            <div className="phone">
              <FiPhone />
              +48 321 654 987
            </div>
            <div className="location">
              <FiMapPin />
              Trzebnice 137, 59-140 Chocianów
            </div>
          </div>
        </div>
        {isSent ? (
          <MessageSent setIsSent={setIsSent}/>
        ) : (
          <div className="form">
            <form action="" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Imię i nazwisko"
                id="name"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Adres e-mail"
                id="email"
                name="email"
                required
              />
              <textarea
                id="message"
                placeholder="Wiadomość..."
                name="message"
                rows="8"
                required
              ></textarea>
              <button type="submit">Wyślij</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrap(Contact, "contact");
