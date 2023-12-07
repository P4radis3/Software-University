function sumFirstAndLast(array) {

    const first = array.shift();
    const last = array.pop();
    console.log((Number(first) + Number(last)));

}

sumFirstAndLast(['5', '10'])