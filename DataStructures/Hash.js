/* eslint no-bitwise: 0 */
export default function Hash(key: string, mapLength: number = 50): number {
  return key.hashCode() % mapLength
}

/**
 * Get the character code of a string
 * @return integer
 */
export function hashCode(): number {
  let hash = 5381
  let index = this.length

  while (index) {
    hash = (hash * 33) ^ this.charCodeAt(--index)
  }

  return hash >>> 0
}
