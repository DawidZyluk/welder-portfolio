import React, { useState } from "react";
import SectionWrap from "../../wrappers/SectionWrap";
import Map from "./Map";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";
import "./Contact.scss";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import toast from "react-hot-toast";
import MessageSent from "./MessageSent";
import { motion } from "framer-motion";

const container = {
  hidden: { x: 100, opacity: 0,  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

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
      <motion.div
        className="app__contact"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -300px 0px" }}
      >
        <Map />
        <div className="app__contact-info">
          <div className="cta">
            <div className="text">
              <h2>Kontakt</h2>
              <p>
                Masz pytania? <br /> Skontaktuj się z nami!
              </p>
            </div>
            <div className="contact-details">
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
      </motion.div>
    </div>
  );
};

export default SectionWrap(Contact, "contact");
