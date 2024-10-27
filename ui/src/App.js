import React from "react";
import "./style.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Intro from "./components/Intro/Intro.js";

function App() {
  return (
    <div className="root-container">
      <Header />
      <main className="main">
        <Intro />
      </main>
      <Footer />
    </div>
  );
}

export default App;
