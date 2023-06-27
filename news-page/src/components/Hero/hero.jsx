import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="main-container">
      <div className="hero">
        <div className="image-container"></div>
        <div className="content-container">
          <div className="title-content">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="text-content">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platform back into the hands of the people. But is it
              really fullfilling its promise
            </p>
            <a className="custom-btn" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-title">
            <h2>New</h2>
          </div>
          <div className="sidebar-article">
            <h4>Hydrogen VS Electric Cars</h4>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="sidebar-article">
            <h4>The Downsides of AI Artistry</h4>
            <p>
              What are the possible adverse effects of on-demand AI Image
              generation?
            </p>
          </div>
          <div className="sidebar-article">
            <h4>Is VC Funding Drying Up?</h4>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
