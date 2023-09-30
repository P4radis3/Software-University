function rotateArray(array, rotate) {

    for (let rotation = 1; rotation <= rotate; rotation++) {

        let element = array.shift();
        array.push(element);

    }

    console.log(array.join(' '));

}