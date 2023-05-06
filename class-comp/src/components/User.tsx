import React from "react";
import classes from "./User.module.css";
import { IUser } from "./Users";

class User extends React.Component<Pick<IUser, "name">> {
  render(): React.ReactNode {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// Func component

// const User: React.FC<Pick<IUser, "name">> = ({ name }) => {
//   return <li className={classes.user}>{name}</li>;
// };

export default User;
