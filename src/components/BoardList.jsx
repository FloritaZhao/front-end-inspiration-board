import React from "react";
import './BoardList.css';

// import { mockBoards } from "../mockData";
// import axios from "axios";

// const BACKEND = import.meta.env.VITE_APP_BACKEND_URL;

const BoardList = ({ boards, setSelectedBoardId }) => {
  return (
    <div className="board-list">
      {/* <h3>Boards</h3> */}
      <ul>
        {boards.map((board) => (
          <li key={board.id}>
            <button onClick={() => setSelectedBoardId(board.id)} className="board-button">
              <div className="board-content">
                <div className="board-title">{board.title}</div>
                <div className="board-owner"><i>{board.owner}</i></div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;
