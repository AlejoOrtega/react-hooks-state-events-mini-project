import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS.map((task)=>{
    return {
      text: task.text,
      category: task.category,
      hidden: false
    }
  }))
  const [categories, setCategories] = useState(CATEGORIES.map((cat, index)=>{
    return {
      id: index,
      category: cat,
      isClicked: false
    }
  }))
  const [formData, setFormData] = useState({
    text:'',
    category:'Code'
  })
  const handleOnEliminateTask =(text) => {
    setTasks(()=>tasks.filter((task)=> text !== task.text ? true : false) )
  }
  const handleOnCategoryClick = (e) => {
    let catTarget = categories[e.target.id].category
    setCategories(()=> categories.map((cat)=> {
      cat.id===Number(e.target.id)? cat.isClicked=true : cat.isClicked=false
      return cat
    }))
    setTasks(()=> tasks.filter((task)=> {
      if(catTarget=== 'All' || task.category===catTarget){
        task.hidden = false
      }else{
        task.hidden = true;
      }
      return task;
    }))
  }
  const handleOnFormDataChange = (e) =>{
    formData[e.target.name] = e.target.value
    setFormData({...formData})
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault()
    let newTask = {
      text: formData.text,
      category: formData.category,
      hidden: false
    }
    setTasks(()=>[...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onCategoryClick={handleOnCategoryClick}/>
      <NewTaskForm categories={categories} text={formData.text} onFormDataChange={handleOnFormDataChange} onTaskFormSubmit={handleOnSubmit}/>
      <TaskList tasks={tasks} onEliminateTask={handleOnEliminateTask}/>
    </div>
  );
}

export default App;
