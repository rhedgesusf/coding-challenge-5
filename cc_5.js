///////////////////////////////
// Task 1: Object Properties //
///////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Object Properties");

let customer = {
    name: "Mike Miller",
    age: 34,
    email: "mikeM@gmail.com"
};

// Print each property value in object and it's value
for (let property in customer) {
    console.log(`${property}: ${customer[property]}`)
}
