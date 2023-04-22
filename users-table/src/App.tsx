import React from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { IUser } from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = React.useState<IUser[]>([]);

  const onAddUserHandler = (user: IUser) => {
    setUsersList((prev) => [...prev, user]);
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
