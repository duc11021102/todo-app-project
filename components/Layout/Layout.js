import classes from "./Layout.module.css";
export default function RootLayout(props) {
  return (
    <div className={classes.layout}>
      <h1>Todo App</h1>
      <main>{props.children}</main>
    </div>
  );
}
