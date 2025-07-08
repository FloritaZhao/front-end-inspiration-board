import React, { useState , useEffect } from "react";
import BoardList from "./components/BoardList";
import SelectedBoard from "./components/SelectedBoard";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
import "./App.css";
import { fetchBoards, createBoard, fetchCards, addCard, likeCard, deleteCard } from "./Api";


const App = () => {
  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [cards, setCards] = useState([]);
  const [showBoardForm, setShowBoardForm] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    fetchBoards()
      // .then(res => {
      //   console.log(res.data);
      //   console.log(res.status, res.statusText);
      //   if (typeof(res.data) !== 'object') {
      //     const error = 'Response is not an array';
      //     throw error
      //   }
      //   return res;
      // })
      .then((res) => setBoards(res.data))
      .catch((err) => {
        console.error("loading board wrong", err);
        setError("error, please try again");
      });
  }, []);

  useEffect(() => {
    if (!selectedBoardId) {
      setCards([]);
      return;
    }
    fetchCards(selectedBoardId)
      .then((res) => setCards(res.data))
      .catch((err) => {
        console.error("loading card wrong", err);
        setError("error, please try again");
      });
  }, [selectedBoardId]);


  const selectedBoard = boards.find((b) => b.id === selectedBoardId);
  const boardCards = cards.filter((c) => c.board_id === selectedBoardId);


  const handleCreateBoard = ({ title, owner }) => {
    createBoard({ title, owner })
      .then((res) => {
        setBoards([...boards, res.data]);
        setShowBoardForm(false);
      })
      .catch((err) => {
        console.error("Failed to create board", err);
        setError("Unable to create board. Try again.");
      });
  };

  const handleLike = (cardId) => {
    likeCard( cardId)
      .then(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === cardId
              ? { ...card, likes_count: card.likes_count + 1 }
              : card
          )
        );
      })
      .catch((err) => {
        console.error("Failed to like card:", err);
      });
  };

  const handleDelete = (cardId) => {
    deleteCard(cardId)
      .then(() => {
        setCards((prevCards) =>
          prevCards.filter((card) => card.id !== cardId)
        );
      })
      .catch((err) => {
        console.error("Failed to delete card:", err);
      });
  };

  const handleAddCard = (message) => {
    addCard(selectedBoardId, { message })
      .then((res) => {
        setCards((prev) => [...prev, res.data]);
      })
      .catch((err) => {
        console.error("Error creating card:", err);
        setError("Failed to create card.");
      });
  };



  return (
    <div className="app-container">
      <h1 className="title">📎 Inspiration Board</h1>

      {/* first half */}
      <div className="top-row">
        <div className="column">
          <h2>Boards</h2>
          <BoardList
            boards={boards}
            setSelectedBoardId={setSelectedBoardId}
          />
        </div>

        <div className="column">
          <h2>Selected Board</h2>
          <SelectedBoard selectedBoard={selectedBoard} />
        </div>

        <div className="column">
          <h2>Create a New Board</h2>
          <button onClick={() => setShowBoardForm(!showBoardForm)}>
            {showBoardForm ? "Hide" : "Show"} New Board Form
          </button>
          {showBoardForm && (
            <NewBoardForm
              onSubmit={handleCreateBoard}
            />
          )}
        </div>
      </div>

      {/* second half */}
      {selectedBoard && (
        <div className="bottom-row">
          <div className="column">
            <h2>Create a New Card</h2>
            <NewCardForm
              selectedBoardId={selectedBoardId}
              onAddCard={handleAddCard}
            />
          </div>

          <div className="column">
            <h2>Cards for {selectedBoard.title}</h2>
            <CardList
              cards={boardCards}
              onLike={handleLike}
              onDelete={handleDelete}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;