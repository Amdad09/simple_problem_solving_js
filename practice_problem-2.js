// Task 1: getFormattedPrices(prices) — map()
// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
const getFormattedPrices = (prices) => {
    return prices.map((price) => `$${price}`);
};
// console.log(getFormattedPrices([100, 250, 75]));

// Task 2: getAvailableProducts(products) — filter()
// Given an array of product objects { name, stock }, return only the products where stock is greater than 0.
const getAvailableProducts = (products) => {
    return products.filter((product) => product.stock > 0);
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
    return products.find((product) => product.name === name);
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

// Task 4: getresulttockValue(products) — reduce()
// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
const getresulttockValue = (products) => {
    const result = products.reduce(
        ({ totalPrice, resulttock }, { price = 0, stock = 0 }) => {
            totalPrice += price * stock;
            resulttock += stock;
            return { resulttock, totalPrice };
        },
        { totalPrice: 0, resulttock: 0 },
    );
    return result;
};
// console.log(getresulttockValue([
//     { price: 50, stock: 4 },
//     { price: 20, stock: 10 },
// ]));

// Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce
// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.
const getDiscountedTotalForCategory = (products, category) => {
    const discountProducts = products
        .map((product) => ({
            ...product,
            price: product.price * 0.9,
        }))
        .filter((product) => product.category === category)
        .reduce(
            ({ totalPrice }, { price }) => {
                totalPrice += price;
                return { totalPrice };
            },
            { totalPrice: 0 },
        );
    // .reduce((accu, { price }) => {
    //     const result = accu.price + price;
    //     return { totalPrcie: result };
    // });
    return discountProducts;
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
    };
};
const nextId = createIdGenerator();
// console.log(nextId());
// console.log(nextId());
// console.log(nextId());

// Task 7: sortByPriceAscending(products) — Callback Function
// Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().
const sortByPriceAscending = (products) => {
    return [...products].sort((a, b) => a.price - b.price);
};
// console.log(
//     sortByPriceAscending([
//         { name: 'Bag', price: 500 },
//         { name: 'Pen', price: 10 },
//         { name: 'Notebook', price: 60 },
//     ]),
// );

// Task 8: applyBonusPoints(users, bonus) — Pass by Reference vs Value
// Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.
const applyBonusPoints = (users, bonus) => {
    return users.map((user) => ({
        ...user, points: user.points + bonus
    }));
};
// console.log(applyBonusPoints([{ name: 'Rafi', points: 20 }], 5));


// Task 9: isStrictMatch(input, target) — Truthy/Falsy and === 
// Return true only if input strictly equals target in both value and type, false otherwise.
const isStrictMatch = (input, target) => {
    return input === target ? true : false;
};
// console.log(isStrictMatch({}, {}));


// Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style) 
// Given an array of orders { product, unitsSold }, 
// return the name of the product with the highest total units sold across all orders (a product may appear in multiple orders).
const getTopSellingProduct = (orders) => {
    const result = orders.reduce((accu, { product, unitsSold }) => {
        accu[product] = (accu[product] || 0) + unitsSold;
        return accu;
    }, {})
    // return result;
    let topProduct = '';
    let maxUnits = 0;

    for (const product in result) {
        if (result[product] > maxUnits) {
            maxUnits = result[product];
            topProduct = product;
        }
    }

    return topProduct;
};
console.log(getTopSellingProduct([{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }] 
));