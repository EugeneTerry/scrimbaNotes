console.log('//////Loops//////')
console.log(' ')
const age = 8;

    if (age <= 12) {
    console.log('child');
} else if (age < 20 && age > 12){
        console.log ('teenager');
    } else {
        console.log('adult');
    }
 
const userType = 'idk';
switch (userType) {
    case 'shopper':
    console.log('Would you like to upgrade to a super shopper?');
    break;
    case 'super shopper':
    console.log('You are the best!!!');
    break;
    case 'guest':
    console.log('Would you like to upgrade to a shopper?');
    break;
    default:
    console.log('You will continue to be a guest');
}

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];
let total = 0;
//for (let i=0; i < cartItems.length; i++ ) {
//total +=cartItems[i].price * cartItems[i].quantity;
//}
for(const cartItem of cartItems) {
  total += cartItem.price * cartItem.quantity;
}
let tax = total * 0.08;
console.log(`Your sub-total is $${total}`)
console.log(`Your total with tax is $${total+tax}`)

// Challenge: Analytics

/*
 1. Track our user's activity.
 2. While the total updates is under 10 updates keep logging the update count.
 3. After we reach our threshold say, 'No longer tracking the user'.
 4. Change the logic to a do while with it updating just a single time. 
*/

let totalUpdates = 0;
do {
    totalUpdates ++;
    console.log(totalUpdates);
}
while(totalUpdates < 10);

console.log('No longer tracking the user.');
