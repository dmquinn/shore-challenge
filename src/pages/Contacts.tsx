import { FC, useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";
import { UserType } from "../types";
import AllUsers from "../components/AllUsers";

interface UserProps {
  users: UserType[];
}

const Content: FC<UserProps> = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<UserType[]>([]);
  const departments = ["Sales", "Marketing", "Support", "IT"];
  const genders = ["male", "female", "other"];

  const fetcher = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    const userResult = json.data;
    setUsers(
      userResult.map((user: any) => {
        return {
          gender: genders[Math.floor(Math.random() * genders.length)],
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
        <SearchBar
          users={users}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setSearchedArray={setSearchedArray}
        />
        <AddButton />
      </div>
      <div className="p-2 bg-white border border-mainBorder">
        <AllUsers users={users} searchedUsers={searchedArray} />
      </div>
    </div>
  );
};

export default Content;
