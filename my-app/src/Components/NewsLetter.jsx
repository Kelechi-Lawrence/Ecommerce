import React from "react";
import "../css/newsletter.css";
const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1> Get Exclusive offer on your email</h1>
      <p> subscribe to our news letter and stay updated </p>
      <div>
        <input className="input" type="text" placeholder="ur email" />
        <button className="subscribe">subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
