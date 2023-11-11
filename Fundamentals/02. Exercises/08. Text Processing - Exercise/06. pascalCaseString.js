function pascalCase(input) {
    
    const words = input.match(/[A-Z][a-z]*/g);
    const result = words.join(', ');

    console.log(result);

}