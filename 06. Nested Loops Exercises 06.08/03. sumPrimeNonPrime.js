function sumPrimeNonPrime(input){

    let index = 0;
    let prime = 0;
    let nonPrime = 0;

    let string = input[index];
    index++;

    while(string !== "stop"){
        let number = Number(string);

        if(number < 0){
            console.log("Number is negative.");
            string = input[index];
            index++;
            continue;
        }

        if(number === 1){
            prime += number;
            string = input[index];
            index++;
            continue;
        }

        let isPrimeNumber = true;

        for(let i = 2; i < number; i++){
            if(number % i === 0){
                isPrimeNumber = false;
                break;
                }
            }

            if(isPrimeNumber){ //Boolean flag is true.
                prime += number;
            } else {
                nonPrime += number;
            }

            string = input[index];
            index++;

        } 

        console.log(`Sum of all prime numbers is: ${prime}`);
        console.log(`Sum of all non prime numbers is: ${nonPrime}`);
    }

sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])
