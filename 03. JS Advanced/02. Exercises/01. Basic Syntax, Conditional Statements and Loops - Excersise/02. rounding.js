function rounding(number, precision){

    precision = Math.min(precision, 15);
    let toBeRounded = number.toFixed(precision);

    toBeRounded = parseFloat(toBeRounded);
    console.log(toBeRounded);

}


// rounding(3.1415926535897932384626433832795,2)
// rounding(10.5,3)



// function round(num, prec){
//     if (prec > 15){
//         prec = 15;
//     }

//     let fixed = num.toFixed(prec);
//     console.log(parseFloat(fixed));
// }