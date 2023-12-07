function countStringOccurrences(array, string) {

    let words = array.split(' ');
    let counter = 0;

    for (let characters of words){
        if (characters == string){
            counter++;
        }
    }

    console.log(counter);

}