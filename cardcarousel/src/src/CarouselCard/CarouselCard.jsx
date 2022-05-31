import React from "react";
import "./Styles.css";
//defaultImg
//imgUrl
function CarouselCard({ item, centerCard }) {
  return (
    <div
      className={`cardContainer ${centerCard === item.id ? "centerCard" : ""}`}
    >
      <div className="rowOne">
        <dir className="imgContainer">
          <img src={item.defaultImg} alt="" />
        </dir>
      </div>
      <div className="textContainer">
        <h3>{item.displayname}</h3>
       {centerCard === item.id && <small>START HERE &gt;</small>}
      </div>
      {centerCard === item.id && <div className="line"></div>}
    </div>
  );
}

export default CarouselCard;
