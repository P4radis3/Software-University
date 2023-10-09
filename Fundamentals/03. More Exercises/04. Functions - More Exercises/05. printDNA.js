function dnaPrint(number) {

    let string = "ATCGTTAGGG";
    let dnaCalculations = 0;

    for (let index = 0; index < number; index++) {

        if (index % 4 == 0) {

            console.log(`**${string[dnaCalculations % 10]}${string[(dnaCalculations % 10) + 1]}**`);

        } else if (index % 4 == 1) {

            console.log(`*${string[dnaCalculations % 10]}--${string[(dnaCalculations % 10) + 1]}*`);

        } else if (index % 4 == 2) {

            console.log(`${string[dnaCalculations % 10]}----${string[(dnaCalculations % 10) + 1]}`);

        } else if (index % 4 == 3) {

            console.log(`*${string[dnaCalculations % 10]}--${string[(dnaCalculations % 10) + 1]}*`);

        }

        dnaCalculations += 2;

    }
}