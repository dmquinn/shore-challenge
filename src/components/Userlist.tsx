import { FC } from "react";
import { UserType } from "../types";

interface UserProps {
  users: UserType[];
}

const userList: FC<UserProps> = ({ users }) => {
  const departments = ["Sales", "Marketing", "Support"];
  const randomDepartment =
    departments[Math.floor(Math.random() * departments.length)];
  const randomMoney = Math.floor(Math.random() * 60000) + 1;
  const realValue = randomMoney.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
  });
  return (
    <table className="table-auto w-full">
      {users.map((user, i) => {
        const { id, first_name, last_name, email, avatar } = user;
        return (
          <tbody key={id}>
            <tr className="border border-mainBorder">
              <td>
                <img src={avatar} className="rounded-full h-20 p-2" />
              </td>
              <td>
                {first_name}
                {last_name}
              </td>
              <td>{randomDepartment}</td>
              <td>{email}</td>
              <td>{realValue}€</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default userList;
