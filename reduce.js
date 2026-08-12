const products = [
    { name: 'Laptop', price: 1200, category: 'Electrics', stock: 6 },
    { name: 'Laptop', price: 1200, category: 'Electrics', stock: 6 },
    { name: 'Laptop', price: 1200, category: 'Clothing', stock: 6 },
    { name: 'Laptop', price: 1200, category: 'Clothing', stock: 6 },
    { name: 'Laptop', price: 1200, category: 'Clothing', stock: 8 },
];

const productPrice = (products) => {
    return products.reduce(
        ({ electronics, clothing }, { category, price, stock }) => {
            if (category === 'Electrics') {
                electronics += price * stock;
            } else {
                clothing += price * stock;
            }
            return { electronics, clothing };
        },
        { electronics: 0, clothing: 0 },
    );
};

console.log(productPrice(products));
