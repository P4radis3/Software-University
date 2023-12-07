function rotateArray(array) {

    let rotations = + array[array.length - 1];

    array.pop();

    for (let index = 1; index <= rotations; index++) {

        let current = array.pop();
        array.unshift(current);    

    }

    return array.join(' ');

}

