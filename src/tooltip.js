import React from "react";
import Card from "./card";
import "./tooltip.css";
export default function Tooltip() {
  return (
    <>
      <div className="tooltip">
        bottom
        <div className="bottom">
          <Card />
        </div>
      </div>
    </>
  );
}
