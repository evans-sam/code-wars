export const flattenAndSort = (inputArray: number[][]): number[] => flatten(inputArray).sort();

const flatten = (array: any[]): any[] => array.reduce((a, b) => Array.isArray(b) ? [...a, ...flatten(b)] : [...a,  b], []);
