const fs = require('fs');
const path = require('path');

// Path to your JSON file
const filePath = path.join(__dirname, 'products.json');

// Function to update products with variations
function updateProductsWithVariations() {
    // Read the JSON file
    const rawData = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(rawData);

    // Iterate through each product
    products.forEach(product => {
        if (product.variations && product.variations.length > 0) {
            // If variations array exists and has more than 0 items, set sale_price to 1000
            product.sale_price = 50;
        }
    });

    // Write the updated products back to the file
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf8');
    console.log('Products with variations have been updated with sale_price.');
}

// Call the function to update products
updateProductsWithVariations();
