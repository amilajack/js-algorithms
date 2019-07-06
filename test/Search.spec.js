import QuickSelect from '../Search/QuickSelect';
import BinarySearchRecursive, {
  BinarySearchIterative
} from '../Search/BinarySearch';
import BFS from '../Search/BreadthFirstSearch';

describe('Search', () => {
  test('BFS()', () => {
    const tree = {
      value: 10,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: {
        value: 30,
        left: null,
        right: null
      }
    };
    expect(BFS(tree)).toEqual([10, 3, 30]);
  });

  test('QuickSelect()', () => {
    expect(QuickSelect([5, 9, 3, 1, 7], 3)).toEqual(5);
    expect(QuickSelect([52, 55, 102, 5, -7, 8, 13, 7], 1)).toEqual(-7);
    expect(
      QuickSelect([6, 2, -12, 32, 79, 67, 8, 1, 15, -6, 78, 104], 12)
    ).toEqual(104);
    expect(
      QuickSelect([4, -1, 0, 36, -6, -4, 6, 52, 105, 232, 1, 69], 4)
    ).toEqual(0);
  });

  test('BinarySearchRecursive()', () => {
    expect(BinarySearchRecursive([1, 3, 5, 13, 25, 50], 25)).toEqual(25);
    expect(BinarySearchRecursive([1, 13, 35, 713, 3525, 26650], 26650)).toEqual(
      26650
    );
    expect(BinarySearchIterative([1], 1)).toEqual(0);
    expect(BinarySearchIterative([1, 2], 2)).toEqual(1);
    expect(BinarySearchIterative([1, 3, 5, 13, 25, 50], 25)).toEqual(4);
    expect(BinarySearchIterative([1, 13, 35, 713, 3525, 26650], 26650)).toEqual(
      5
    );
    expect(BinarySearchIterative([1, 2, 3, 4, 5], 1)).toEqual(0);
    expect(BinarySearchIterative([1, 2, 3, 5], 4)).toEqual(-1);
    expect(BinarySearchIterative([1, 2, 3, 4, 5], 6)).toEqual(-1);
    expect(BinarySearchIterative([1, 2, 3, 4, 5], 0)).toEqual(-1);
  });
});
