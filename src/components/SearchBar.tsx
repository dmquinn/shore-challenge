const SearchBar = () => {
  return (
    <div className="col-span-4">
      <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
        <input
          type="search"
          className="form-control bg-searchGray p-2 rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
      </div>
    </div>
  );
};

export default SearchBar;
