const map = (head, f) => (head ? new Node(f(head.data), map(head.next, f)) : head);
