import React from "react";
import "wired-elements";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category,index)=>{
          return <wired-button type="button" className='filter-btn' key={index} onClick={()=>filterItems(category)}>
            {category}
          </wired-button>
      })}
    </div>
  );
};

export default Categories;
