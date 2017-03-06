// @flow
export default function Hash(key: string, mapLength: number = 50): number {
  return hashCode(key) % mapLength;
}

/**
 * Get the character code of a string
 */
function hashCode(string: string): number {
  let hash = 5381;
  let index = string.length;

  while (index) {
    hash = (hash * 33) ^ string.charCodeAt(--index);
  }

  return hash >>> 0;
}
