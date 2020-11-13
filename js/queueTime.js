const queueTime = (customers, n) => {
  const queue = [...customers];
  let tills = queue.splice(0, n);
  let time = 0;

  while (tills.find((till) => till > 0)) {
    tills = tills.map((till) => till - 1 || queue.shift());
    time += 1;
  }

  return time;
};
