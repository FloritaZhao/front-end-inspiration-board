import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ cards, onDeleteCard, onLikeCard }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          likesCount={card.likes}
          onDelete={onDeleteCard}
          onLike={onLikeCard}
        />
      ))}
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onLikeCard: PropTypes.func.isRequired,
};

export default CardList;