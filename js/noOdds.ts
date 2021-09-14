export function noOdds(values: number[]): number[] {
    return values.filter(value => value % 2 == 0);
}
