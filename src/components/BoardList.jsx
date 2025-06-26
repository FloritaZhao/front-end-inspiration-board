
const BoardList = ({ boards,  setSelectedBoardId }) => {
 
  return (
    <div className="board-list">
      {/* <h3>Boards</h3> */}
      <ul>
        {boards.map((board) => (
          <li key={board.id}>
            <button
              onClick={() => setSelectedBoardId(board.id)}
              style={{ marginBottom: "5px" }}
            >
              {board.title} — <i>{board.owner}</i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;
