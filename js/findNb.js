const findNb = (m, n = 0) => (m === 0 ? n - 1 : m < 0 ? -1 : findNb(m - n ** 3, n + 1));
