function login(input) {

    let index = 0;
    let user = input[index];
    index++;

    let pass = input[index];
    index++;

    let counter = 0;

    let splittedUser = user.split(``);
    let reversedUser = splittedUser.reverse();
    let correctPass = reversedUser.join(``);

    while (true) {

        counter++;

        if (pass == correctPass) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            if (counter !== 4) {
                console.log(`Incorrect password. Try again.`);
            }
        }

        if (counter == 4) {
            console.log(`User ${user} blocked!`);
            break;
        }

        pass = input[index];
        index++
    }
}