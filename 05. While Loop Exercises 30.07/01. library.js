function library(input){    

    let favoriteBook = input[0];
    let index = 1;

    let isBookFound = false;

    let bookNames = input[index];
    while (bookNames !== "No More Books"){
        if (bookNames === favoriteBook){
            isBookFound = true;
                break;
        }
         index++;
         bookNames = input[index];
    }
        if (isBookFound === false){
            console.log("The book you search is not here!");
            console.log(`You checked ${index - 1} books.`);
        } else {
            console.log(`You checked ${index - 1} books and found it.`);
        }
}

library(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

