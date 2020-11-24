// const parse = (commands) => {
//   const result = [];
//   let n = 0;
//   const command = {
//     i: () => n += 1,
//     d: () => n -= 1,
//     s: () => n *= n,
//     o: () => result.push(n),
//     defualt: () => n,
//   };

//   for (let i = 0; i < commands.length; i += 1) {
//     const func = command[commands[i]] || command.default;
//     func();
//   }

//   return result;
// }

// const parse = (commands) => {
//   const result = [];
//   let n = 0;
//   const ignore = () => n;
//   const parseCommand = {
//     i: () => n += 1,
//     d: () => n -= 1,
//     s: () => n *= n,
//     o: () => result.push(n),
//   };

//   for (const c of [...commands]) (parseCommand[c] || ignore)()

//   return result
// }

const parse = (commands) => {
  const parseCommand = {
    i: ({ result, n }) => ({ result, n: n + 1 }),
    d: ({ result, n }) => ({ result, n: n - 1 }),
    s: ({ result, n }) => ({ result, n: n * n }),
    o: ({ result, n }) => ({ result: [...result, n], n }),
    ignore: (acc) => acc,
  };
  const toDeadfish = (reducer, c) => (parseCommand[c] || parseCommand.ignore)(reducer);

  return [...commands].reduce(toDeadfish, { result: [], n: 0 }).result;
};
