import { FC, useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";
import { UserType } from "../types";
import Userlist from "../components/Userlist";

interface UserProps {
  users: UserType[];
}

const Content: FC<UserProps> = () => {
  const [users, setUsers] = useState([]);
  const fetcher = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  useEffect(() => {
    fetcher();
  }, []);
  console.log(users);
  return (
    <div className="p-10 bg-grayBg h-screen">
      <div className="flex mb-3">
        <SearchBar />
        <AddButton />
      </div>
      <div className="p-2 bg-white border border-mainBorder">
        <Userlist users={users} />
      </div>
    </div>
  );
};

export default Content;
