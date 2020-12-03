// const map = (head, f) => (head ? new Node(f(head.data), map(head.next, f)) : head);

const map = (head, callback) => listToArray(head)
  .map(callback)
  .reduceRight((nextNode, node) => {
    node.next = nextNode;
    return node;
  }, null);

// const length = (head) => (head ? 1 + length(head.next) : 0);

const length = (head) => listToArray(head).length;

// const countIf = (head, callback) => (head ? callback(head.data) + countIf(head.next, callback) : 0);

const countIf = (head, callback) => listToArray(head)
  .filter(callback)
  .length;

const indexOf = (head, value) => listToArray(head).indexOf(value);

const lastIndexOf = (head, value) => listToArray(head).lastIndexOf(value);

const anyMatch = (head, callback) => (head
  ? callback(head.data) || anyMatch(head.next, callback)
  : false);
const allMatch = (head, callback) => (head
  ? callback(head.data) && allMatch(head.next, callback)
  : true);

const filter = (head, callback) => listToArray(head)
  .filter(callback)
  .map((data) => new Node(data))
  .reduceRight((nextNode, node) => {
    node.next = nextNode;
    return node;
  }, null);

const reduce = (head, callback, init) => listToArray(head).reduce(callback, init);

// const filter = (head, callback) => (head
//   ? callback(head.data)
//     ? new Node(head.data, filter(head.next, callback))
//     : filter(head.next, callback)
//   : null);

// const reduce = (head, callback, init) => (head ? reduce(head.next, callback, callback(init, head.data)) : init);

const listToArray = (head) => (head ? [head.data, ...listToArray(head.next)] : []);
