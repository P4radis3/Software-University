function histogram(input){

    let number = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1; i <= number; i++){

        let current = Number(input[i]);

        if(current < 200){
                p1++;
        } else if (current >= 200 && current <= 399){
                p2++;
        } else if (current >= 400 && current <= 599){
                p3++;
        } else if (current >= 600 && current <= 799){
                p4++;
        } else {
                p5++;
        }
    }

    console.log(`${(p1 / number * 100).toFixed(2)}%`);
    console.log(`${(p2 / number * 100).toFixed(2)}%`);
    console.log(`${(p3 / number * 100).toFixed(2)}%`);
    console.log(`${(p4 / number * 100).toFixed(2)}%`);
    console.log(`${(p5 / number * 100).toFixed(2)}%`);
}