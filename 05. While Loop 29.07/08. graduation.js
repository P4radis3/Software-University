function graduation(input){

    let index = 0;
    let name = input[index];
    index++

    let sumGrade = 0;
    let i = 1;

    let badGrade = 0;
    let hasBeenExcluded = false;

    while(i <= 12){
        let grade = Number(input[index]);
        index++;
    
        if(grade < 4.00){
            badGrade++;
                if(badGrade === 2){
                    console.log(`${name} has been excluded at ${i} grade`);
                    hasBeenExcluded = true;
                    break;
                }
                continue;
        }


        sumGrade += grade;
        i++;
    }
    if (!hasBeenExcluded){
        let avg = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }
}