function greatestCommonDivisor(...argument) {

    let result = 1;
    for (let index = 2; index < 9; index++){

        result = argument.every(x => x % index === 0) ? index : result;

    }

    return result;
    
}