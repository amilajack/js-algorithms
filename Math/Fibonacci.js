// @flow
type num = number;

const list = [];

export default function FibonacciIterative(target: number): num[] {
  const sequence = [];

  if (target >= 1) sequence.push(1);
  if (target >= 2) sequence.push(1);

  for (let i = 2; i < target; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

export function FibonacciRecursive(number: num): num[] {
  return ((): num[] => {
    switch (list.length) {
      case 0:
        list.push(1);
        return FibonacciRecursive(number);
      case 1:
        list.push(1);
        return FibonacciRecursive(number);
      case number:
        return list;
      default:
        list.push(list[list.length - 1] + list[list.length - 2]);
        return FibonacciRecursive(number);
    }
  })();
}

const dict: Map<num, num> = new Map();

export function FibonacciRecursiveDP(stairs: num): num {
  if (stairs <= 0) return 0;
  if (stairs === 1) return 1;

  // Memoize stair count
  if (dict.has(stairs)) return dict.get(stairs);

  const res =
    FibonacciRecursiveDP(stairs - 1) +
    FibonacciRecursiveDP(stairs - 2);

  dict.set(stairs, res);

  return res;
}

// @TODO: FibonacciBinetsTheorem
