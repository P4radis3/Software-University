function loadingBar(number) {

    let percentage = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);

    if (number === 100) {

        console.log(`${number}% Complete!`);
        console.log(`[${percentage}]`);

    } else {

        console.log(`${number}% [${percentage}${dots}]`);
        console.log(`Still loading...`);
        
    }
}