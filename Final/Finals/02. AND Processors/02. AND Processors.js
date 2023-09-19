function two(input){

    let CPU = Number(input[0]); 
    let workers = Number(input[1]);
    let days = Number(input[2]);
    let workingHours = workers * days * 8;

    let howManyCPU = Math.floor(workingHours / 3);

    if(howManyCPU < CPU){
        console.log(`Losses: -> ${((CPU - howManyCPU) * 110.10).toFixed(2)} BGN`);
    } else {
        console.log(`Profit: -> ${((howManyCPU - CPU) * 110.10).toFixed(2)} BGN`);
    }
}
