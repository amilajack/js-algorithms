// @flow
import { expect as chaiExpect } from 'chai';
import BinarySearchTree from '../DataStructures/BinarySearchTree';
import DoublyLinkedList from '../DataStructures/DoublyLinkedList';
import Hash from '../DataStructures/Hash';
import LinkedList from '../DataStructures/LinkedList';
import HashMap from '../DataStructures/Map';
import Queue from '../DataStructures/Queue';
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

    expect(queue.add('a')).toEqual(['a']);
    expect(queue.add('b')).toEqual(['a', 'b']);
    expect(queue.add('c')).toEqual(['a', 'b', 'c']);

    expect(queue.take()).toEqual('a');
    expect(queue.take()).toEqual('b');
    expect(queue.take()).toEqual('c');
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
