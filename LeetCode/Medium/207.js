// https://leetcode.com/problems/course-schedule/

// There are a total of n courses you have to take, labeled from 0 to n-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const topsort = (numCourses, prereqs) => {
  const sortedOrder = [];
  // construct outdegree
  if (!prereqs.length) return true;

  const indegrees = new Array(numCourses);
  const graph = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
    indegrees[i] = 0;
  }
  for (const pair of prereqs) {
    const [a, b] = pair;
    // add outdegrees
    graph[b].push(a);
    indegrees[a]++;
  }
  // Find vertices with indeg 0
  const queue = [];
  for (let i = 0; i < indegrees.length; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }
  if (queue.length === 0) return false;
  while (queue.length) {
    const v = queue.shift();
    sortedOrder.push(v);
    for (const outgoing of graph[v]) {
      indegrees[outgoing]--;
      if (indegrees[outgoing] === 0) {
        queue.push(outgoing);
      }
    }
  }
  return sortedOrder.length === numCourses;
};

export default function canFinish(numCourses, prerequisites) {
  return topsort(numCourses, prerequisites);
}
