const fs = require('fs');

// Load the products JSON file
let products = require('./products.json');

// Define the variations to be added
const variations = [
  {
    id: 50,
    attribute_id: 3,
    value: "50",
    attribute: {
      id: 3,
      slug: "available-in",
      name: "Available In",
      values: [
        { id: 8, attribute_id: 3, value: "12oz" },
        { id: 9, attribute_id: 3, value: "24oz" },
        { id: 10, attribute_id: 3, value: "36oz" }
      ]
    }
  },
  {
    id: 100,
    attribute_id: 3,
    value: "100",
    attribute: {
      id: 3,
      slug: "available-in",
      name: "Available In",
      values: [
        { id: 8, attribute_id: 3, value: "12oz" },
        { id: 9, attribute_id: 3, value: "24oz" },
        { id: 10, attribute_id: 3, value: "36oz" }
      ]
    }
  },
  {
    id: 300,
    attribute_id: 3,
    value: "300",
    attribute: {
      id: 3,
      slug: "available-in",
      name: "Available In",
      values: [
        { id: 8, attribute_id: 3, value: "12oz" },
        { id: 9, attribute_id: 3, value: "24oz" },
        { id: 10, attribute_id: 3, value: "36oz" }
      ]
    }
  },
  {
    id: 500,
    attribute_id: 3,
    value: "500",
    attribute: {
      id: 3,
      slug: "available-in",
      name: "Available In",
      values: [
        { id: 8, attribute_id: 3, value: "12oz" },
        { id: 9, attribute_id: 3, value: "24oz" },
        { id: 10, attribute_id: 3, value: "36oz" }
      ]
    }
  },
  {
    id: 1000,
    attribute_id: 3,
    value: "1000",
    attribute: {
      id: 3,
      slug: "available-in",
      name: "Available In",
      values: [
        { id: 8, attribute_id: 3, value: "12oz" },
        { id: 9, attribute_id: 3, value: "24oz" },
        { id: 10, attribute_id: 3, value: "36oz" }
      ]
    }
  },
  {
    id: 2000,
    attribute_id: 3,
    value: "2000",
    attribute: {
      id: 3,
      slug: "available-in",
      name: "Available In",
      values: [
        { id: 8, attribute_id: 3, value: "12oz" },
        { id: 9, attribute_id: 3, value: "24oz" },
        { id: 10, attribute_id: 3, value: "36oz" }
      ]
    }
  },
  {
    id: 4000,
    attribute_id: 3,
    value: "4000",
    attribute: {
      id: 3,
      slug: "available-in",
      name: "Available In",
      values: [
        { id: 8, attribute_id: 3, value: "12oz" },
        { id: 9, attribute_id: 3, value: "24oz" },
        { id: 10, attribute_id: 3, value: "36oz" }
      ]
    }
  },
  {
    id: 10000,
    attribute_id: 3,
    value: "10000",
    attribute: {
      id: 3,
      slug: "available-in",
      name: "Available In",
      values: [
        { id: 8, attribute_id: 3, value: "12oz" },
        { id: 9, attribute_id: 3, value: "24oz" },
        { id: 10, attribute_id: 3, value: "36oz" }
      ]
    }
  }
];

// Loop through the products and update the necessary fields
products = products.map(product => {
  if (product.name.startsWith('Birthday Card') || product.name.startsWith('Greeting Card')) {
    // Update product_type to "variable"
    product.product_type = 'variable';

    // Add variations
    product.variations = variations;
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
