function vacation(people, type, day) {

    let price = 0;

    switch (day) {

        case 'Friday':
            if (type == 'Students') {
                price = 8.45;
            }

            else if (type == 'Business') {
                price = 10.9;
            }

            else if (type == 'Regular') {
                price = 15;
            }
            break;

        case 'Saturday':
            if (type == 'Students') {
                price = 9.8;
            }

            else if (type == 'Business') {
                price = 15.6;
            }

            else if (type == 'Regular') {
                price = 20;
            }
            break;

        case 'Sunday':
            if (type == 'Students') {
                price = 10.46;
            }

            else if (type == 'Business') {
                price = 16;
            }

            else if (type == 'Regular') {
                price = 22.5;
            }
            break;
    }

    let totalPrice = people * price;

    if (type == 'Students' && people >= 30) {
        totalPrice *= 0.85;
    } else if (type == 'Business' && people >= 100){
        let discountPrice = 10 * price;
        totalPrice -= discountPrice;
    } else if (type == 'Regular' && (people >= 10 && people <= 20)){
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}