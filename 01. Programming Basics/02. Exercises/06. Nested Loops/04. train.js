function trainTheTrainers(input){

    let index = 0;
    let number = Number(input[index]);
    index++;

    let string = input[index];
    index++;

    let sumGrade = 0;
    let counter = 0;

    while(string !== "Finish"){
        counter++;
        let presentation = string;
        let sumCurrentGrade = 0;

        for(let i = 0; i < number; i++){
            let grade = Number(input[index]);
            index++;

            sumCurrentGrade += grade;
        }

        let tempAvg = sumCurrentGrade / number;
        sumGrade += tempAvg;
        console.log(`${presentation} - ${tempAvg.toFixed(2)}.`);

        string = input[index];
        index++;
    }
        let avgGrade = sumGrade / counter;
        console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
    }

trainTheTrainers((["2",
"While-Loop", "6.00", "5.50",
"For-Loop", "5.84", "5.66",
"Finish"]))