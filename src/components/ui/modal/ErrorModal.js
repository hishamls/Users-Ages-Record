import classes from "./ErrorModal.module.css";
import Card from "../card/Card";
import Button from "../button/Button";
import { Fragment } from "react";
import ReactDOM from "react-dom";

export default function ErrorModal(props) {
  const Backdrop = () => (
    <div className={classes.backdrop} onClick={props.onConfirm} />
  );

  const Overly = () => (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>

      <div className={classes.content}>
        <p>{props.message}</p>
      </div>

      <footer className={classes.action}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overly
          title={props.title}
          message={props.message}
          onConfirm={props.onClick}
        />,
        document.getElementById("overly-root")
      )}
    </Fragment>
  );
}
