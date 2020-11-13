const loop_size = (node) => {
  const visited = [];

  while (!visited.includes(node)) {
    visited.push(node);
    node = node.next;
  }
  return visited.length - visited.indexOf(node);
};

const loop_size = (node, visited = []) => visited.includes(node) ? visited.length - visited.indexOf(node) : loop_size(node.next, [...visited, node])