function perviousDay(year, month, day) {

    let currentDate = new Date(year, month - 1, day);
    let previousDay = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

    let foundYear = previousDay.getFullYear();
    let foundMonth = previousDay.getMonth() + 1;
    let foundDay = previousDay.getDate();

    let formattedResult = `${foundYear}-${(foundMonth)}-${(foundDay)}`;
    console.log(formattedResult);
    
}
