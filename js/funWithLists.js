const map = (head, f) => (head ? new Node(f(head.data), map(head.next, f)) : head);

const length = (head) => (head ? 1 + length(head.next) : 0);

const countIf = (head, callback) => {
  return head ? callback(head.data) + countIf(head.next, callback) : 0;
};
