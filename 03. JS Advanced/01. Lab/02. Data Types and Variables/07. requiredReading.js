function reading(pages, pagesInAHour, days) {

    let pagesAsString = String(pages);
    let pagesHourString = String(pagesInAHour);
    let daysAsString = String(days);

    let totalTimeReadBook = pagesAsString / pagesHourString;
    let requiredHours = totalTimeReadBook / daysAsString;

    console.log(requiredHours);

}