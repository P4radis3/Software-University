function solve(input){

    let result = {};

 
    for (let element of input) {
        if (element === 'Stop') {

            break;

        }
 
        if (element.includes("|")) {

            let [car, milage, fuel] = element.split("|");
            if (!result.hasOwnProperty(car)) {
                
                result[car] = [];

            }
 
            result[car].push(Number(milage));
            result[car].push(Number(fuel));

        } 
 
        if (element.includes(" : ")) {
            let tokens = element.split(" : ");
 
            if (element.includes("Refuel")) {
                let givenCar = tokens[1];
                let givenRefuel = Number(tokens[2]);
 
                if (result.hasOwnProperty(givenCar)) {
                    let sum = givenRefuel + result[givenCar][1];
 
                    if (sum > 75) {
                        result[givenCar][1] = 75;
                        sum -= 75;
                        console.log(`${givenCar} refueled with ${givenRefuel - sum} liters`);
                    } else {
                        result[givenCar][1] = sum;
                        console.log(`${givenCar} refueled with ${givenRefuel} liters`);
                    }
                }
            } else if (element.includes("Revert")) {
                let givenCar = tokens[1];
                let killometers = Number(tokens[2]);
 
                if (result.hasOwnProperty(givenCar)) {
                    
                    result[givenCar][0] -= killometers;
                    if (result[givenCar][0] < 10000) {

                        result[givenCar][0] = 10000;

                    } else {
                        
                        console.log(`${givenCar} mileage decreased by ${killometers} kilometers`);

                    }
                }
            } else if (element.includes("Drive")) {
                
                let givenCar = tokens[1];
                let distance = Number(tokens[2]);
                let givenFuel = Number(tokens[3]);
 
                if (result.hasOwnProperty(givenCar)) {

                    if (givenFuel <= result[givenCar][1]) {
                        
                        result[givenCar][1] -= givenFuel;
                        result[givenCar][0] += distance;
                        console.log(`${givenCar} driven for ${distance} kilometers. ${givenFuel} liters of fuel consumed.`);
                        
                    } else {
                        
                        console.log(`Not enough fuel to make that ride`);
                        
                    }
 
                    if (result[givenCar][0] >= 100000) {
                        
                        delete result[givenCar];
                        console.log(`Time to sell the ${givenCar}!`);

                    }
                }
            }
        }
    }
 
    let objectEntries = Object.entries(result);
    for (let [car, carInfo] of objectEntries) {
        
        console.log(`${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`);

    }
}