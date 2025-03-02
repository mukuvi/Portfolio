import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="home-main-sect">
        <div className="left-home-sect">
          <h1 className="home-title">Hi, I'm JAMES</h1>
          <h3 className="home-subtitle">Software Developer</h3>
          <p className="home-text">
            I build modern, responsive web applications
          </p>
          <div className="home-btns">
            <button
              className="home-btn-work"
              onClick={() => window.open("https://github.com/mukuvi")}
            >
              View My work
            </button>
            <button
              className="home-btn-contact"
              onClick={() => window.open("/jamesngandu.pdf")}
            >
              Resume
            </button>
          </div>
        </div>
        <div className="left-home-section">
          <div class="cube-container">
            <div class="cube">
              <div class="face front">
                <i class="fab fa-react"></i>
              </div>
              <div class="face back">
                <i class="fab fa-node-js"></i>
              </div>
              <div class="face right">
                <i class="fab fa-js"></i>
              </div>
              <div class="face left">
                <i class="fab fa-html5"></i>
              </div>
              <div class="face top">
                <i class="fab fa-css3-alt"></i>
              </div>
              <div class="face bottom">
                <i class="fab fa-github"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="right-home-sect"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
