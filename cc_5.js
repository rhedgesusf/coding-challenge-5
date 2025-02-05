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

////////////////////////////
// Task 2: Object Methods //
////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Object Methods");

let order = {
    orderId: 1212,
    totalAmount: 200,
    status: "Processing",
    displayOrder: function(){
        console.log(`Order ID: ${this.orderId}, Total Amount: ${this.totalAmount}, Status: ${this.status}`);
    }
};

order.displayOrder();

