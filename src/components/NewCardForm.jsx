// import PropTypes from "prop-types";
import { useState } from 'react';
import './NewCardForm.css';

const NewCardForm = ({ onAddCard }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    onAddCard(message.trim());
    setMessage('');
  };

  const handleChange = (e) => {
    setMessage(e.target.value) 
  }

  return (
    <form className="new-card-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your message..."
        value={message}
        onChange={handleChange}
        maxLength={40}
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

// NewCardForm.propTypes = {
//   onAddCard: PropTypes.func.isRequired,
// };

export default NewCardForm;