function vacationList(input) {

    let numberOfPages = Number(input[0]);
    let pagesHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursNeeded = numberOfPages / pagesHour
    let hoursDay = hoursNeeded / days


    console.log(hoursDay)

}
