console.log('//////functions//////');
console.log(' ');

const add = (num01, num02) => {
    return num01 + num02;
}
console.log(add(12, 9));

function getUserCredentials(firstName, lastName, email) {
    return `${firstName} ${lastName} | ${email}`;
}
const userData = getUserCredentials('Eugene', 'Terry', 'eugene@email.com');

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

const getPreTaxTotal = (cartItems) => {
    let total = 0;
    for(let cartItem of cartItems) {
        total += cartItem.price * cartItem.quantity;
    }
    return total;
}


const preTaxTOT = getPreTaxTotal(cartItems)

const getTaxedTotal = (preTaxTOT) => {
    return (preTaxTOT * .08) + preTaxTOT;
}
const finalTaxedTotal = getTaxedTotal(preTaxTOT);
console.log(userData);
console.log(preTaxTOT);
console.log(finalTaxedTotal);