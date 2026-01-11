import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import About from "./containers/About/About";
import Work from "./containers/Work/Work";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./containers/Skills/Skills";
import Sculptures from "./containers/Sculptures/Sculptures";
import Contact from "./containers/Contact/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    if (window.location.pathname === "/" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="app">
      <Toaster
        toastOptions={{
          className: "app__toaster",
        }}
      />
      <Navbar />
      <Header />
      <Skills />
      <Sculptures />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
