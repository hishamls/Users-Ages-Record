import React, { useState } from "react";
import AddUser from "./components/inputs/AddUser";
import UsersList from "./components/outputs/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  // const addUserHandler = (uName, uAge) => { //require properties
  const addUserHandler = (newUsr) => {
    // require an object
    setUsersList((preList) => {
      return [
        ...preList,
        {
          Name: newUsr.enteredName,
          Age: newUsr.enteredAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <>
      {/* Inputs */}
      <AddUser onAddUser={addUserHandler} />
      {/* Outputs  */}
      <UsersList users={usersList} />
    </>
  );
}

export default App;
