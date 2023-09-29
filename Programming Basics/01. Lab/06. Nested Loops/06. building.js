function building(input){

    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let floor = x; floor > 0; floor--){
        let string = "";
        for (let room = 0; room < y; room++){
            if(floor === x){
                string += `L${floor}${room} `;
            } else if (floor % 2 !== 0){
                string += `A${floor}${room} `;
            } else {
                string += `O${floor}${room} `;
            }
        }
        console.log(string);
    }
}

building((["6", "4"]))