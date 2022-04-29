import React from "react";

function NewTaskForm({categories, text, onFormDataChange, onTaskFormSubmit}) {
  return (
    <form className="new-task-form" onSubmit={(e)=>onTaskFormSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>onFormDataChange(e)} value={text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>onFormDataChange(e)}>
          {categories.map((cat)=>{
            if(cat.category !== 'All'){
              return <option key={cat.id}>{cat.category}</option>
            }
            return false
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
