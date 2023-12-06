// import React from 'react'
import { useState } from "react";
import {AddCategory,GifGrid} from "./components"

const GifExpertApp = () => {

 const [category, setcategory] = useState(['']);

  const onAddCategory = (newCategory)=> {
    if (category.includes(newCategory)) return;     //si existe nueva categoria lo agrega sino
    setcategory([newCategory,...category]);  //muestra esto
  }

  return (
    <div>
      <h1>Gif Expert App</h1>
      <AddCategory 
        onNewCategory={event=> onAddCategory(event)}
      />
      <ol className="ol">
        {category.map(category =>{
          return(
           <GifGrid key={category} 
           category={category}/>
          )
        })}
      </ol>
    </div>
  )
}

export default GifExpertApp
