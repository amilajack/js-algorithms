/**
 * A Map is used to map keys to values. It uses a hash function to compute
 * an index that maps to a value. Order of insertino is not guaranteed in hash
 * maps.
 *
 * TODO: Bucket collision detection and handling
 */
const Hash = require('./_Hash');
const expect = require('chai').expect;

function Map() {
  this.items = [];
  this.mapLength = 50;
}

/**
 * Insert
 * @desc   Complexity: O(1)
 * @param  {string} item
 * @return this
 */
Map.prototype.insert = function (key, value) {
  const generatedHashCode = Hash(key, this.mapLength);
  this.items[generatedHashCode] = value;
  return this;
};

Map.prototype.all = function () {
  return this.items.filter(i => !!i);
};

/**
 * Search
 *
 * TODO:   Convert bucket type to array, loop through when accessing
 *
 * @desc   Complexity: N/A, depends on strength of hash
 * @param  {string} item
 * @return mixed
 */
Map.prototype.get = function (key) {
  const generatedHashCode = Hash(key, this.mapLength);
  return this.items[generatedHashCode];
};

/**
 * Delete
 * @desc   Complexity: O(1)
 * @param  {string} item
 * @return this
 */
Map.prototype.delete = function (key) {
  const generatedHashCode = Hash(key, this.mapLength);
  this.items.splice([generatedHashCode], 1);
  return this;
};

// Assert insert
const Map_1 = new Map();

Map_1.insert('some_random_key', 'some');
const generatedHashCodeInsert = Hash('some_random_key', Map_1.mapLength);

expect(Map_1.items[generatedHashCodeInsert]).to.equal('some');
expect(Map_1.all()).to.eql(['some']);
Map_1.insert('moo', 'foo');
expect(Map_1.all()).to.eql(['some', 'foo']);
expect(Map_1.get('moo')).to.equal('foo');

// Assert delete
const Map_2 = new Map();

Map_2.insert('some_random_key', 'some');
expect(Map_2.get('some_random_key')).to.equal('some');

Map_2.delete('some_random_key');
generatedHashCodeDelete = Hash('some_random_key', Map_2.mapLength);
expect(Map_2.items[generatedHashCodeDelete]).to.equal(undefined);
