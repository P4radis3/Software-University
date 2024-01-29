function add(num) {
    let numbers = num

    return function add(n) {
        
        return numbers + n

    }
}