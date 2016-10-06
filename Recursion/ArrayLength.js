/**
 * Recursively find the length of an array
 * @flow
 */

export default function getLength(array) {
  switch (Array.isArray(array)) {
    case true: {
      const [first, ...rest] = array;
      return 1 + getLength(rest);
    }
    default:
      return 0;
  }
}
