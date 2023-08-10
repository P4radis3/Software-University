function ceremony(input) {

    let rent = Number(input[0])

    let statues = rent - (rent * 0.30);
    let catering = statues - (statues * 0.15);
    let sound = catering / 2;

    let fullPrice = rent + (statues + catering + sound);

    console.log(fullPrice.toFixed(2));
}

ceremony(["3500"])