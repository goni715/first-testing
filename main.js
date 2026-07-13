export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }

  return sum;
}

//for error testing
export function add2(numbers) {
  let sum = 0;

  throw new Error("something went wrong");

  for (const number of numbers) {
    sum += +number;
  }

  return sum;
}

export const returnStrLength = (str) => str.length;
