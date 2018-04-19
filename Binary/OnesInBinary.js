/**
 * Count the number of one's in the binary representation of a number
 * @flow
 */
export default function OnesInBinary(number: number): number {
  const binary = new Array(32);
  let _placeholder = number;

  while (_placeholder > 0) {
    const pwr = Math.floor(Math.log2(_placeholder));
    _placeholder -= 2 ** pwr;
    binary[binary.length - 1 - pwr] = 1;
  }

  return binary.reduce((p: number, c: number): number => (c === 1 ? p + 1 : p));
}
