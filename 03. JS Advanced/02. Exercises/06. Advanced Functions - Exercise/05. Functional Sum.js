function functionalSum(added) {

    let sum = added;
    function calculate(nextAdded) {

        sum += nextAdded;
        return calculate;

    }

    calculate.toString = () => sum;
    return calculate; 

}