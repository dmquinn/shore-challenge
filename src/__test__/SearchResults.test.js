const filterArray = [
  {
    first_name: "Leonard",
    last_name: "Cohen",
    department: "IT",
    gender: "male",
  },
  {
    first_name: "Otto",
    last_name: "Bismarck",
    department: "Sales",
    gender: "female",
  },
  {
    first_name: "Will",
    last_name: "Smith",
    department: "Marketing",
    gender: "male",
  },
];
const filterResult = [
  {
    first_name: "Leonard",
    last_name: "Cohen",
    department: "IT",
    gender: "male",
  },
];

const getSearchResults = (array, input) => {
  const newArray = array.filter((item) => {
    return (
      item.first_name.toUpperCase().includes(input.toUpperCase()) ||
      item.last_name.toUpperCase().includes(input.toUpperCase())
    );
  });
  return newArray;
};

test("Return correct data object from filter", () => {
  expect(getSearchResults(filterArray, "Leonard")).toEqual(filterResult);
});

test("New Array created from filter", () => {
  expect(getSearchResults(filterArray, "Leonard")).not.toEqual(filterArray);
});
