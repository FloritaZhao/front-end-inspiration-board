import React from "react";

const SelectedBoard = ({ selectedBoard }) => {
  if (!selectedBoard) {
    return <p>Select a Board from the Board List!</p>;
  }

  return (
    <div className="selected-board">
      <h3>
        {selectedBoard.title} — {selectedBoard.owner}
      </h3>
    </div>
  );
};

export default SelectedBoard;
