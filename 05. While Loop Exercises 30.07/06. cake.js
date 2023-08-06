function cake(input){

    let length = Number(input[0]);
    let width = Number(input[1]);

    let size = length * width;
    let pieces = 0;
    let index = 2;

    let string = input[index];
    while(string !== "STOP"){
        let eatenCake = Number(string);

        pieces += eatenCake
        if(pieces > size){
            console.log(`No more cake left! You need ${pieces - size} pieces more.`);
            break;
        }
        index++;
        string = input[index];
    }
        if(pieces <= size){
            console.log(`${size - pieces} pieces are left.`);
        }
    }


    
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
