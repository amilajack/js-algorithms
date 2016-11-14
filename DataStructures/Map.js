/**
 * A Map is used to map keys to values. It uses a hash function to compute
 * an index that maps to a value. Order of insertino is not guaranteed in hash
 * maps.
 *
 * TODO: Bucket collision detection and handling
 * @flow
 */
import { expect } from 'chai'
import Hash from './Hash'

function HashMap() {
  this.items = []
  this.mapLength = 50
}

HashMap.prototype.insert = function insert(key: any, value: any): HashMap {
  const generatedHashCode = Hash(key, this.mapLength)
  this.items[generatedHashCode] = value
  return this
}

HashMap.prototype.all = function all(): any[] {
  return this.items.filter((i: any): boolean => !!i)
}

/**
 * Search
 *
 * TODO:   Convert bucket type to array, loop through when accessing
 * @desc   Complexity: N/A, depends on strength of hash
 */
HashMap.prototype.get = function get(key: any): any {
  const generatedHashCode = Hash(key, this.mapLength)
  return this.items[generatedHashCode]
}

HashMap.prototype.remove = function remove(key: any): HashMap {
  const generatedHashCode = Hash(key, this.mapLength)
  this.items.splice(generatedHashCode, 1)
  return this
}

// Assert insert
const MapOne = new HashMap()

MapOne.insert('some_random_key', 'some')
const generatedHashCodeInsert = Hash('some_random_key', MapOne.mapLength)

expect(MapOne.items[generatedHashCodeInsert]).to.equal('some')
expect(MapOne.all()).to.eql(['some'])
MapOne.insert('moo', 'foo')
expect(MapOne.all()).to.eql(['some', 'foo'])
expect(MapOne.get('moo')).to.equal('foo')

// Assert remove
const MapTwo = new HashMap()

MapTwo.insert('some_random_key', 'some')
expect(MapTwo.get('some_random_key')).to.equal('some')

MapTwo.remove('some_random_key')
const generatedHashCodeDelete = Hash('some_random_key', MapTwo.mapLength)
expect(MapTwo.items[generatedHashCodeDelete]).to.equal(undefined)
