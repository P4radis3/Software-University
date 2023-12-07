function monthPrinter(days) {

    const calendar = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
    }

    if (days < 1 || days > 12 ){
        console.log("Error");
    } else {
        console.log(calendar[days]);
    }
}
