function mergeArrays(array, array2) {

    let array3 = array.map((el, i) => {

        return i % 2 === 0
            ? Number(el) + Number(array2[i])
            : el.concat(array2[i]);
    })

    console.log(array3.join(' - '));

}