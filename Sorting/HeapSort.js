// @flow
import MaxHeap from '../DataStructures/MaxHeap';

export default function HeapSort(items: Array<number>) {
  const heap = new MaxHeap();
  const list = [];

  // Insert every element in the node into the heap. Calling
  // insert() will maxHeapify()
  items.forEach(item => {
    heap.insert(item);
  });

  // For every element in the heap, delete the max value.
  // Right after deletion, the MaxHeap will automatically propogate
  // the next highest value of the heap to the root
  heap.get().forEach(() => {
    // Delete the roo
    const node = heap.deleteNodeIndex(0);
    list.push(node);
  });

  return list.reverse();
}
