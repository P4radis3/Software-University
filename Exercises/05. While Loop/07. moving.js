function moving(input){

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let space = width * length * height;
    let index = 3;
    let string = input[index];

    while(string !== "Done"){

        let numberOfBoxes = Number(string);
        space -= numberOfBoxes;

        if(space < 0){
            console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
            break;
        }

        index++;
        string = input[index];
    }
        if(space >= 0){
            console.log(`${space} Cubic meters left.`);

    }
}