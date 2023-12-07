function reversedString(input) {

    const first = input.split('');
    const second = first.reverse();

    const third = second.join('');
    console.log(third);

}

reversedString(["Hello"])