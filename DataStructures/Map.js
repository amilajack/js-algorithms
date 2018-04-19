/**
 * A Map is used to map keys to values. It uses a hash function to compute
 * an index that maps to a value. Order of insertino is not guaranteed in hash
 * maps.
 *
 * TODO: Bucket collision detection and handling
 * @flow
 */
import Hash from './Hash';

function HashMap() {
  this.items = [];
  this.mapLength = 50;
}

HashMap.prototype.insert = function insert(key: any, value: any): HashMap {
  const generatedHashCode = Hash(key, this.mapLength);
  this.items[generatedHashCode] = value;
  return this;
};

HashMap.prototype.all = function all(): any[] {
  return this.items.filter((i: any): boolean => !!i);
};

/**
 * Search
 *
 * TODO:   Convert bucket type to array, loop through when accessing
 * @desc   Complexity: N/A, depends on strength of hash
 */
HashMap.prototype.get = function get(key: any): any {
  const generatedHashCode = Hash(key, this.mapLength);
  return this.items[generatedHashCode];
};

HashMap.prototype.remove = function remove(key: any): HashMap {
  const generatedHashCode = Hash(key, this.mapLength);
  this.items.splice(generatedHashCode, 1);
  return this;
};

export default HashMap;
