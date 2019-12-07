import CheckHashAllUniqueChars from '../CTCI/ch1/1.1';
import TreeDepthLists from '../CTCI/ch4/4.3';

describe.skip('CTCI', () => {
  describe('Ch. 1.1', () => {
    it('should assert that chars are unique', () => {
      expect(CheckHashAllUniqueChars('foo')).toEqual(false);
      expect(CheckHashAllUniqueChars('fo')).toEqual(true);
      expect(CheckHashAllUniqueChars('car')).toEqual(true);
    });
  });

  describe('Ch. 4.3', () => {
    it('depth=listNumber', () => {
      const tree = new TreeDepthLists(0);
      tree.insert(3);
      tree.insert(5);

      // 0
      // \
      //  3
      //   \
      //    5

      expect(tree.listify()).toEqual([[0], [3], [5]]);

      tree.insert(-5);
      tree.insert(-3);

      //        0
      //      /  \
      //     -5    3
      //       \    \
      //        -3   5

      expect(tree.listify()).toEqual([[0], [-5, 3], [-3, 5]]);
    });
  });
});
