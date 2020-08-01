import { expect } from 'chai';
import Coins from '../DynamicProgramming/Coins';
import LevenshteinDistance from '../DynamicProgramming/LevenshteinDistance';

describe('DynamicProgramming', () => {
  test('Coins', () => {
    expect(Coins(10)).equal(9);
  });

  test('LevenshteinDistance', () => {
    const testCase = [
      {
        str1: 'aaaaaaaaaaaaaaaaaaaaaaaXaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        str2: 'aaaaaaXaaaaaaaaaaaaaaaaXaaaaaaaaaaaaaaaaaaaaXaaaaaaX',
        ans: 3
      },
      {
        str1: 'aaaaaaaaaaaaaaaaaaaaaaabccccccbaaaaaaaaaaaaaaaaaaaa',
        str2: 'aaaaaaaaaaaaaaaaaaaaaaaaabccccccbaaaaaaaaaaaaaaaaaa',
        ans: 4
      },
      {
        str1: 'abc*efghijklm---nopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        str2: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLM+++NOPQRSTU*WXYZ',
        ans: 8
      }
    ];

    for (const test of testCase) {
      expect(LevenshteinDistance(test.str1, test.str2)).equal(test.ans);
    }
  });
});
