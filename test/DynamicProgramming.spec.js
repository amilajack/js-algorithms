import Coins from '../DynamicProgramming/Coins';

describe('DynamicProgramming', () => {
  test('Coins', () => {
    expect(Coins(10)).toEqual(9);
  });
});
