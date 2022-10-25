import React, {useState} from "react";
import "../index.css"


export const AddTodo = ({ onAdd, isAdding }) => {
  const [ value, setValue] =  useState(null)

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue('')
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h1>Todo App</h1>
      <input onChange={({target} ) => setValue(target.value)} value={value} placeholder="Add Todo" name="title" />
      <button disabled={value ? false : true} onSubmit={handleOnSubmit}>{isAdding ? "Loading" : "Add"}</button>
      <hr />
    </form>
  );
};
