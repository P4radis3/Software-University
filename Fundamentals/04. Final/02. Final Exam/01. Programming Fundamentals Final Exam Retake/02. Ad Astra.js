function adAstra(array) {

    let string = array.shift();
    let hold = [];

    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let rgx = pattern.exec(string);

    let total = 0;

    while (rgx) {

        hold.push({ item: rgx[2], day: rgx[3], cal: rgx[4] })
        total += Number(rgx[4])
        rgx = pattern.exec(string);

    }

    console.log(`You have food to last you for: ${Math.floor(total / 2000)} days!`);
    for (let index = 0; index < hold.length; index++) {

        console.log(`Item: ${hold[index].item}, Best before: ${hold[index].day}, Nutrition: ${hold[index].cal}`);

    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])