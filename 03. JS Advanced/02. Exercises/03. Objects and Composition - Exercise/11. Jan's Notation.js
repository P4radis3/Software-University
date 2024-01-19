function jansNotation(array) {
    
    let result = [];
    let workArray = array.includes("error") ? array.slice(0, array.indexOf("error")) : array.slice();
    let operators = {
       
        "+": (x, y) => x + y,
        "-": (x, y) => y - x,
        "/": (x, y) => y / x,
        "*": (x, y) => x * y,
       
    }

    let updateArr = (arr, o) => {
       
        let temporary = arr.slice();
        temporary.push(operators[o](temporary.pop(), temporary.pop()));
        return temporary;
       
    }

    for (let index = 0; index < workArray.length; index += 1) {
        if (typeof workArray[index] === "number") {
           
            result.push(workArray[index]);
           
        } else {

            if (result.length < 2) {
            
                return `Error: not enough operands!`;
            
            }

            result = updateArr(result, workArray[index]);

        }
    }

    return result.length === 1 ? result[0] : `Error: too many operands!`;

}