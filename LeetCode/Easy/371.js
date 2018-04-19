// Sum of Two Integers
//
// Calculate the sum of two integers a and b, but you are not allowed to use
// the operator + and -
//
// ex. Given a = 1 and b = 2, return 3.
//
// @flow
type num = number;

export default function SumTimelineMethod(first: num, second: num): num {
  const _first = new Array(Math.abs(first));
  const _second = new Array(Math.abs(second));
  const negatives = [];
  const positives = [];

  while (_first.length !== 0) {
    // first is positive
    if (_first.length > 0 && first > 0 && negatives.length === 0) {
      positives.push('-');
    } else if (first > 0 && negatives.length > 0) {
      negatives.splice(0, 1);
      // first is negative
    } else if (first < 0 && positives.length === 0) {
      negatives.push('-');
    } else if (first < 0 && positives.length > 0) {
      positives.splice(0, 1);
    }
    _first.splice(0, 1);
  }

  while (_second.length !== 0) {
    if (_second.length > 0 && second > 0 && negatives.length === 0) {
      positives.push('-');
    } else if (second > 0 && negatives.length > 0) {
      negatives.splice(0, 1);
      // second is negative
    } else if (second < 0 && positives.length === 0) {
      negatives.push('-');
    } else if (second < 0 && positives.length > 0) {
      positives.splice(0, 1);
    }
    _second.splice(0, 1);
  }

  return positives.length === 0
    ? negatives.length === 0
      ? 0
      : negatives.length * -1
    : positives.length;
}
