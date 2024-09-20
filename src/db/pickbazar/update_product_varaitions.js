const fs = require('fs');
const path = require('path');

// Path to your JSON file
const filePath = path.join(__dirname, `products.json`);

// Define the new variations and variation_options
const newVariations = [
    {
        "id": 50,
        "attribute_id": 3,
        "value": "50",
        "attribute": {
            "id": 3,
            "slug": "available-in",
            "name": "Available In",
            "values": [
                { "id": 8, "attribute_id": 3, "value": "50" },
                { "id": 9, "attribute_id": 3, "value": "100" },
                { "id": 10, "attribute_id": 3, "value": "300" },
                { "id": 11, "attribute_id": 3, "value": "500" },
                { "id": 12, "attribute_id": 3, "value": "1000" },
                { "id": 13, "attribute_id": 3, "value": "2000" },
                { "id": 14, "attribute_id": 3, "value": "4000" },
                { "id": 15, "attribute_id": 3, "value": "10000" }
            ]
        }
    },
    {
        "id": 100,
        "attribute_id": 3,
        "value": "100",
        "attribute": {
            "id": 3,
            "slug": "available-in",
            "name": "Available In",
            "values": [
                { "id": 8, "attribute_id": 3, "value": "50" },
                { "id": 9, "attribute_id": 3, "value": "100" },
                { "id": 10, "attribute_id": 3, "value": "300" },
                { "id": 11, "attribute_id": 3, "value": "500" },
                { "id": 12, "attribute_id": 3, "value": "1000" },
                { "id": 13, "attribute_id": 3, "value": "2000" },
                { "id": 14, "attribute_id": 3, "value": "4000" },
                { "id": 15, "attribute_id": 3, "value": "10000" }
            ]
        }
    },
    {
        "id": 300,
        "attribute_id": 3,
        "value": "300",
        "attribute": {
            "id": 3,
            "slug": "available-in",
            "name": "Available In",
            "values": [
                { "id": 8, "attribute_id": 3, "value": "50" },
                { "id": 9, "attribute_id": 3, "value": "100" },
                { "id": 10, "attribute_id": 3, "value": "300" },
                { "id": 11, "attribute_id": 3, "value": "500" },
                { "id": 12, "attribute_id": 3, "value": "1000" },
                { "id": 13, "attribute_id": 3, "value": "2000" },
                { "id": 14, "attribute_id": 3, "value": "4000" },
                { "id": 15, "attribute_id": 3, "value": "10000" }
            ]
        }
    },
    {
        "id": 500,
        "attribute_id": 3,
        "value": "500",
        "attribute": {
            "id": 3,
            "slug": "available-in",
            "name": "Available In",
            "values": [
                { "id": 8, "attribute_id": 3, "value": "50" },
                { "id": 9, "attribute_id": 3, "value": "100" },
                { "id": 10, "attribute_id": 3, "value": "300" },
                { "id": 11, "attribute_id": 3, "value": "500" },
                { "id": 12, "attribute_id": 3, "value": "1000" },
                { "id": 13, "attribute_id": 3, "value": "2000" },
                { "id": 14, "attribute_id": 3, "value": "4000" },
                { "id": 15, "attribute_id": 3, "value": "10000" }
            ]
        }
    },
    {
        "id": 1000,
        "attribute_id": 3,
        "value": "1000",
        "attribute": {
            "id": 3,
            "slug": "available-in",
            "name": "Available In",
            "values": [
                { "id": 8, "attribute_id": 3, "value": "50" },
                { "id": 9, "attribute_id": 3, "value": "100" },
                { "id": 10, "attribute_id": 3, "value": "300" },
                { "id": 11, "attribute_id": 3, "value": "500" },
                { "id": 12, "attribute_id": 3, "value": "1000" },
                { "id": 13, "attribute_id": 3, "value": "2000" },
                { "id": 14, "attribute_id": 3, "value": "4000" },
                { "id": 15, "attribute_id": 3, "value": "10000" }
            ]
        }
    },
    {
        "id": 2000,
        "attribute_id": 3,
        "value": "2000",
        "attribute": {
            "id": 3,
            "slug": "available-in",
            "name": "Available In",
            "values": [
                { "id": 8, "attribute_id": 3, "value": "50" },
                { "id": 9, "attribute_id": 3, "value": "100" },
                { "id": 10, "attribute_id": 3, "value": "300" },
                { "id": 11, "attribute_id": 3, "value": "500" },
                { "id": 12, "attribute_id": 3, "value": "1000" },
                { "id": 13, "attribute_id": 3, "value": "2000" },
                { "id": 14, "attribute_id": 3, "value": "4000" },
                { "id": 15, "attribute_id": 3, "value": "10000" }
            ]
        }
    },
    {
        "id": 4000,
        "attribute_id": 3,
        "value": "4000",
        "attribute": {
            "id": 3,
            "slug": "available-in",
            "name": "Available In",
            "values": [
                { "id": 8, "attribute_id": 3, "value": "50" },
                { "id": 9, "attribute_id": 3, "value": "100" },
                { "id": 10, "attribute_id": 3, "value": "300" },
                { "id": 11, "attribute_id": 3, "value": "500" },
                { "id": 12, "attribute_id": 3, "value": "1000" },
                { "id": 13, "attribute_id": 3, "value": "2000" },
                { "id": 14, "attribute_id": 3, "value": "4000" },
                { "id": 15, "attribute_id": 3, "value": "10000" }
            ]
        }
    },
    {
        "id": 10000,
        "attribute_id": 3,
        "value": "10000",
        "attribute": {
            "id": 3,
            "slug": "available-in",
            "name": "Available In",
            "values": [
                { "id": 8, "attribute_id": 3, "value": "50" },
                { "id": 9, "attribute_id": 3, "value": "100" },
                { "id": 10, "attribute_id": 3, "value": "300" },
                { "id": 11, "attribute_id": 3, "value": "500" },
                { "id": 12, "attribute_id": 3, "value": "1000" },
                { "id": 13, "attribute_id": 3, "value": "2000" },
                { "id": 14, "attribute_id": 3, "value": "4000" },
                { "id": 15, "attribute_id": 3, "value": "10000" }
            ]
        }
    }
];

