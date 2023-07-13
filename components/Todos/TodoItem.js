import { useRouter } from "next/router";
import classes from "./TodoItem.module.css";
const TodoItem = (props) => {
  const router = useRouter();

  async function deleteHandler(id) {
    const response = await fetch(`/api/todo/delete?id=${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  async function updateHandler(id, isDone) {
    const response = await fetch(`/api/todo/update?id=${id}`, {
      method: "POST",
      body: JSON.stringify({ id, isDone }),
    });
    router.push("/");
  }
  return (
    <div className={classes.todo}>
      <div>
        <input className={classes.checkbox}
          type="checkbox"
          checked={props.todo.isDone}
          onChange={(event) =>
            updateHandler(props.todo.id, event.target.checked)
          }
        />
        <span>{props.todo.name}</span>
      </div>
      <button
        className={classes.btnDelete}
        onClick={() => deleteHandler(props.todo.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default TodoItem;
