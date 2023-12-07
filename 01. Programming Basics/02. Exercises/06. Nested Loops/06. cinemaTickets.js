function cinemaTickets(input){

    let index = 0;
    
    let string = input[index]; 
    index++

    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let totalTickets = 0; 

    while(string !== "Finish"){

        let filmName = string;

        let chairs = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        let counterTickets = 0;

            while(ticketType !== "End"){
                counterTickets++;

            switch(ticketType){
                case "student": studentTicket++; break;
                case "standard": standardTicket++; break;
                case "kid": kidTicket++; break;

            }
            if(counterTickets === chairs){
                break;
            }
            ticketType = input[index];
            index++;
        }

        totalTickets += counterTickets;
        let fullPercentage = counterTickets / chairs * 100;
        console.log(`${filmName} - ${fullPercentage.toFixed(2)}% full.`);

        string = input[index];
        index++;
    }

    let percentageStudentTickets = studentTicket / totalTickets * 100;
    let percentageStandardTickets = standardTicket / totalTickets * 100;
    let percentageKidTickets = kidTicket / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentageStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKidTickets.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi", 
"10",
"standard",
"kid",
"student", 
"student", 
"standard", 
"standard",
"End",
"Scary Movie", 
"6",
"student", 
"student", 
"student", 
"student", 
"student", 
"student", 
"Finish"])
