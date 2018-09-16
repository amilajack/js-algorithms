/**
 * Calculate the resultant vector of a given series of component vectors
 * @flow
 */
type num = number;

type vector = {
  magnitude: num,
  direction: num
};

type result = {
  xMag: num,
  yMag: num,
  totalMag: num
};

export default function VectorCalculate(coords: vector[]): result {
  const x = coords.map(
    (e: vector): num => e.magnitude * Math.cos(radsToDegrees(e.direction))
  );
  const y = coords.map(
    (e: vector): num => e.magnitude * Math.sin(radsToDegrees(e.direction))
  );

  const xMag = sum(x);
  const yMag = sum(y);
  const totalMag = pythag(xMag, yMag);

  return { xMag, yMag, totalMag };
}

function pythag(x: num, y: num): num {
  return round(Math.sqrt(x ** 2 + y ** 2));
}

function sum(nums: num[]): num {
  return round(nums.reduce((p: num, c: num): num => p + c, 0));
}

function radsToDegrees(rad: num): num {
  return round((rad * Math.PI) / 180);
}

function round(number: num): num {
  return Math.round(number * 1000) / 1000;
}
