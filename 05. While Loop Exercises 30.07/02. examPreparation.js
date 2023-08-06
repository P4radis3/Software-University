function examPreparation(input){

    let index = 1;
    let badGrades = 0;
    let goodGrades = 0;
    let sum = 0;
    let lastTask = "";
    let string = input[index];
    let takeBreak = true;
    let problems = 0;
    
    while(badGrades < input[0]){
        string = input[index];
            if(string === "Enough"){
                lastTask = input[index - 2];
                let average = (sum / (goodGrades + badGrades)).toFixed(2);
                console.log("Average score: " + average);
                console.log(`Number of problems: ${problems}`);
                console.log("Last problem: " + lastTask);
                takeBreak = false;
                break;
            }
                index++;
                let grades = Number(input[index]);

                if (grades > 4){
                    goodGrades++;
                    sum += grades;
                } else {
                    badGrades++;
                    sum += grades;

                    if(badGrades == input[0]){
                        console.log(`You need a break, ${badGrades} poor grades.`);
                        break;
                    }
                }
        problems++;
        index++;
    }
}