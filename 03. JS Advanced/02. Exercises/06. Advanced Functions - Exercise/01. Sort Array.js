function foo(array, result) {
    
    return result === "asc" ? array.sort((x, y) => x - y) : array.sort((x, y) => y - x)
    
}