function hashTags(text) {
    
    text = text.split(' ');
    let hash = new Set();
    text.forEach(word => {
        let isWordValid = word[0] == '#' && word.length > 1;
        
        if (isWordValid) {

            let letters = true;
            for (let index = 1; index < word.length; index++) {

                let char = word[index].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {

                    letters = false;
                    break;

                }
            }

            if (letters) {

                let hashTag = word.substring(1, word.length);
                hash.add(hashTag);

            }
        }
    }
    );

    hash.forEach(tag => { console.log(tag); });

}