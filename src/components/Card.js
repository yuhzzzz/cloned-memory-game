import React from "react";
import "./Card.css";
const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (disabled) return;
    handleChoice(card);
  };
  return (
    <div key={card.id} className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt={card.src} className="front" />
        <img
          src="/img/cover.png"
          alt="cover"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
