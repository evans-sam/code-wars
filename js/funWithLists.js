const map = (head, f) => (head ? new Node(f(head.data), map(head.next, f)) : head);

const length = (head) => (head ? 1 + length(head.next) : 0);
