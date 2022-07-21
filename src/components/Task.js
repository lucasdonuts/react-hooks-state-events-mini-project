import React from "react";

function Task({ text, category }) {
  const removeTask = (e) => {
    console.log(e.target.parentNode.remove())
  }
  return (
    <div className="task">
      <div className="label">{ category }</div>
      <div className="text">{ text }</div>
      <button className="delete" onClick={ removeTask }>X</button>
    </div>
  );
}

export default Task;
