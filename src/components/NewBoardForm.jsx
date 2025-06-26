import React, { useState } from "react";

const NewBoardForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !owner.trim()) {
      setError("Both title and owner are required.");
      return;
    }

    onSubmit({ title: title.trim(), owner: owner.trim() });
    
    setTitle("");
    setOwner("");
    setError("");
  };

  return (
    <div className="new-board-form">
      <h3>Create a New Board</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ borderColor: !title.trim() && error ? "red" : "" }}
        />

        <label>Owner's Name</label>
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          style={{ borderColor: !owner.trim() && error ? "red" : "" }}
        />

        <p>Preview: {title || owner ? `${title} - ${owner}` : "-"}</p>

        <button type="submit">Submit Query</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default NewBoardForm;
