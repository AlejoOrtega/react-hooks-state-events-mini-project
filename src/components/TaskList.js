import React from "react";
import Task from "./Task";
import {v4 as uuid} from 'uuid'

function TaskList({tasks, onEliminateTask}) {
  return (
    <div className="tasks">
      {tasks.map((task)=> {
        if(task.hidden===false){
          return <Task key={uuid()} task={task} onEliminateTask={onEliminateTask}/>
        }
        return false
      } )}
    </div>
  );
}

export default TaskList;
