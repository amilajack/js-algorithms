export default function BFS(tree) {
  const queue = [];
  const items = [];
  if (tree && tree.value) queue.push(tree);
  while (queue.length) {
    const first = queue.shift();
    if (!first) return;
    items.push(first.value);
    if (first.left) queue.push(first.left);
    if (first.right) queue.push(first.right);
  }
  return items;
}
