import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { UserType } from "../types";
import { getSearchResults } from "../utils";

interface SearchProps {
  users: UserType[];
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSearchedArray: Dispatch<SetStateAction<UserType[]>>;

  searchTerm: string;
}

const SearchBar: FC<SearchProps> = ({
  users,
  setSearchTerm,
  setSearchedArray,
}) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      setSearchTerm(e.target.value);
      const filteredSearchResults = getSearchResults(users, e.target.value);
      setSearchedArray(filteredSearchResults);
    } else {
      setSearchTerm("");
      setSearchedArray([]);
    }
  };

  return (
    <input
      type="search"
      className="form-control bg-searchGray px-5 h-10 rounded w-full"
      placeholder="Search user"
      aria-label="Search"
      onChange={(e) => handleSearch(e)}
    />
  );
};

export default SearchBar;
