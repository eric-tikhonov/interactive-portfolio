import React from "react";
import "./style.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Intro from "./components/Intro/Intro.js";
import AboutMe from "./components/About Me/AboutMe.js";
import ContactMe from "./components/Contact Me/Contact Me.js";
import Socials from "./components/Socials/Socials.js";

function App() {
  return (
    <div className="root-container">
      <Header />
      <main className="main">
        <Intro />
        <AboutMe />
        <ContactMe />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
