// @flow
//
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
// of rows like this: (you may want to display this pattern in a fixed font for
// better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
//
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion given a
// number of rows:
export default function ZigZag(string: string, number: number): string {
  const output = [];
  const middle = number - Math.floor(number / 2);
  let rowNumber = 0;
  let index = 0;
  let i = 0;

  while (output.length < string.length) {
    output[i] = string[index];

    if (rowNumber !== Math.floor(number / 2)) {
      if (index + number + 1 > string.length) {
        rowNumber++;
        index = rowNumber;
      } else if (number % 2 === 0) {
        index += number;
      } else {
        index += number + 1;
      }
    } else if (index + middle > string.length) {
      rowNumber++;
      index = rowNumber;
    } else {
      index += middle;
    }
    i++;
  }

  return output.join('');
}
