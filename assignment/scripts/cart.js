console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// created basket and added item function
let basket = [];
const maxItems = 5; // stretch goal start

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

console.log('basket')

function addItem(item) {
    if (isFull() === true){
    console.log('Your basket is full! ❌');
    return false; 
    } else {
        basket.push( item ) // this adds a new item to the array
        return true;
    }
  }

 // console.log tests
 console.log('adding apples', addItem('apples')); 
 console.log('adding strawberries', addItem('strawberries')); // if correct it should be true
console.log ('adding lettuce', addItem('lettuce'));

// this is the listItems function

function listItems() {
    for (item of basket) {
        console.log(item);
    }
}
 
console.log(`My basket has ${basket}`); // this is to see if the items got listed correctly 

 
function empty() {
    basket = [];
}

function removeItem(item) {
    for (let i = 0; i < basket.length; i++) {
        if (basket.indexOf(item) === i) {
            basket.splice(i, 0);
            return item;
        } else {
            return null;
        }
    }
}
 
console.log(removeItem('apples'));
console.log(removeItem('watermelon'));


console.log('This will remove all the items in my basket', empty()); // this removes the items from the basket
console.log(`Basket is now ${basket}`); // you check to see if the items in your basket were emptied