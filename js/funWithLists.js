const map = (head, f) => (head ? new Node(f(head.data), map(head.next, f)) : head);

const length = (head) => (head ? 1 + length(head.next) : 0);

const countIf = (head, callback) => (head ? callback(head.data) + countIf(head.next, callback) : 0);

const indexOf = (head, value, index = 0) => {
  if (!head) return -1;
  return head.data === value ? index : indexOf(head.next, value, index + 1);
};

const lastIndexOf = (head, value) => listToArray(head).lastIndexOf(value);

const listToArray = (head) => (head ? [head.data, ...listToArray(head.next)] : []);
