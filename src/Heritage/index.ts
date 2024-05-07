class Animal {
    private name:string;

    constructor({ name }){
        this.name = name
    }

    greeting(){
        return `Name: ${this.name}`
    }
}

class Dog extends Animal { 
    constructor(){
        super({name:'DOG'})
    }
}
class Cat extends Animal {
    constructor(){
        super({name:'CAT'})
    }

    greeting(){
        return `THIS.method ${super.greeting()}`
    }
 }
class Horse extends Animal {
    constructor(){
        super({name:'HORSE'})
    }
    greeting(){
        return `SUPER.method ${super.greeting()}`
    }
}
class Pig extends Animal {
    constructor(){
        super({name:'HORSE'})
    }
    greeting(){
        return 'CLASS.method'
    }
}

const dog = new Dog()
const cat = new Cat()
const horse = new Horse()
const pig = new Pig()

console.log({
    dog: dog.greeting(),
    cat:cat.greeting(),
    horse:horse.greeting(),
    pig:pig.greeting()
})