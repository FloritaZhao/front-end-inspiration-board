import React, { useState } from "react";
import BoardList from "./components/BoardList";
import SelectedBoard from "./components/SelectedBoard";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
import { mockBoards, mockCards } from "./mockData";
import "./App.css";


const App = () => {
  const [boards, setBoards] = useState(mockBoards);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [cards, setCards] = useState(mockCards);
  const [showBoardForm, setShowBoardForm] = useState(false);

  const selectedBoard = boards.find((b) => b.id === selectedBoardId);
  const boardCards = cards.filter((c) => c.board_id === selectedBoardId);

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
              boards={boards}
              setBoards={setBoards}
              onSuccess={() => setShowBoardForm(false)}
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
              onAddCard={(message) =>
                setCards([
                  ...cards,
                  {
                    id: Math.floor(Math.random() * 100000),  
                    message,
                    likes_count: 0,
                    board_id: selectedBoardId
                  }
                ])
              }
            />
          </div>

          <div className="column">
            <h2>Cards for {selectedBoard.title}</h2>
            <CardList
              cards={boardCards}
              onLike={(cardId) =>
                setCards((prevCards) =>
                  prevCards.map((card) =>
                    card.id === cardId
                      ? { ...card, likes_count: card.likes_count + 1 }
                      : card
                  )
                )
              }
              onDelete={(cardId) =>
                setCards((prev) => prev.filter((c) => c.id !== cardId))
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;