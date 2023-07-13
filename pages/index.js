"use client";
import AddTodo from "../components/Todos/AddTodo";
import TodoList from "../components/Todos/TodoList";
import { useRouter } from "next/router";
import { Fragment } from "react";
import classes from '../styles/Home.module.css';

export default function HomePage(props) {
  const router = useRouter();
  async function onAddTodoHandler(enteredTodoData) {
    const response = await fetch("http://localhost:3001/api/todo/add", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(enteredTodoData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/");
  }

  return (
    <Fragment>
      <div>
        <AddTodo onAddTodo={onAddTodoHandler}></AddTodo>
        <TodoList todos={props.todos}></TodoList>
      </div>
    </Fragment>
  );
}
export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/api/todo/list").catch(
    (error) => console.log("error", error)
  );
  const result = await response.json();
  const data = result.todos;
  return {
    props: {
      todos: data,
    },
  };
}
