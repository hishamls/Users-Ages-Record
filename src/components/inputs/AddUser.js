import classes from "./AddUser.module.css";
import Card from "../ui/card/Card";
import Button from "../ui/button/Button";
import { useState, Fragment, useRef } from "react";
import ErrorModal from "../ui/modal/ErrorModal";

export default function AddUser(props) {
  // const [userData, setUserData] = useState({ Name: "", Age: "" });
  const [error, setError] = useState();

  const nameRef = useRef();
  const ageRef = useRef();

  // const changeHandler = (e) => {
  //   if (e.target.value.trim().length < 1) {
  //     // write this code in change and submit
  //     setIsValid(false);
  //   }
  //   // setUserData((pre) => ({ ...pre, [e.target.name]: e.target.value })); // you have write ()=>()
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;

    // if (userData.Name.trim().length === 0 || userData.Age.trim().length === 0) {
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Error!",
        message: "Please don't let any field empty!",
      });
      return;
    }
    // if (+userData.Age < 1) {
    if (+enteredAge < 1) {
      setError({
        title: "Error!",
        message: "Please enter a valid age ( > 0)!",
      });
      return;
    } else {
      // console.log(userData);
      // props.onAddUser(userData);
      props.onAddUser({ enteredName, enteredAge });
      nameRef.current.value = "";
      ageRef.current.value = "";
      // Or Pass Name and Age individually;
      // props.onAddUser(userData.Name, userData.Age);
    }
  };

  const errorCloser = () => setError(null);

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorCloser}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label
          //  className={!isValid ? classes.invalid : ""}
          >
            Name
            <input
              type="text"
              id="user-name"
              ref={nameRef}
              name="Name"
              // value={userData.Name}
              // onChange={changeHandler}
              // className={!isValid ? classes.invalid : ""}
            />
          </label>

          <label>
            Age (in years)
            <input
              type="number"
              name="Age"
              // value={userData.Age}
              // onChange={changeHandler}
              id="user-age"
              ref={ageRef}
            />
          </label>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}
