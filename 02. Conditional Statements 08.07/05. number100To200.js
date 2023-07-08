function number100To200(input){

let saidNumber = Number(input[0]);

  if (saidNumber < 100){ 
    console.log("Less than 100");
} 
  else if (saidNumber >= 100 && saidNumber <= 200){
    console.log("Between 100 and 200"); 
}
  else if (saidNumber > 200)
    console.log ("Greater than 200"); 
}

number100To200(["100"]);