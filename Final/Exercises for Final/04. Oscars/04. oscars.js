function oscars(input) {

    let actorsName = input[0];
    let points = Number(input[1]);
    let n = Number(input[2]);

    for (let index = 3; index < input.length; index++) {

        let judgeName = input[index];
        index++;
        let judgePoints = Number(input[index]);

        let currentPoints = judgeName.length * judgePoints / 2;

        points += currentPoints;

        if (points > 1250.5) {
            console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }

    if (points <= 1250.5) {
        console.log(`Sorry, ${actorsName} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
