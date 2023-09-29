function solve(str, symbol, result) {

    let res = str.replace('_', symbol);

    let output = res ===
        result ? "Matched" : "Not Matched";

    console.log(output);

}