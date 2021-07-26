//object.entries
const data = {
    frontend: "Jose",
    backend: "Walter",
    desing: "Ana",
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//object.value
const data = {
    frontend: "Jose",
    backend: "Walter",
    desing: "Ana",
}

const values = Object.values(data);
console.log(values)
console.log(values.length)

//padding
const string = "hello";
console.log (string.padStart(7,"hi"));
console.log(string.padEnd(12," -----"))

const obj = {
    name: "jose",
}
//async await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ?setTimeout(() => resolve("Hello World"), 3000)
        :reject(new Error("Test Error"))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (error) {
        console.log(Error)
    }
}