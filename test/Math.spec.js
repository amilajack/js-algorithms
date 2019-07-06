// @flow
import assert from 'assert';
import CheckAddition from '../Math/CheckAddition';
import FactorialRecursive, { FactorialIterative } from '../Math/Factorial';
import FibonacciIterative, {
  FibonacciRecursiveDP,
  FibonacciRecursive
} from '../Math/Fibonacci';
import HappyNumbers, { calc } from '../Math/HappyNumbers';
import Integral, { areaNumerical } from '../Math/Integral';
import PascalRecursive, { PascalIterative } from '../Math/Pascal';
import PrimeNumberGenerator from '../Math/PrimeNumberGenerator';
import RandomNumber, { isBeween } from '../Math/RandomNumber';
import SquareRoot from '../Math/SquareRoot';
import VectorCalculate from '../Math/VectorCalculate';

describe('Math', () => {
  test('CheckAddition', () => {
    expect(CheckAddition(16, [1, 3, 4, 5, 6, 11])).toEqual(true);
    expect(CheckAddition(16, [1, 3, 4, 5, 6])).toEqual(false);
    expect(CheckAddition(10, [2, 3, 5])).toEqual(false);
    expect(CheckAddition(10, [2, 3, 5, 5])).toEqual(true);
  });

  test('FactorialRecursive', () => {
    expect(FactorialRecursive(1)).toEqual(1);
    expect(FactorialRecursive(3)).toEqual(6);
    expect(FactorialRecursive(4)).toEqual(24);
    expect(FactorialRecursive(10)).toEqual(3628800);
    expect(FactorialIterative(1)).toEqual(1);
    expect(FactorialIterative(3)).toEqual(6);
    expect(FactorialIterative(4)).toEqual(24);
    expect(FactorialIterative(10)).toEqual(3628800);
  });

  test('Fibonacci()', () => {
    expect(FibonacciIterative(0)).toEqual([]);

    expect(FibonacciIterative(1)).toEqual([1]);
    expect(FibonacciIterative(2)).toEqual([1, 1]);

    expect(FibonacciRecursive(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    expect(FibonacciRecursiveDP(10)).toEqual(55);
    expect(FibonacciIterative(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  test('HappyNumberChecker', () => {
    expect(calc(36)).toEqual(45);
    expect(HappyNumbers(7)).toEqual(true);
    expect(HappyNumbers(2)).toEqual(false);
  });

  test('PrimeNumberGenerator()', () => {
    expect(PrimeNumberGenerator(10)).toEqual([1, 2, 3, 5, 7]);
    expect(PrimeNumberGenerator(20)).toEqual([1, 2, 3, 5, 7, 11, 13, 17, 19]);
  });

  test('RandomBetween()', () => {
    assert(isBeween(RandomNumber(1, 10), 1, 10));
  });

  test('CalculateVector', () => {
    expect(
      VectorCalculate([
        {
          direction: 155,
          magnitude: 100
        },
        {
          direction: 155,
          magnitude: 122
        }
      ])
    ).toEqual({
      xMag: -201.176,
      yMag: 93.874,
      totalMag: 222
    });
  });

  test('SquareRoot()', () => {
    expect(SquareRoot(9)).toEqual(3);
    expect(SquareRoot(25)).toEqual(5);
    expect(SquareRoot(4)).toEqual(2);
  });

  test('Pascal()', () => {
    expect(PascalRecursive(2)).toEqual([[1], [1, 1]]);

    expect(PascalRecursive(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]);

    expect(PascalIterative(2)).toEqual([[1], [1, 1]]);

    expect(PascalIterative(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]);
  });

  test('Integral', () => {
    expect(Integral([3, 4, 5], 0, 3)).toEqual(60);
    expect(Math.round(areaNumerical([3, 4, 5], 0.001, 0, 3))).toEqual(60);
  });
});
