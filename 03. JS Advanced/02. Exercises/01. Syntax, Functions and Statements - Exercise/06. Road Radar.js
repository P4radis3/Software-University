function roadRadar(speed, area) {

    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    let getStatus = number => {
        let status = {
            [number > 40]: 'reckless driving',
            [number > 20 && number <= 40]: 'excessive speeding',
            [number <= 20]: 'speeding',
        }

        return status['true']

    }

    let difference = speed - limits[area];
    return difference > 0 ? `The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - ${getStatus(difference)}` : `Driving ${speed} km/h in a ${limits[area]} zone`

}
