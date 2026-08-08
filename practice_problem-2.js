// Task 1: getFormattedPrices(prices) — map() 
// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
const getFormattedPrices = (prices) => {
    return prices.map(price => `$${price}`);
};
// console.log(getFormattedPrices([100, 250, 75]));


// Task 2: getAvailableProducts(products) — filter() 
// Given an array of product objects { name, stock }, return only the products where stock is greater than 0.
const getAvailableProducts = (products) => {
    return products.filter(product => product.stock > 0);
};
// console.log(
//     getAvailableProducts([
//         { name: 'Pen', stock: 5 },
//         { name: 'Bag', stock: 0 },
//         { name: 'Notebook', stock: 2 },
//     ]),
// );


// Task 3: findProductByName(products, name) — find() 
// Given an array of product objects, return the first product matching the given name, or undefined if not found.
const findProductByName = (products, name) => {
    return products.find(product => product.name === name);
};
// console.log(
//     findProductByName(
//         [
//             { name: 'Pen', price: 10 },
//             { name: 'Bag', price: 500 },
//         ],
//         'Bag',
//     ),
// );


// Task 4: getTotalStockValue(products) — reduce() 
// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
const getTotalStockValue = (products) => {
    const a = products.reduce((accu, curr) => {
        console.log("Acuumulator: ",accu);
        console.log("Current: ", curr.price);
        console.log(accu+curr.price);
    },{price:0})
};
// getTotalStockValue([
//     { price: 50, stock: 4 },
//     { price: 20, stock: 10 },
// ]);


// Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce 
// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.
const getDiscountedTotalForCategory = (products, category) => {

};
// console.log(
//     getDiscountedTotalForCategory(
//         [
//             { name: 'Pen', category: 'stationery', price: 100 },
//             { name: 'Bag', category: 'accessory', price: 500 },
//             { name: 'Notebook', category: 'stationery', price: 60 },
//         ],
//         'stationery',
//     ),
// );




// Task 6: createIdGenerator() — Closures 
// Return a function that generates a new sequential ID starting from 1 each time it is called, using an internal counter with no global variable.
const createIdGenerator = () => {
    let count = 0;
    return function () {
        return ++count;
    }
};
const nextId = createIdGenerator();
// console.log(nextId());
// console.log(nextId());
// console.log(nextId());


// Task 7: sortByPriceAscending(products) — Callback Function 
// Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().
const sortByPriceAscending = (products) => {
    
};
console.log(
    sortByPriceAscending([
        { name: 'Bag', price: 500 },
        { name: 'Pen', price: 10 },
        { name: 'Notebook', price: 60 },
    ]),
);