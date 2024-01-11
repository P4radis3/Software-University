function calcWalkTime(steps, meterForEachStep, kilometersPerHour) {
    
    let distance = steps * meterForEachStep
    let decimalTime = distance / 1000 / kilometersPerHour
    let number = new Date(0, 0)
    
    number.setSeconds(decimalTime * 60 * 60 + 1)
    number.setMinutes(number.getMinutes() + Math.floor(distance / 500))

    return number.toTimeString().slice(0, 8)

}