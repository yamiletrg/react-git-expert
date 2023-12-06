import React, { useState } from "react";

const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");
  // const onInputChange = (event)=>{
  //     console.log(event.target.value)
  //     setInputValue(event.target.value)
  // }
  const onInputChange = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event)=>{
    event.preventDefault();
    // console.log(inputValue)

    if(inputValue.trim().length<=1) return;


    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="buscar gift"
        value={inputValue}
        // onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
