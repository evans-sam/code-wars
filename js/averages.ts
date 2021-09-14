
export function averages(numbers: number[] | null): number[] {
    let result: number[] = [];
    if (numbers == null || numbers.length <= 1) return result;
    for (let i = 0; i < numbers.length - 1; i++){
        result.push((numbers[i] + numbers[i + 1]) / 2);
    }

    return result;
}
