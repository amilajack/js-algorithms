// Recursively divide an array into half until it only has one element
// @flow
const items = [];

export default function DivideArray(array: number[]): number[][] {
  switch (array.length) {
    case 1:
      items.push(array);
      return items;
    default: {
      const middle = Math.ceil(array.length / 2);
      const first = array.splice(middle);
      DivideArray(first);
      DivideArray(array);
      return items;
    }
  }
}
