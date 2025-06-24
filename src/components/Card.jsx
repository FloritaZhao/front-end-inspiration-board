import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ id, message, likesCount, onLike, onDelete }) => {
  return (
    <div className="card">
      <p className="card__message">{message}</p>
      <div className="card__actions">
        <button onClick={() => onLike(id)}>❤️ {likesCount}</button>
        <button onClick={() => onDelete(id)}>🗑️ Delete</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
