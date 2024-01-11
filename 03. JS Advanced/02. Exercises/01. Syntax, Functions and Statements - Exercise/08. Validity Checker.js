function validatyChecker(x, y, x1, y1) {

    let valid = (x, y, x1, y1) => Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)) % 1 === 0;
    let pairs = [

        [x, y, 0, 0],
        [x1, y1, 0, 0],
        [x, y, x1, y1],

    ];

    let message = (a, b, c, d, validate) => `{${a}, ${b}} to {${c}, ${d}} is ${validate}`;
    pairs.forEach((x, i) => console.log(valid(...pairs[i]) ? message(...x, 'valid') : message(...x, 'invalid'))
        
    ) 
}