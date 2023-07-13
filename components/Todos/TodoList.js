import TodoItem from "./TodoItem";
import classes from './TodoList.module.css';

const TodoList = (props) => {
    return (
        <div>
          <ul className={classes.todoBox} style={{ listStyleType: "none", padding: 5 }}>
            {props.todos.map((todo) => {
              return (
                <li className={classes.todo} key={todo.id} style={{ padding: "5px 0" }}>
                  <TodoItem todo={todo} />
                </li>
              );
            })}
          </ul>
        </div>
      );
}

export default TodoList;