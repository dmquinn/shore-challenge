import { FC, SetStateAction, useState } from "react";
import { UserType } from "../types";
import Modal from "./Modal";
interface UserProps {
  users: UserType[];
  searchedUsers: UserType[];
}

const AllUsers: FC<UserProps> = ({ users, searchedUsers }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [userToEdit, setUserToEdit] = useState<UserType>();
  const handleClick = (data: SetStateAction<UserType | undefined>) => {
    setModalIsOpen(!modalIsOpen);
    setUserToEdit(data);
  };

  return (
    <>
      <table className="table-auto w-full">
        {!searchedUsers.length
          ? users.map((user) => {
              const {
                id,
                first_name,
                last_name,
                email,
                avatar,
                department,
                contribution,
              } = user;
              return (
                <tbody key={id}>
                  <tr
                    className="border border-mainBorder cursor-pointer hover:bg-grayBg"
                    onClick={() => handleClick(user)}
                  >
                    <td>
                      <img
                        src={avatar}
                        className="rounded-full h-20 p-2"
                        alt=""
                      />
                    </td>
                    <td>
                      {first_name} {last_name}
                    </td>
                    <td>{department}</td>
                    <td>{email}</td>
                    <td>{contribution} €</td>
                  </tr>
                </tbody>
              );
            })
          : searchedUsers.map((user) => {
              const {
                id,
                first_name,
                last_name,
                email,
                avatar,
                department,
                contribution,
              } = user;
              return (
                <tbody key={id}>
                  <tr
                    className="border border-mainBorder cursor-pointer hover:bg-grayBg"
                    onClick={() => handleClick(user)}
                  >
                    <td>
                      <img
                        src={avatar}
                        className="rounded-full h-20 p-2"
                        alt=""
                      />
                    </td>
                    <td>
                      {first_name}
                      {last_name}
                    </td>
                    <td>{department}</td>
                    <td>{email}</td>
                    <td>{contribution} €</td>
                  </tr>
                </tbody>
              );
            })}
      </table>
      <Modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        user={userToEdit}
      />
    </>
  );
};

export default AllUsers;
