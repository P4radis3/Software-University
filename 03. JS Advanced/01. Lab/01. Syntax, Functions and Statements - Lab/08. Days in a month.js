function getDaysInMonth(month, year) {

    let day = new Date(year, month, 0).getDate();
    return day;

}