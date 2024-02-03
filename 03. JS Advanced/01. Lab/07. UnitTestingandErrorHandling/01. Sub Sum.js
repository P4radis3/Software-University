function subSum(array, start, end) {

    if (!Array.isArray(array)) {

        return NaN;

    }

    if (start < 0) {

        start = 0;

    }

    if (end >= array.length) {

        end = array.length - 1;

    }

    let sum = 0;
    for (let index = start; index <= end; index++){

        sum += Number(array[index]);

    }

    return sum;

}