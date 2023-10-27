function cat(array) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {

            console.log(`${this.name}, age ${this.age} says Meow`);

        }
    }

    for (let index = 0; index < array.length; index++) {

        let data = array[index].split(' ');
        let name, age;
        [name, age] = [data[0], data[1]];
        
        let cat = new Cat(name, age);

        cat.meow();

    }
}