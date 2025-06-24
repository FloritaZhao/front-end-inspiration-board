import './CardList.css';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
    const cardComponents = props.cards.map((card) => {
        return (
            <li key={card.id}>
                <Card
                    id={card.id}
                    message={card.message}
                    likesCount={card.likes}
                    onDelete={props.onDeleteCard}
                    onLike={props.onLikeCard}
                />
            </li>
        );
    });

    return (
        <section>
            <h2 className="card-list__heading">Card List</h2>
            <ul className="card-list">{cardComponents}</ul>
        </section>
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