function ticketCinema(input){

    let day = input[0];
    let price = 1;


    if (day === "Monday"){
        price = price * 12;  
    } else if (day === "Tuesday"){
        price = price * 12;  
    } else if (day === "Wednesday"){
        price = price * 14;  
    } else if (day === "Thursday"){
        price = price * 14;  
    }  else if (day === "Friday"){
        price = price * 12;  
    } else if (day === "Saturday"){
        price = price * 16;  
    } else if (day === "Sunday"){
        price = price * 16;  
    } 
    console.log(price)
}


ticketCinema(["Sunday"])