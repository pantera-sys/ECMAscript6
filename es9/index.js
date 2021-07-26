const obj  = {
    name: "jose",
    age : 17,
    country : "EC"
};

let {name, ...all} = obj;
console.log(all);

const obj = {
    name: "jose",
    age : 17,
}
const obj1 = {
    ...obj,
    country : "EC",
}


console.log(obj1)


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ?resolve("Hello World")
        : reject(new Error("Test Error"))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizo"))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = ragexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)