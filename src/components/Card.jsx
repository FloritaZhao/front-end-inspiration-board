import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
    const handleLikeClick = () => {
        props.onLike(props.id);
    };

    const handleDeleteClick = () => {
        props.onDelete(props.id);
    };

    return (
        <div className="card">
            <p className="card__message">{props.message}</p>
            <div className="card__actions">
                <button onClick={handleLikeClick}>❤️ {props.likesCount}</button>
                <button onClick={handleDeleteClick}>🗑️ Delete</button>
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