import React from "react";
import './SelectedBoard.css';

const SelectedBoard = ({ selectedBoard }) => {
  if (!selectedBoard) {
    return <p>Select a Board from the Board List!</p>;
  }

  return (
    <div className="selected-board">
      <h3>
        <h3>{selectedBoard.title}</h3>
        <em>{selectedBoard.owner}</em>
      </h3>
    </div>
  );
};

export default SelectedBoard;
