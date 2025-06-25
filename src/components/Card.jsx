// import PropTypes from "prop-types";
// import React, { useState } from "react";
import './Card.css';


const Card = ({ card, onDelete, onLike }) => {
  const handleLike = () => {
    onLike(card.id);
  };

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this card?");
    if (confirmed) {
    onDelete(card.id);
      }
  };

  return (
    <div className="card">
      <p className="card__message">{card.message}</p>
      <div className="card__actions"></div>
      <button onClick={handleLike}>❤️ {card.likes_count}</button>
      <button onClick={handleDelete}>🗑️ Delete</button>
    </div>
  );
};

export default Card;


// Card.propTypes = {
//   card: PropTypes.shape({
//     card_id: PropTypes.number.isRequired,
//     message: PropTypes.string.isRequired,
//     likes_count: PropTypes.number.isRequired,
//   }).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
