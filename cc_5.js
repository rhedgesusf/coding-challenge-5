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

////////////////////////////////
// Task 3: Array Manipulation //
////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Array Manipulation");

let cartItems = ["Water", "Tea", "Coffee"];

console.log(`Initial Items in Cart: ${cartItems}`);

cartItems.push("Milk");
console.log(`Added Milk: ${cartItems}`);

cartItems.pop();
console.log(`Got rid of milk: ${cartItems}`);

cartItems.unshift("Juice", "Wine");
console.log(`Added Juice & Wine: ${cartItems}`);

cartItems.shift();
console.log(`Final items in Cart: ${cartItems}`);

////////////////////////
// Task 4: Map Method //
////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Map Method");

let prices = [100, 200, 300];
console.log("Initial Prices:", prices);

let discountPrices = prices.map(num => num * .90);
console.log("Applied 10% Discount:", discountPrices);

///////////////////////////
// Task 5: Filter Method //
///////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Filter Method");

let inventory = [12, 9 ,1, 0, 9, 21]
console.log("Initial Inventory:", inventory);

let inventoryLimit = inventory.filter(num => num > 0);
console.log("Removed Orders w/ Zero Stock:", inventoryLimit);



