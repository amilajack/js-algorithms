// Convert a given number to a given base
export default function toBase(n, base) {
  if (n === 0) return [];
  const quotient = Math.floor(n / base);
  const remainder = n % base;
  const res = toBase(quotient, base);
  res.push(remainder);
  return res;
}
