function genderAge(input){


    let age = Number(input[0]);
    let gender = input[1];


    if (age < 16){
        if (gender === "m"){
            console.log("Master");
        } else {
            console.log("Miss");
        }

    } else {
        if (gender === "f"){
            console.log("Ms.");
        } else {
            console.log("Mr.");
        }
    }
}
