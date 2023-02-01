export const getMockArray = (arrayLength: number) => {
  const mockArray = Array
    .from({ length: arrayLength })
    .fill(1)
    .map((el: number, index) => el + index);

  return mockArray;
};
