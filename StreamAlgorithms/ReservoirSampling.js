// Reservoir sampling is a family of randomized algorithms for randomly choosing a sample of k items from a list S containing
// n items, where n is either a very large or unknown number. Typically, n is too large to fit the whole list into main memory.

// Observations:
// This means we don't know what n is. If we did, we would randomly take k numbers from 0 to n and add them to our sample.

// See:
// https://en.wikipedia.org/wiki/Reservoir_sampling

/**
 * @param {number} k The sample size
 * @param {LinkedList<number>} list The list which we are taking the random samples of
 */
export default function ReservoirSampling(k, list) {
  // Add the first k items of the list to the reservoir
  const reservoir = [];
  for (let i = 0; i < k; i++) {
    reservoir.push(list.val);
    list = list.next;
  }
  while (list.hasNext()) {
    const j = Math.floor(k * Math.random());
    if (j < k) {
      const randReservoirIndex = reservoir[j];
      reservoir[randReservoirIndex] = list.val;
    }
    list = list.next;
  }
  return reservoir;
}
