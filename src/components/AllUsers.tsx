import { FC, SetStateAction, useEffect, useState } from "react";
import { UserType } from "../types";
import Modal from "./Modal";
interface UserProps {
  users: UserType[];
  searchedUsers: UserType[];
}

const AllUsers: FC<UserProps> = ({ users, searchedUsers }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [userToEdit, setUserToEdit] = useState<UserType>();
  const [usersToDisplay, setUsersToDisplay] = useState<UserType[]>([]);
  const handleClick = (data: SetStateAction<UserType | undefined>) => {
    setModalIsOpen(!modalIsOpen);
    setUserToEdit(data);
  };
  useEffect(() => {
    searchedUsers.length
      ? setUsersToDisplay(searchedUsers)
      : setUsersToDisplay(users);
  }, [searchedUsers, users]);

  return (
    <>
      <table className="table-auto w-full">
        {usersToDisplay.map((user) => {
          return (
            <tbody key={user.id}>
              <tr
                className="border border-mainBorder cursor-pointer hover:bg-grayBg"
                onClick={() => handleClick(user)}
              >
                <td>
                  <img
                    src={user.avatar}
                    className="rounded-full h-20 p-2"
                    alt=""
                  />
                </td>
                <td>
                  {user.first_name} {user.last_name}
                </td>
                <td>{user.department}</td>
                <td>{user.email}</td>
                <td>{user.contribution} €</td>
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
