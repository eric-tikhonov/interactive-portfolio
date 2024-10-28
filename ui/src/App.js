import React from "react";
import "./style.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Intro from "./components/Intro/Intro.js";
import AboutMe from "./components/About Me/AboutMe.js";

function App() {
  return (
    <div className="root-container">
      <Header />
      <main className="main">
        <Intro />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
