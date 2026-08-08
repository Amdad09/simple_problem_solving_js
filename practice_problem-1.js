// Task 1: calculateBill(amount, taxRate = 0.05) — Default Parameters
// Return the final bill after tax is applied. Default tax rate is 5% when not provided.
const calculateBill = (amount, taxRate = 0.05) => {
    return +(amount + amount * taxRate).toFixed(2);
};
// console.log(calculateBill(1000, .1));

// Task 2: buildProfileCard(user) — Template Literals
// Given { name, title, company }, return a multiline string using template literal interpolation only.

const buildProfileCard = (user) => {
    const { name, title, company } = user;
    return `${name}
${title} at ${company}
    `;
};
// console.log(
//     buildProfileCard({
//         name: 'Arif',
//         title: 'Developer',
//         company: 'Programming Hero',
//     }),
// );

// Task 3: getLowestPrice(prices) — Spread Operator
// Given an array of numbers, return the lowest price using Math.min combined with spread (no manual loop).
const getLowestPrice = (prices) => {
    return Math.min(...prices);
};
// console.log(getLowestPrice([340, 120, 560, 90]));

// Task 4: swapValues(a, b) — Destructuring
// Return [b, a] using array destructuring assignment, no temporary variable.
const swapValues = (a, b) => {
    [b, a] = [a, b];
    return [a, b];
};
// console.log(swapValues(5, 10));

// Task 5: getEmployeeDept(employee) — Nested Destructuring
// Given { name, job: { title, department } }, return { title, department } using nested destructuring.
const getEmployeeDept = (employee) => {
    const {
        name,
        job: { title, department },
    } = employee;
    return { name, title, department };
};
// console.log(
//     getEmployeeDept({
//         name: 'Nadia',
//         job: { title: 'PM', department: 'Product' },
//     }),
// );

// Task 6: promoteEmployee(employee, newTitle) — Spread + Immutable Update
// Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
const promoteEmployee = (employee, newTitle) => {
    return { ...employee, title: newTitle };
};
// console.log(
//     promoteEmployee({ name: 'Rafi', title: 'Junior Dev' }, 'Senior Dev'),
// );


// Task 7: sumAllPrices(prices) — for...of 
// Given an array of numbers, return their sum using for...of.
const sumAllPrices = (prices) => {
    let total = 0;
    for (const price of prices) {
        total += price;
    }
    return total;
};
// console.log(sumAllPrices([100, 250, 75]));


// Task 8: getManagerName(employee) — Optional Chaining 
// Given an employee object that may or may not have a manager property, return the manager's name safely, or undefined if missing.
const getManagerName = (employee) => {
    return employee?.manager?.name;
};
// console.log(getManagerName({ name: 'Tanvir' }));


// Task 9: splitFirstRest(arr) — Rest Syntax 
// Return { first, rest } where first is the first element and rest is an array of all remaining elements.
const splitFirstRest = (arr) => {
    const [ first, ...rest ] = arr;
    return { first, rest };
};
// console.log(splitFirstRest([10, 20, 30, 40]));


// Task 10:  cloneAndUpdate(arr, index, newValue) — Spread (Immutable Array 
// Update) Return a new array with the value at index replaced by newValue, without mutating the original array.
const cloneAndUpdate = (arr,index,newValue) => {
    // return arr.map((value, i) => i === index ? newValue : value);
    // return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    return arr.with(index, newValue);
};
// console.log(cloneAndUpdate([5, 10, 15], 1, 99));