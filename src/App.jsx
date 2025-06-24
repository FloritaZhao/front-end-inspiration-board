import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';

const initialCardData = [
  { id: 1, message: "Hello from your first card!", likes: 0 },
  { id: 2, message: "Keep pushing forward!", likes: 3 },
  { id: 3, message: "You're doing great!", likes: 5 },
  { id: 4, message: "React is fun!", likes: 2 },
];

function App() {
  const [cardData, setCardData] = useState(initialCardData);

  const handleLike = (id) => {
    setCardData((prevData) =>
      prevData.map((card) =>
        card.id === id ? { ...card, likes: card.likes + 1 } : card
      )
    );
  };

  const handleDelete = (id) => {
  const confirmed = window.confirm("Are you sure you want to delete this card?");
  if (confirmed) {
    setCardData((prevData) => prevData.filter((card) => card.id !== id));
  }
};

  const handleAddCard = (message) => {
  const newCard = {
    id: Date.now(),
    message: message,
    likes: 0,
  };
  setCardData((prevData) => [newCard, ...prevData]);
};
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Inspiration Board</h1>

      <NewCardForm onAddCard={handleAddCard} />

      <CardList
        cards={cardData}
        onDeleteCard={handleDelete}
        onLikeCard={handleLike}
      />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
