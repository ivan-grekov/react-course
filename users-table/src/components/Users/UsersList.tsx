import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

export interface IUser {
  userName: string;
  userAge: string;
}

const UsersList: React.FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user, id) => (
          <li key={id}>
            {user.userName} {user.userAge}
            {user.userName.length > 1 && "years old"}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
