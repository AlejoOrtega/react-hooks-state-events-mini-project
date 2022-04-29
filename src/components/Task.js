import React from "react";

function Task({task, onEliminateTask}) {
  const {category, text} = task
  const onDelete = () => {
    onEliminateTask(text)
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text" name='text'>{text}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
