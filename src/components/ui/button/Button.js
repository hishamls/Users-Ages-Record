import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      type={props.type || Button}
    >
      {props.children}
    </button>
  );
}
