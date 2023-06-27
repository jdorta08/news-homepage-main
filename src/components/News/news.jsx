import React from "react";
import gaming from "../../assets/images/image-gaming-growth.jpg";
import retro from "../../assets/images/image-retro-pcs.jpg";
import laptop from "../../assets/images/image-top-laptops.jpg";
import "./news.css";

function News() {
  return (
    <div className="news-container">
      <div className="news-content">
        <div className="news-image-container">
          <img src={gaming} alt="gaming-computers" />
        </div>
        <div className="news-text-container">
          <span>01</span>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="news-content">
        <div className="news-image-container">
          <img src={laptop} alt="top laptops of 2023" />
        </div>
        <div className="news-text-container">
          <span>02</span>
          <h4>Top 10 Laptops of 2023</h4>
          <p>Our best picks for various needs and budgets</p>
        </div>
      </div>
      <div className="news-content">
        <div className="news-image-container">
          <img src={retro} alt="growth of gaming" />
        </div>
        <div className="news-text-container">
          <span>03</span>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities</p>
        </div>
      </div>
    </div>
  );
}

export default News;
