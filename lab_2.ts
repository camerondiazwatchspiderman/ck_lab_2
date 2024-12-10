//Rodin M. S. 
//Var - 1

//task 1 
function findMax(number: number[]): number | null {
    if (concatNumbers.length == 0) { return null; }
    const max : number = Math.max(...number);
    return max;
}

const arr: number[] = [1, 2, 3, 4, 5, 6];
console.log(findMax(arr));

//task 2
type CortType = [number, number, number];
const cort: CortType = [1, 2, 3];

function sum(cort: CortType): number {
    return cort[0] + cort[1] + cort[2];
}

const _cort: CortType = [4, 5, 6];
console.log(sum(_cort));

//task 3
enum Balls {
    FOOTBALL = "Футбольный мяч",
    BASKETBALL = "Баскетбольный мяч",
    BASEBALL = "Бейсбольный мяч",
    VOLLEYBALL = "Волейбольный мяч",
}

const ball: Balls = Balls.BASEBALL;
console.log(ball);

//task 4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() { return "No speak. I am fish!"; }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() { return "Yaw-Gaw!"; }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() { return "Miyau!"; }
}

function printPet<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
}

const dog: Pet = new Dog();
const cat: Pet = new Cat();
printPet(dog);
printPet(cat);

//task 5
interface Ball {
    type: Balls;
    weight: number;
    material: string;
    color: string;
}

const _ball: Ball = {
    type: Balls.BASEBALL,
    weight: 145,
    material: `Кожа`,
    color: `Белый`,
};

console.log(JSON.stringify(_ball));
