function carFactory({ model, power, color, carriage, wheelsize }) {

    let storageEngines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ]

    let getWheels = wheel => {
        let arr = [];
        arr.length = 4;
        return wheel % 2 === 0 ? arr.fill(wheel - 1) : arr.fill(wheel);
    }

    return {

        model,
        engine: storageEngines.reduce((accumulator, value) =>

            Math.abs(accumulator.power - power) < Math.abs(value.power - power) ? accumulator : value

        ),

        carriage: { type: carriage, color },
        wheels: getWheels(wheelsize),

    }
}