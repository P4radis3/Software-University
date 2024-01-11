function sameNumbers(number) {
   
    let numberAsString = number.toString();
    let sameDigits = numberAsString.split('').every(digit => digit === numberAsString[0]);
    let sumDigits = numberAsString.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);

    console.log(sameDigits);
    console.log(sumDigits);
    
}
