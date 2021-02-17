const findOpposites = (array) => {
    const set = new Set(array)
    return array
        .filter((n) => n > 0 && set.has(-n))
        .sort((a, b) => a - b)
}