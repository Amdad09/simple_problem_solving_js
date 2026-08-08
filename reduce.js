const arr = [1, 2, 3, 4];
const result = arr.reduce((acc, cur) => {
    return acc + cur;
});
// console.log(result);

const cart = [
    { name: 'pen', price: 15, qty: 5 },
    { name: 'notebook', price: 15, qty: 4 },
];

const total = cart.reduce((accu, curr) => {
    accu.totalPrice += curr.price;
    return accu;
}, { totalPrice: 0 })
console.log(total);