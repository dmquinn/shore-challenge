const userResult = [
  {
    first_name: "Leonard",
    last_name: "Cohen",
  },
  {
    first_name: "Otto",
    last_name: "Bismarck",
  },
  {
    first_name: "Will",
    last_name: "Smith",
  },
];

const departments = ["Sales", "Marketing", "Support", "IT"];
const genders = ["male", "female", "other"];

const usersTest = userResult.map((user) => {
  return {
    isActive: Math.random() < 0.5,
    gender: genders[Math.floor(Math.random() * genders.length)],
    department: departments[Math.floor(Math.random() * departments.length)],
    contribution: (Math.floor(Math.random() * 60000) + 1).toLocaleString(
      "de-DE",
      {
        minimumFractionDigits: 2,
      }
    ),
    ...user,
  };
});

test("Return array different from input", () => {
  expect(usersTest).not.toEqual(userResult);
});
test("Return", () => {
  expect(usersTest[0].department).toEqual(
    "Sales" || "Marketing" || "Support" || "IT"
  );
});
