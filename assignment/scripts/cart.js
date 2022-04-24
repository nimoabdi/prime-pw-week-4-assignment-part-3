console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// created basket and added item function
let basket = [];

console.log('basket')

function addItem(item) {
    basket.push( item ) // this adds a new item to the array
     return true;
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

console.log('This will remove all the items in my basket', empty()); // this removes the items from the basket
console.log(`Basket is now ${basket}`); // you check to see if the items in your basket were emptied