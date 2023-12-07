function stringSubstring(words, text) {

    text = text.toLowerCase().split(' ');
    if (text.includes(words)) {
     
        console.log(words);
     
    } else {
     
        console.log(`${words} not found!`)
     
    }
}