import { useState } from "react";
import "./App.scss";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import About from "./containers/About/About";
import Work from "./containers/Work/Work";
import Skills from "./containers/Skills/Skills";
import { useVisibleSection } from "./hooks/useVisibleSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
