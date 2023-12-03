function emojiDetector(input) {
    let string = input[0];
    let rgx = /(\::|\*\*)[A-Z][a-z]{2,}\1/g;
    let digitsRgx = /[0-9]+/g;

    let emojiArr = string.match(rgx);
    let digitsArr = string.match(digitsRgx).join("").split("").map(Number);
    let threshold = digitsArr.reduce((a, b) => a * b);
    let coolEmojis = [];

    emojiArr.forEach((emoji) => {
        let emojiChars = emoji.substring(2, emoji.length - 2).split("");
        let coolness = 0;
        emojiChars.forEach((char) => {
            coolness += char.charCodeAt();
        });
        if (coolness >= threshold) {
            coolEmojis.push(emoji);
        }
    });

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiArr.length} emojis found in the text. The cool ones are:`);

    if (coolEmojis.length > 0) {
        coolEmojis.forEach((emoji) => console.log(emoji));
    }
}