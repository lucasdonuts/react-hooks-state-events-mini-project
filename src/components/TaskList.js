import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const displayTasks = () => {
    return tasks.map( task => {
      const key = Math.floor(Math.random() * 100) + 1;
      console.log(task, key)
      return (
        <Task key={ key } text={ task.text } category={ task.category }/>
      )
    })
  }

  return (
    <div className="tasks">
      {displayTasks()}
    </div>
  );
}

export default TaskList;
