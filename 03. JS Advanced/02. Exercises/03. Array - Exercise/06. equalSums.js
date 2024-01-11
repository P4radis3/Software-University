function equalSums(array) {

    for (let index = 0; index < array.length; index++) {

        let left = array.slice(0, index).reduce((acc, num) => acc + num, 0);
        let right = array.slice(index + 1).reduce((acc, num) => acc + num, 0);

        if (left === right) {

            console.log(index);

        }
    }

    console.log("no");
}
