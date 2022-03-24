const getSearchResults = (array, input) => {
  const newArray = array.filter((item) => {
    return (
      item.first_name.toUpperCase().includes(input.toUpperCase()) ||
      item.last_name.toUpperCase().includes(input.toUpperCase())
    );
  });
  return newArray;
};

test("Function returns an array", () => {
  expect(getSearchResults(["r", "e"], "hello")).toHaveProperty("");
});
