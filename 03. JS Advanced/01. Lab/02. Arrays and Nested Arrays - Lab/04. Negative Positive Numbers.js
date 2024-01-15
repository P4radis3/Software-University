function negativePositiveNumber(array){

    return array.reduce((first, second) => {
        second < 0 ? first.unshift(second) : first.push(second)
        return first;
    }, [])
}