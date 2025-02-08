///////////////////////////////
// Task 1: Object Properties //
///////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Object Properties");

// initialize customer object
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

// initialize order object
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function(){
        console.log(`Order ID: ${this.orderId}, Total Amount: ${this.totalAmount}, Status: ${this.status}`);
    }
};

// invoke object function to display order details
order.displayOrder();

////////////////////////////////
// Task 3: Array Manipulation //
////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Array Manipulation");

// initialize cart array
let cartItems = ["Water", "Tea", "Coffee"];
console.log(`Initial Items in Cart: ${cartItems}`);

// push an item to end of cart
cartItems.push("Milk");
console.log(`Added Milk: ${cartItems}`);

// remove an item at end of cart
cartItems.pop();
console.log(`Got rid of milk: ${cartItems}`);

// add two items to front of cart
cartItems.unshift("Juice", "Wine");
console.log(`Added Juice & Wine: ${cartItems}`);

// remove item at front of cart
cartItems.shift();
console.log(`Final items in Cart: ${cartItems}`);

////////////////////////
// Task 4: Map Method //
////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Map Method");

// initialize price array
let prices = [100, 200, 300];
console.log("Initial Prices:", prices);

// use map() function to apply discount to each item in array
let discountPrices = prices.map(num => num * .90);
console.log("Applied 10% Discount:", discountPrices);

///////////////////////////
// Task 5: Filter Method //
///////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Filter Method");

// intialize inventory array
let inventory = [5, 0, 12, 8, 0];
console.log("Initial Inventory:", inventory);

// use filter() function to remove all zero quantity items
let inventoryLimit = inventory.filter(num => num > 0);
console.log("Removed Orders w/ Zero Stock:", inventoryLimit);

///////////////////////////
// Task 6: Reduce Method //
///////////////////////////

console.log("--------------------------------------");
console.log("Task 6: Reduce Method");

// initialize sales array
let sales = [500, 300, 200, 400];
console.log("Initial Sales:", sales);

// use reduce() function to add up all sales to calculate sum
let salesRevenue = sales.reduce((sum, sale) => sum + sale, 0);
console.log("Total Sales:", salesRevenue);

///////////////////////////
// Task 7: find() Method //
///////////////////////////

console.log("--------------------------------------");
console.log("Task 7: find() Method");

// initialize customer array
let customers = ["Alice", "Bob", "Charlie", "David"];
console.log("Initial Customers:", customers);

let searchName = "Charlie";

// use find() method to determine if search value is in array else not defined
let found = customers.find((element) => element == searchName);

console.log("Found Customer:", found);

/////////////////////////////
// Task 8: Tax Calculation //
/////////////////////////////

console.log("--------------------------------------");
console.log("Task 8: Tax Calculation");

// create function to calculateTax based on amount and taxrate
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

// create function to calculate discount price
// input parameters are": price and discount percentage (non-decimal)
const applyDiscount  = function(price, discountPercent) {
    return price - (price * discountPercent / 100);
};

// calculate the discount price
let discountedPrice = applyDiscount(896, 15);

console.log(`Initial Price: $896`)
console.log(`15% Discounted Price: $${discountedPrice}`);

 ////////////////////////////
// Task 10: Arrow Function //
/////////////////////////////

console.log("--------------------------------------");
console.log("Task 10: Arrow Function");

// Create function to calculate points based off of purchase amount
// Points are rounded down to nearest whole number
const calculatePoints = (totalPurchase) => Math.floor(totalPurchase * 0.1);

let purchase = 125;

// calculate points for purchase
let points = calculatePoints(purchase);
console.log(`Points Accumulated for purchase of $${purchase}: ${points} pts`);
