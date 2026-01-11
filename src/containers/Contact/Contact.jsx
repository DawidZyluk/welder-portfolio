import React, { useState } from "react";
import SectionWrap from "../../wrappers/SectionWrap";
// import Map from "./Map";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";
import "./Contact.scss";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import toast from "react-hot-toast";
import MessageSent from "./MessageSent";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

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
          setLoading(false);
        },
        (error) => {
          toast.error("Nie udało się wysłać wiadomośći");
          setLoading(false);
        }
      );
  };

  return (
    <div className="app__contact">

        {/* <Map /> */}
        <div className="app__contact-info">
          <div className="cta">
            <div className="text">
              <h2>Kontakt</h2>
              <p>
                Masz pytania? <br /> Skontaktuj się ze mną!
              </p>
            </div>
            <div className="contact-details">
              <div className="email">
                <FiMail />
                h.ladrowski@wp.pl
              </div>
              <div className="phone">
                <FiPhone />
                +48 790 903 338
              </div>
              <div className="location">
                <FiMapPin />
                Trzebnice 137, 59-140 Chocianów
              </div>
            </div>
          </div>
          {isSent ? (
            <MessageSent setIsSent={setIsSent} />
          ) : loading ? (
            <div className="loading">
              <Oval
                visible={true}
                height="80"
                width="80"
                color="#e4be17"
                ariaLabel="oval-loading"
                secondaryColor="#2b2b2b"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
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
