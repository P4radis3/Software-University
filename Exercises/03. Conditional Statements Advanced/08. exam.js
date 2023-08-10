function exam(input){

    let hoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExam = hoursExam * 60 + minExam;
    let timeArrive = hoursArrive * 60 + minArrive;

    let difference = Math.abs(timeExam - timeArrive);
    let hours = Math.floor(difference / 60);
    let minutes = difference % 60;;

    if (timeArrive < timeExam && (difference > 30)){
        console.log("Early");
        if(hours > 0){
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        } else {
            console.log(`${minutes} minutes before the start`);
        }

    } else if (timeArrive <= timeExam){
        console.log("On time");
        if (minutes > 0){
            console.log(`${minutes} minutes before the start`);
        }

    } else {
            console.log("Late");
        if (hours > 0){
            if (minutes < 10){
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            } 
        } else {
            console.log(`${minutes} minutes after the start`);
        }
    }
}

exam("11", "30", "10", "55")