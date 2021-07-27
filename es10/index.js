let array = [1, 2, 3, [1,2,3, [1, 2, 3]]]

console.log(array.flat(2))

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value *2]))

let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart()) //elimina espacios del principio

let hello = 'hello world        ';
console.log(hello);
console.log(hello.trimEnd()); //elimina espacios del final

let entries = [ ["name", 'Oscar'], ['age', 32]];
console.log(Object.fromEntries(entries)); //convierte arreglos en objetos

let mySymbl = 'My Symbol'
let symbol = Symbol(mySymbl);
console.log(symbol.description);



