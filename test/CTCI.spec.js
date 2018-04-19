import CheckHashAllUniqueChars from '../CTCI/ch1/1.1';

describe('CTCI', () => {
  describe('Ch. 1.1', () => {
    it('should assert that chars are unique', () => {
      expect(CheckHashAllUniqueChars('foo')).toEqual(false);
      expect(CheckHashAllUniqueChars('fo')).toEqual(true);
      expect(CheckHashAllUniqueChars('car')).toEqual(true);
    });
  });
});
