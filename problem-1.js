// Problem -01
const calculateTotal = (discount, ...prices) => {
    discount = discount ?? 5;
    const total = prices.reduce((sum, price) => sum + price, 0);
    return +(total * (1 - discount / 100)).toFixed(2);
};

// Problem- 02
const mergeArray = (arr1, arr2) => {
    const result = [...arr1, ...arr2];
    return [...new Set(result)]; //O(n)

    // const uniqueNumbers = [];
    // for (const num of result) {
    //     if (!uniqueNumbers.includes(num)) {
    //         uniqueNumbers.push(num);
    //     }
    // }
    // return uniqueNumbers; //O(n²)
};
// console.log(mergeArray([1, 2, 3], [2, 3, 4]));

const calculateShipping = (price, shippingFee = 60) => {
    return price >= 1000
        ? `Free shipping`
        : `Shipping fee: ${shippingFee} Taka`;
    // if (price >= 1000) {
    //     return `Free shipping`;
    // } else {
    //     return `Shipping fee: ${shippingFee} tk`
    // }
};

// console.log(calculateShipping(700,34));

const calculateGrade = (marks) => {
    if (!Number.isFinite(marks) || marks < 0 || marks > 100)
        return 'Invalid marks';

    if (marks >= 90) return 'A+';
    if (marks >= 80) return 'A';
    if (marks >= 60) return 'B';
    return 'Fail';

    // return marks >= 90 ? 'A+' : marks >= 80 ? 'A' : marks >= 60 ? 'B' : 'Fail';
};
// console.log(calculateGrade(100));

const getExtract = (obj) => {
    const { name: userName, age = 18 } = obj.user ?? {};
    return { userName, age };
};
// console.log(getExtract({}));

const swap = (first, second) => {
    const [a, b] = [second, first];
    return [a, b];
};
// console.log(swap(2, 3));

const divideValue = (nums) => {
    const [first, ...rest] = nums;
    return { first, rest };
};
// console.log(divideValue([1,2,3,4,5,6]));

const expensiveProduct = (products) => {
    // console.log(obj);
    let maxPrice = -Infinity;
    let productName = '';
    for (const [name, price] of Object.entries(products)) {
        // console.log(name, price);
        if (price > maxPrice) {
            maxPrice = price;
            productName = name;
        }
    }
    return productName;
};
// console.log(expensiveProduct({ pen: 20, book: 600, bug: 500 }));

const getGrade = (students) => {
    if (!Array.isArray(students)) return 'Input invalid';
    return students.map((student) => {
        let grade;
        const { mark } = student;

        if (!Number.isFinite(mark) || mark > 100 || mark < 0)
            return 'Invalid marks';

        if (mark >= 90) {
            grade = 'A+';
        } else if (mark >= 80) {
            grade = 'A';
        } else if (mark >= 60) {
            grade = 'B';
        } else {
            grade = 'Fail';
        }

        return { ...student, grade };
    });
};
// console.log(
//     getGrade([
//         { name: 'hamid', mark: 99 },
//         { name: 'kamal', mark: 88 },
//     ]),
// );

// const totalPrice = (products) => {
//     if (!Array.isArray(products)) return 'Invalid input!';

//     let itemPrice = 0;
//     let totalQty = 0;
//     const total = products.map((product) => {
//         const { name, price = 0, qty = 0 } = product;
//         totalQty += qty;
//         itemPrice += price * qty;
//     });
//     return `Total ${totalQty} items, ${itemPrice} Taka`;
// };
const totalPrice = (products) => {
    const { totalQty, totalPrice } = products.reduce(
        (acc, { price = 0, qty = 0 }) => {
            acc.totalQty += qty;
            acc.totalPrice += price * qty;
            return acc;
        },
        { totalQty: 0, totalPrice: 0 },
    );

    return `Total ${totalQty} items, ${totalPrice} Taka`;
};

// console.log(
//     totalPrice([
//         { name: 'pen', price: 15, qty: 5 },
//         { name: 'notebook', price: 15, qty: 4 },
//     ]),
// );

const city = 'Dhaka';
const city = 'hamid';
console.log(city);