function aquarium(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height =  Number(input[2]);
    let occupied = Number(input[3]) / 100;
    
    let tank = length * width * height;
    let tankLiters = tank / 1000;
    let litersNeeded = tankLiters * (1 - occupied)

    console.log(litersNeeded)
}