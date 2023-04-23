import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { IUser } from "./UsersList";
import ErrorModal from "../UI/ErrorModal";

interface IError {
  title: string;
  message: string;
}

const AddUser: React.FC<{ onAddUser: (user: IUser) => void }> = ({
  onAddUser,
}) => {
  const [userInput, setUserInput] = React.useState({
    userName: "",
    userAge: "",
  });

  const [error, setError] = React.useState<IError | null>();

  const addUserHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      userInput.userName.trim().length === 0 ||
      userInput.userAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty).",
      });
      setUserInput({
        userName: "",
        userAge: "",
      });
    }

    if (+userInput.userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      setUserInput({
        userName: "",
        userAge: "",
      });
    }

    onAddUser(userInput);
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

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
