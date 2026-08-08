const applyDiscountPrice = (price, discount) => {
    return +(price * (1 - discount / 100)).toFixed(2);
};
const applyDiscount = (prices, discount) => {
    return prices.map((price) => applyDiscountPrice(price, discount));
};
// console.log(applyDiscount([120, 345, 600], 10));

const getPassingStudnets = (students, threshold) => {
    return students.filter((student) => student.marks >= threshold);
};
// console.log(getPassingStudnets([{name:'Rafi', marks:99},{name:'Asif', marks:89},{name: 'Rahi', marks:58}], 80));

const findUserById = (users, id) => {
    return users.find((user) => user.id === id);
};
// console.log(
//     findUserById(
//         [
//             { id: 1, name: 'Rafi', marks: 99 },
//             { id: 2, name: 'Asif', marks: 89 },
//             { id: 3, name: 'Rahi', marks: 58 },
//         ],
//         2,
//     ),
// );

const getCartTotal = (cart) => {
    const { totalPrice } = cart.reduce(
        (accu, { price = 0, qty = 0 }) => {
            const { totalPrice, price, qty } = accu;
            totalPrice += price * qty;
            price = price;
            qty = qty;
            
            return accu;
        },
        { totalPrice: 0, price: 0, qty: 0 },
    );
};

console.log(
    getCartTotal([
        { name: 'pen', price: 15, qty: 5 },
        { name: 'notebook', price: 15, qty: 4 },
    ]),
);
