import React from "react";

function Task({id, name, category, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{name}</div>
      <button 
        id={id} 
        className="delete" 
        onClick={(e) => handleDelete(e.target.id)}>X
      </button>
    </div>
  );
}

export default Task;
