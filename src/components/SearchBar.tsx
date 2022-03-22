const SearchBar = () => {
  return (
    <input
      type="search"
      className="form-control bg-searchGray px-5 h-10 rounded w-full"
      placeholder="Search user"
      aria-label="Search"
      aria-describedby="button-addon2"
    />
  );
};

export default SearchBar;
