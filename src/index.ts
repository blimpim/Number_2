interface ICalc {
    price: number
    discount: number
    isInstallment: boolean
    months: number
  }

const totalPrice = ({ price, discount, isInstallment, months }: ICalc) => {
    let finallPrice = price - ((price / 100) * discount)
    if (isInstallment) {
        return finallPrice / months
    } return 0
};



const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250 