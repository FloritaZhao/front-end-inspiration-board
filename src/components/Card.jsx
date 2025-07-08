import PropTypes from "prop-types";
import './Card.css';

const Card = ({ card, onDelete, onLike }) => {
  if (!card || !card.id) {
    console.warn("Invalid card object:", card);
    return null;
  }

  return (
    <div className="card">
      <p className="card__message">{card.message}</p>
      <div className="card__actions">
        <button
          onClick={() => {
            if (!card.id) {
              console.error("card.id is undefined for likeCard");
              return;
            }
            onLike(card.id);
          }}
        >
          ❤️ {card.likes_count}
        </button>
        <button
          onClick={() => {
            if (!card.id) {
              console.error("card.id is undefined for deleteCard");
              return;
            }
            onDelete(card.id);
          }}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   card: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     message: PropTypes.string.isRequired,
//     likes_count: PropTypes.number.isRequired,
//   }).isRequired,
//   onLike: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default Card;