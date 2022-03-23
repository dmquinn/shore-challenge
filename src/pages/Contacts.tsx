import { FC, useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";
import { UserType } from "../types";
import AllUsers from "../components/AllUsers";

interface UserProps {
  users: UserType[];
}

const Content: FC<UserProps> = () => {
  const [users, setUsers] = useState([]);
  const departments = ["Sales", "Marketing", "Support"];

  const fetcher = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    const userResult = json.data;
    setUsers(
      userResult.map((user: any) => {
        return {
          department:
            departments[Math.floor(Math.random() * departments.length)],
          contribution: (Math.floor(Math.random() * 60000) + 1).toLocaleString(
            "de-DE",
            {
              minimumFractionDigits: 2,
            }
          ),
          ...user,
        };
      })
    );
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div className="p-10 bg-grayBg h-screen">
      <div className="flex mb-3">
        <SearchBar />
        <AddButton />
      </div>
      <div className="p-2 bg-white border border-mainBorder">
        <AllUsers users={users} />
      </div>
    </div>
  );
};

export default Content;
