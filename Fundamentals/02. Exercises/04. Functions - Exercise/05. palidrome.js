function palindrome(array){

    for (let number of array){
        let reverse = number.toString().split('').reverse().join('');
        console.log(number == reverse);
    }

}