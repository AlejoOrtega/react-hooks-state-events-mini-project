import React from "react";
import {v4 as uuid} from 'uuid'

function CategoryFilter({categories, onCategoryClick}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((button)=>{
      return <button key={uuid()} id={button.id} className={button.isClicked ? 'selected':''} onClick={(event) => onCategoryClick(event)} >
        {button.category}</button> 
      })}
    </div>
  );
}

export default CategoryFilter;
