// import PropTypes from "prop-types";
import Card from './Card';


const CardList = (props) => {
    const cardComponents = props.cards.map((card) => {
        return (
            <li key={card.id}>
                <Card
                    card={card}
                    onDelete={props.onDelete}
                    onLike={props.onLike}
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

export default CardList;


// CardList.propTypes = {
//   selectedBoardId: PropTypes.number,
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       card_id: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       likes_count: PropTypes.number.isRequired,
//       board_id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   setCards: PropTypes.func.isRequired,
// };
