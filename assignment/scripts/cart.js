console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// created basket and added item function
let basket = [];

function addItem(item) {
    basket.push( item ) // this adds a new item to the array
     console.log('items in my basket');
     return true;
  }

 // console.log tests
 console.log('basket is empty')