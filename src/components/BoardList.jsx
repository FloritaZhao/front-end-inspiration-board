import './BoardList.css';

const BoardList = ({ boards,  setSelectedBoardId }) => {
 
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