const newVariationOptions = [
    {
        "id": 247,
        "title": "50",
        "price": 50,
        "sale_price": null,
        "quantity": "100",
        "is_disable": 0,
        "sku": "200101",
        "options": [
            {
                "name": "Available In",
                "value": "50"
            }
        ]
    },
    {
        "id": 248,
        "title": "100",
        "price": 100,
        "sale_price": null,
        "quantity": "200",
        "is_disable": 0,
        "sku": "200102",
        "options": [
            {
                "name": "Available In",
                "value": "100"
            }
        ]
    },
    {
        "id": 249,
        "title": "300",
        "price": 300,
        "sale_price": null,
        "quantity": "50",
        "is_disable": 0,
        "sku": "200103",
        "options": [
            {
                "name": "Available In",
                "value": "300"
            }
        ]
    },
    {
        "id": 250,
        "title": "500",
        "price": 500,
        "sale_price": null,
        "quantity": "60",
        "is_disable": 0,
        "sku": "200104",
        "options": [
            {
                "name": "Available In",
                "value": "500"
            }
        ]
    },
    {
        "id": 251,
        "title": "1000",
        "price": 1000,
        "sale_price": null,
        "quantity": "70",
        "is_disable": 0,
        "sku": "200105",
        "options": [
            {
                "name": "Available In",
                "value": "1000"
            }
        ]
    },
    {
        "id": 252,
        "title": "2000",
        "price": 2000,
        "sale_price": null,
        "quantity": "80",
        "is_disable": 0,
        "sku": "200106",
        "options": [
            {
                "name": "Available In",
                "value": "2000"
            }
        ]
    },
    {
        "id": 253,
        "title": "4000",
        "price": 4000,
        "sale_price": null,
        "quantity": "90",
        "is_disable": 0,
        "sku": "200107",
        "options": [
            {
                "name": "Available In",
                "value": "4000"
            }
        ]
    },
    {
        "id": 254,
        "title": "10000",
        "price": 10000,
        "sale_price": null,
        "quantity": "100",
        "is_disable": 0,
        "sku": "200108",
        "options": [
            {
                "name": "Available In",
                "value": "10000"
            }
        ]
    }
];

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    let products;

    try {
        products = JSON.parse(data);
    } catch (parseError) {
        console.error('Error parsing the JSON data:', parseError);
        return;
    }

    // Update only products with "product_type": "variable"
    products = products.map(product => {
        if (product.product_type === 'variable') {
            product.variations = newVariations;
            product.variation_options = newVariationOptions;
        }
        return product;
    });

    // Write the updated data back to the JSON file
    fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf8', (writeErr) => {
        if (writeErr) {
            console.error('Error writing the file:', writeErr);
            return;
        }

        console.log('Successfully updated variations and variation_options for variable products in the JSON file.');
    });
});
