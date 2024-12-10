//Rodin M. S. 
//Var - 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//task 1 
function findMax(number) {
    if (concatNumbers.length == 0) {
        return null;
    }
    var max = Math.max.apply(Math, number);
    return max;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(findMax(arr));
var cort = [1, 2, 3];
function sum(cort) {
    return cort[0] + cort[1] + cort[2];
}
var _cort = [4, 5, 6];
console.log(sum(_cort));
//task 3
var Balls;
(function (Balls) {
    Balls["FOOTBALL"] = "\u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    Balls["BASKETBALL"] = "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    Balls["BASEBALL"] = "\u0411\u0435\u0439\u0441\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    Balls["VOLLEYBALL"] = "\u0412\u043E\u043B\u0435\u0439\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
})(Balls || (Balls = {}));
var ball = Balls.BASEBALL;
console.log(ball);
//task 4
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () { return "No speak. I am fish!"; };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () { return "Yaw-Gaw!"; };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () { return "Miyau!"; };
    return Cat;
}(Pet));
function printPet(pet) {
    console.log("Name: ".concat(pet.name));
    console.log("Age: ".concat(pet.age));
    console.log("Speak: ".concat(pet.speak()));
}
var dog = new Dog();
var cat = new Cat();
printPet(dog);
printPet(cat);
var _ball = {
    type: Balls.BASEBALL,
    weight: 145,
    material: "\u041A\u043E\u0436\u0430",
    color: "\u0411\u0435\u043B\u044B\u0439",
};
console.log(JSON.stringify(_ball));
