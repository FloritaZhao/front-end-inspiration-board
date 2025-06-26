// import PropTypes from "prop-types";
// import React, { useState } from "react";
import './Card.css';


const Card = ({ card, onDelete, onLike }) => {

  return (
    <div className="card">
      <p className="card__message">{card.message}</p>
      <div className="card__actions"></div>
      <button onClick={() => onLike(card.id)}>❤️ {card.likes_count}</button>
      <button onClick={() => onDelete(card.id)}>🗑️ Delete</button>
    </div>
  );
};

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
//   likesCount: PropTypes.number.isRequired,
//   onLike: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default Card;
