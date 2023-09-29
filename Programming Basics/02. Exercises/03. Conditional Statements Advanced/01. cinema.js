function cinema(input){
    
    let income = 0;
    let type = input[0];
    let rows = input[1];
    let columns = input[2];

    if (type === "Premiere"){
        income = rows * columns * 12.0;
    } else if (type === "Normal"){
        income = rows * columns * 7.50;
    } else if (type === "Discount"){
        income = rows * columns * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);
} 