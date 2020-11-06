import React from "react";
import "./card.css";
export default function Card() {
  return (
    <>
      <div className="card shadow1">
        <div className="grid-container">
          <div className="avatar">
            <img
              className="avatarimg"
              src="https://source.unsplash.com/random/150x150"
              alt="avatar"
            ></img>
          </div>
          <button className="myButton">Follow</button>
        </div>
        <div style={{ lineHeight: 0.1 }}>
          <h4>Reddy Nagendra kola</h4>
          <a className="highlight" href="assam">
            @kola2203
          </a>
        </div>
        <br />
        <p>This is a card tooltip built using ReactJs & custom-made CSS.</p>
      </div>
    </>
  );
}
