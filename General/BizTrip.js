// You are on a biz trip and travelling from one city to another. you have a stack of
// unsorted flight boarding passes. only departure city and destination
// city are on the boarding
// pass. how do you find the first departure city and your final destination
// city, write the solution in javascript

function bizTripSort(passes) {
  const map = new Map();
  for (const pass of passes) {
    map.set(pass.from, pass.to);
  }
  const toSet = new Set(map.values());
  const [start] = Array.from(map.entries()).find(([from]) => {
    return !toSet.has(from);
  });
  let curr = start;
  for (let i = 0; i < passes.length; i++) {
    curr = map.get(start);
  }
  return {
    start,
    end: curr
  };
}

console.log(
  bizTripSort([
    {
      from: 'IP',
      to: 'NA'
    },
    {
      from: 'CA',
      to: 'WA'
    },
    {
      from: 'BA',
      to: 'BO'
    },
    {
      from: 'WA',
      to: 'BA'
    }
  ])
);
