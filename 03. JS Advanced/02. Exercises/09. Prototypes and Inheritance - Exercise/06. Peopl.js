class Employee {
    constructor(name, age) {

        this.name = name;
        this.age = age;
        this.salary = 0;
        this.task = [];

    }

    work() {
        console.log(this.task[0]);
        this.task.push(this.task.shift());
    }

    collectSalary() {
        let totalSalary = this.salary // todo calc
        // add later log
    }

}

class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.task = [`add later`];

    }

    class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.task = [`add later`];
    }

}

class Manager extends Senior {
    constructor(name, age) {
        super(name, age);
        
    }
}

}