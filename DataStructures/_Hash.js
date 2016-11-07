/**
 * Generate hash code
 * @param  {string} key
 * @return number
 */
function Hash(key, mapLength = 50) {
  return key.hashCode() % mapLength;
}

/**
 * Get the character code of a string
 * @return integer
 */
String.prototype.hashCode = function () {
  let
    hash = 5381,
    index = this.length;

  while (index) {
    hash = (hash * 33) ^ this.charCodeAt(--index);
  }

  return hash >>> 0;
};

module.exports = Hash;
