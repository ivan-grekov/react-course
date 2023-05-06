import { useState, Component, ReactNode } from "react";
import User from "./User";

import classes from "./Users.module.css";

export interface IUser {
  id: string;
  name: string;
}

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class Users extends Component<{}, { showUsers: boolean; moreState: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      showUsers: true,
      moreState: "Test",
    };
  }
  toggleUserHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render(): React.ReactNode {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user: IUser) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUserHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user: IUser) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
