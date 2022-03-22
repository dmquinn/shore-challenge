import { FC } from "react";
import { UserType } from "../types";

interface UserProps {
  users: UserType[];
}

const userList: FC<UserProps> = ({ users }) => {
  return (
    <div>
      {users.map((user, i) => {
        return <h1 key={user.id}>{user.email}</h1>;
      })}
    </div>
  );
};

export default userList;
