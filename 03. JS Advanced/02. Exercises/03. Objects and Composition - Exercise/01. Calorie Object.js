function calorieObject(array) {
    
    return array.reduce((accumulator, value, index) => {
        if (index % 2 === 0) {
            
            accumulator[value] = Number(array[index + 1]);

        }

        return accumulator;

    }, {})
}