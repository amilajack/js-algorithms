// @flow
import { expect as chaiExpect } from 'chai';
import BinarySearchTree from '../DataStructures/BinarySearchTree';
import DoublyLinkedList from '../DataStructures/DoublyLinkedList';
import Hash from '../DataStructures/Hash';
import LinkedList from '../DataStructures/LinkedList';
import MaxHeap from '../DataStructures/MaxHeap';
import HashMap from '../DataStructures/Map';
import Queue from '../DataStructures/Queue';
import DAG from '../DataStructures/DAG';
import HashSet from '../DataStructures/Set';
import Stack from '../DataStructures/Stack';
import Tree from '../DataStructures/Tree';

describe('DataStructures', () => {
  test('BinarySearchTree', () => {
    const bTree = new BinarySearchTree([10, 2, 8, 9, 3]);
    bTree.add(11);
    bTree.toArray();
    expect(bTree.items).toEqual([2, 3, 8, 9, 10, 11]);

    const bTreeTwo = new BinarySearchTree([]);
    bTree.toArray();
    expect(bTreeTwo.items).toEqual([]);
  });

  test('DoublyLinkedList', () => {
    const linkedList = new DoublyLinkedList();
    linkedList.insert('soo');
    linkedList.insert('doo');

    expect(linkedList.head.data).toEqual({});
    expect(linkedList.head.next.data).toEqual('doo');
    expect(linkedList.head.next.next.data).toEqual('soo');
  });

  test('Hash', () => {
    chaiExpect(Hash('133')).to.be.a('number');
  });

  test('LinkedList', () => {
    const linkedList = new LinkedList();
    linkedList.insert('soo');
    linkedList.insert('doo');

    expect(linkedList.head.data).toEqual({});
    expect(linkedList.head.next.data).toEqual('doo');
    expect(linkedList.head.next.next.data).toEqual('soo');
  });

  test('MaxHeap', () => {
    const maxHeap = new MaxHeap();

    maxHeap.insert(10);
    maxHeap.insert(20);
    maxHeap.insert(30);
    expect(maxHeap.get()).toEqual([30, 20, 10]);

    // Max heaps can allow duplicates
    maxHeap.insert(30);
    expect(maxHeap.get()).toEqual([30, 30, 10, 20]);

    // Remove item
    maxHeap.delete(30);
    expect(maxHeap.get()).toEqual([30, 20, 10]);

    const maxHeap2 = new MaxHeap([13, 2, 4, 16, 73, 744]);
    expect(maxHeap2.get()).toEqual([744, 73, 16, 4, 2, 13]);
  });

  test('Map', () => {
    const MapOne = new HashMap();

    MapOne.insert('some_random_key', 'some');
    const generatedHashCodeInsert = Hash('some_random_key', MapOne.mapLength);

    expect(MapOne.items[generatedHashCodeInsert]).toEqual('some');
    expect(MapOne.all()).toEqual(['some']);
    MapOne.insert('moo', 'foo');
    expect(MapOne.all()).toEqual(['some', 'foo']);
    expect(MapOne.get('moo')).toEqual('foo');

    // Assert remove
    const MapTwo = new HashMap();

    MapTwo.insert('some_random_key', 'some');
    expect(MapTwo.get('some_random_key')).toEqual('some');

    MapTwo.remove('some_random_key');
    const generatedHashCodeDelete = Hash('some_random_key', MapTwo.mapLength);
    expect(MapTwo.items[generatedHashCodeDelete]).toEqual(undefined);
  });

  test('Set', () => {
    // Assert insert
    const hashSet = new HashSet();

    hashSet.add('some');
    expect(hashSet.all()).toEqual(['some']);
    hashSet.add('who');
    expect(hashSet.all()).toEqual(['some', 'who']);
    hashSet.remove('who');
    expect(hashSet.all()).toEqual(['some']);
  });

  test('Queue()', () => {
    const queue = new Queue();

    expect(queue.push('a')).toEqual(['a']);
    expect(queue.push('b')).toEqual(['a', 'b']);
    expect(queue.push('c')).toEqual(['a', 'b', 'c']);
    expect(queue.size()).toEqual(3);

    expect(queue.pop()).toEqual('a');
    expect(queue.pop()).toEqual('b');
    expect(queue.pop()).toEqual('c');
    expect(queue.size()).toEqual(0);
  });

  test('DAG', () => {
    const dag = new DAG();
    dag.insert({ weight: 3, id: 0, children: [] });
    dag.insert({ weight: 3, id: 1, children: [] });
    dag.insert({
      weight: 3,
      id: 2,
      parents: [0],
      children: [],
      data: { foo: 'cow' }
    });

    expect(dag.breadthFirstSearch({ id: 2 })).toEqual({
      children: [],
      id: 2,
      parents: [0],
      weight: 3,
      data: { foo: 'cow' }
    });
    expect(dag.breadthFirstSearch({ id: 21 })).toEqual(false);
  });

  test('Stack', () => {
    const stack = new Stack(['a', 'b', 'c']);
    expect(stack.push('d').items).toEqual(['a', 'b', 'c', 'd']);
    stack.pop();
    expect(stack.items).toEqual(['a', 'b', 'c']);
  });

  test('Tree', () => {
    const soo = new Tree();
    const doo = soo.add(soo.root, 'value');
    soo.add(doo, 'no');
  });
});
