export const getSearchResults = (array: any[], input: string) => {
  const newArray = array.filter((item) => {
    return (
      item.first_name.toUpperCase().includes(input.toUpperCase()) ||
      item.last_name.includes(input.toUpperCase())
    );
  });
  return newArray;
};
