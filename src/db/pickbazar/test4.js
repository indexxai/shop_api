const fs = require('fs');

// Load the products JSON file
let products = require('./products.json');

// Loop through the products and update the necessary fields
products = products.map(product => {
  if (product.name.startsWith('Birthday Card') || product.name.startsWith('Greeting Card')) {
    // Update min_price and max_price
    product.min_price = 50;
    product.max_price = 10000;
  }
  
  return product;
});

// Write the updated products back to the same products.json file
fs.writeFile('./products.json', JSON.stringify(products, null, 2), err => {
  if (err) {
    console.error('Error writing the updated file', err);
  } else {
    console.log('Products updated successfully');
  }
});
