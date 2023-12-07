function censoredWords(text, string) {

    let censored = '*'.repeat(string.length);
    let result = text;

    while (result.includes(string)){
        result = result.replace(string, censored);
    }

    console.log(result);

}