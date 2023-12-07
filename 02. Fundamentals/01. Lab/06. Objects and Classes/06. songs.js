function songs(input){

    class Song {
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    
    let songs = [];
    let number = input.shift();
    let type = input.pop();

    for (let index = 0; index < number; index++){
        let [type, name, time] = input[index].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (type == 'all'){
        songs.forEach((index) => console.log(index.name));
    } else {
        let filter = songs.filter((index) => index.type == type);
        filter.forEach((index) => console.log(index.name));
    } 
}