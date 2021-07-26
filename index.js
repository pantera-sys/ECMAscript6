function newFunction(name, age, country){
    var name = name || "oscar";
    var age = age || 32;
    var country = country || "MX";
    console.log(name, age, country)
}

//es6
function newFunction2 (name = "oscar", age = 32, country="MX"){
    console.log(name, age, country);
};

newFunction2();
newFunction2("Ricardo", 24, "Col");

//concatenacion de strings
let hello = "Hello";
let world = "World";
let epicPrase = hello + " " + world;
let epicPrase2 = `${hello} ${world}` //es6
console.log(epicPrase);
console.log(epicPrase2);

//multilinea
let lorem = "Qui consequatur. commodi. ipsum vel duis yet minima\n" 
+ "otra frase epica"
//es6
let lorem2 = "otra frase epica que necesitamos\n ahora es otra frase epica"

console.log(lorem)
console.log(lorem2)

//destructuracion de elementos
let person = {
    "name" : "oscar",
    "age" : 32,
    "country" : "MX"
}
console.log(person.name, person.age);
//es6
let {name, age} = person;
console.log(name, age);

//elementos de propagacion
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let educacion = ["David", ...team1, ...team2];

console.log(educacion);

// let sirve para asignar de manera local
//var sirve para asignar de manera global

//parametros de objetos
let name = "Oscar";
let age = 32;
//es5
obj = {name: name, age: age}
//es6
obj2 = {name, age};
console.log(obj2);

//arrows functions
const name = [
    {name : "Jose", age : 17},
    {name : "Walter", age : 18}
]
let listOfNames = names.map (function(item){
    console.log(item.name);
})
//es6
let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name, age, country) => {
    //...
}
const square = num => num * num;
//promesas
const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve("Hey!");
        } else {
            reject ("Ups!!");
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))


class calculador {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + valueB;
    }
}

const cacl = new calculador();
console.log(calc.sum(2,2));
//import y export
import{hello} from "./module";

hello();
//generadores

function* helloWorld() {
    if (true){
        return "hello, ";
    }
    if (true){
        yield "world";
    }
};

const generatorhello = helloWorld();
console.log(generatorhello.next.value);
console.log(generatorhello.next.value);
console.log(generatorhello.next.value);
