import { useState } from "react";
import "./App.scss";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import About from "./containers/About/About";
import Work from "./containers/Work/Work";
import { useVisibleSection } from "./hooks/useVisibleSection";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./containers/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
