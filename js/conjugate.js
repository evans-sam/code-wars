const conjugate = (verb) => {
  const base = verb.slice(0, -2);
  const suffix = verb.slice(-2);
  const conjAr = ['o', 'as', 'a', 'amos', 'áis', 'an'];
  const conjEr = ['o', 'es', 'e', 'emos', 'éis', 'en'];
  const conjIr = ['o', 'es', 'e', 'imos', 'ís', 'en'];
  const dictionary = { ar: conjAr, er: conjEr, ir: conjIr };

  return { [verb]: dictionary[suffix].map((ending) => base + ending) };
};
