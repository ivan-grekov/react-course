import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { IUser } from "./UsersList";

const AddUser: React.FC<{ onAddUser: (user: IUser) => void }> = ({
  onAddUser,
}) => {
  const [userInput, setUserInput] = React.useState({
    userName: "",
    userAge: "",
  });

  const addUserHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      userInput.userName.trim().length === 0 ||
      userInput.userAge.trim().length === 0
    )
      return;
    if (+userInput.userAge < 1) return;

    onAddUser(userInput);

    setUserInput({
      userName: "",
      userAge: "",
    });
  };

  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {
      return {
        ...prev,
        userName: e.target.value,
      };
    });
  };

  const onChangeAgeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {
      return {
        ...prev,
        userAge: e.target.value,
      };
    });
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userInput.userName}
          onChange={onChangeNameHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={userInput.userAge}
          onChange={onChangeAgeHandler}
        />
        <Button type="submit" onClick={() => console.log("click")}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
