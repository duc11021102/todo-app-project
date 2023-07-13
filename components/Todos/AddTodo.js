import { useRef } from "react";
import classes from "./AddTodo.module.css";
import { useState } from "react";


const AddTodo = (props) => {
  const [todoName, setTodoName] = useState('');

  function onChangeHandler(event) {
    setTodoName(event.target.value);
  }

  function onAddHandler() {
    const todoData = {
      name: todoName,
    };
    props.onAddTodo(todoData);
    setTodoName('');
  }
  return (
    <div>
      <input className={classes.input} type="text" value={todoName} onChange={onChangeHandler} placeholder="Add a new todo." />
      <button className={classes.btnAdd} onClick={onAddHandler}>Add</button>
    </div>
  );
};
export default AddTodo;
