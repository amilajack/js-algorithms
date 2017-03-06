// http://stackoverflow.com/questions/19779438/dom-tree-traversal
//
// Given a node from a DOM tree find the node in the same position
// from an identical DOM tree. See diagram below for clarity.
// find the root and on the way, create breadcrumbs by marking the left

/* eslint-disable */

function TreeNode() {
  this.parent = {};
  this.children = [];
}

function FindRoot(node, TreeB) {
  let parent = node;
  const breadCrumbs: Array<number> = [];

  // Find root
  while (node.parent) {
    const index = parent.children.indexOf(node);
    breadCrumbs.push(index);
    parent = node.parent;
  }

  let found = TreeB.root;

  for (let i = breadCrumbs.length; i > -1; i--) {
    found = found[breadCrumbs[i]];
  }

  return found;
}
