function BinarySearch(items, element) {
  const middleIndex = Math.floor(items.length / 2);

  // Base Case
  if (items.length === 1) {
    return items[0];
  }

  console.log(items[middleIndex], element);

  if (items[middleIndex] <= element) {
    return BinarySearch(items.splice(middleIndex, items.length - 1), element);
  }

  return BinarySearch(items.splice(0, middleIndex), element);
}

console.log(BinarySearch([1, 3, 5, 13, 25, 50], 25) === 25);
console.log(BinarySearch([1, 13, 35, 713, 3525, 26650], 26650) === 26650);
