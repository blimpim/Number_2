const totalPrice = ({ price, discount, isInstallment, months }) => {
    let finallPrice = price - ((price / 100) * discount);
    if (isInstallment) {
        return finallPrice / months;
    }
    return 0;
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);
export {};
//# sourceMappingURL=index.js.map