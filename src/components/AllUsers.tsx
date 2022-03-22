import { FC, useState } from "react";
import { UserType } from "../types";
import Modal from "./Modal";
interface UserProps {
  users: UserType[];
}

const allUsers: FC<UserProps> = ({ users }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userToEdit, setUserToEdit] = useState<UserType>();
  const handleClick = (e: any) => {
    console.log(e.target.value);
    setUserToEdit(e.target);
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <table className="table-auto w-full">
        {users.map((user) => {
          const {
            id,
            first_name,
            last_name,
            email,
            avatar,
            department,
            money,
          } = user;
          return (
            <tbody key={id}>
              <tr
                className="border border-mainBorder"
                onClick={(e) => handleClick(e)}
              >
                <td>
                  <img src={avatar} className="rounded-full h-20 p-2" alt="" />
                </td>
                <td>
                  {first_name}
                  {last_name}
                </td>
                <td>{department}</td>
                <td>{email}</td>
                <td>{money} €</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <Modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        userToEdit={userToEdit}
      />
    </>
  );
};

export default allUsers;
