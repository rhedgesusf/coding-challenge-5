///////////////////////////////
// Task 1: Object Properties //
///////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Object Properties");

let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
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
    orderId: 12345,
    totalAmount: 150,
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

let inventory = [5, 0, 12, 8, 0];
console.log("Initial Inventory:", inventory);

let inventoryLimit = inventory.filter(num => num > 0);
console.log("Removed Orders w/ Zero Stock:", inventoryLimit);

///////////////////////////
// Task 6: Reduce Method //
///////////////////////////

console.log("--------------------------------------");
console.log("Task 6: Reduce Method");

let sales = [500, 300, 200, 400];
console.log("Initial Sales:", sales);

let salesRevenue = sales.reduce((sum, sale) => sum + sale, 0);
console.log("Total Sales:", salesRevenue);

///////////////////////////
// Task 7: find() Method //
///////////////////////////

console.log("--------------------------------------");
console.log("Task 7: find() Method");

let customers = ["Alice", "Bob", "Charlie", "David"];
console.log("Initial Customers:", customers);

let searchName = "Charlie";

let found = customers.find((element) => element == searchName);

console.log("Found Customer:", found);

/////////////////////////////
// Task 8: Tax Calculation //
/////////////////////////////

console.log("--------------------------------------");
console.log("Task 8: Tax Calculation");

function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
 let number = 100;
 let taxRate = .07;

 console.log(`For purchase of $${number} at 7% tax rate`);
 console.log(`Tax Amount: $${calculateTax(number, taxRate).toFixed(2)}`);

 ////////////////////////////////
// Task 9: Function Expression //
/////////////////////////////////

console.log("--------------------------------------");
console.log("Task 9: Function Expression");

const applyDiscount  = function(price, discountPercent) {
    return price - (price * discountPercent / 100);
};
let discountedPrice = applyDiscount(896, 15);
console.log(`Initial Price: $896`)
console.log(`15% Discounted Price: $${discountedPrice}`);

 ////////////////////////////
// Task 10: Arrow Function //
/////////////////////////////

console.log("--------------------------------------");
console.log("Task 9: Arrow Function");

// Create function to calculate points based off of purchase amount
// Points are rounded down to nearest whole number
const calculatePoints = (totalPurchase) => Math.floor(totalPurchase * 0.1);

let purchase = 125;

// calculate points for purchase
let points = calculatePoints(purchase);
console.log(`Points Accumulated for purchase of $${purchase}: ${points} pts`);
