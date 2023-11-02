function movies(input) {
    let movies = [];
 
    input.forEach(list => {

        if (list.includes(`addMovie `)) {
            let name = list.split(`addMovie `)[1];
            movies.push({ name:name })

        }
        else if (list.includes(`directedBy`)) {

            let [name, director] = list.split(` directedBy `);
            let movie = movies.find(el => el.name === name);
            if (movie) {

                movie.director = director;

            }
        }

        else if (list.includes(`onDate`)) {

            let [name, date] = list.split(` onDate `);
            let movie = movies.find(element => element.name === name);
            if (movie) {

                movie.date = date;

            }
        }
    });
 
    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {

            console.log(JSON.stringify(movie))

        }
    })
}