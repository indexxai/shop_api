const fs = require('fs');
const path = require('path');

// Path to your JSON file
const filePath = path.join(__dirname, 'products.json');

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

    // Initialize card number counter
    let cardNumber = 1;

    // Update only products where the 'name' starts with "Birthday Card"
    products = products.map(product => {
        if (product.name && product.name.startsWith('Birthday Card')) {
            // Update the product name and slug
            product.name = `Birthday Card ${cardNumber}`;
            product.slug = `greetings-card-${cardNumber}`;

            // Update the image and gallery URLs to use the format `cardNumber.png`
            const imageUrl = `https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/${cardNumber}.png`;
            if (product.image) {
                product.image.original = imageUrl;
                product.image.thumbnail = imageUrl;
            }

            if (product.gallery && Array.isArray(product.gallery)) {
                product.gallery = product.gallery.map(galleryItem => ({
                    ...galleryItem,
                    original: imageUrl,
                    thumbnail: imageUrl
                }));
            }

            // Increment the card number for the next card
            cardNumber++;
        }
        return product;
    });

    // Write the updated data back to the JSON file
    fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf8', (writeErr) => {
        if (writeErr) {
            console.error('Error writing the file:', writeErr);
            return;
        }

        console.log('Successfully updated Birthday Card names and image URLs in the JSON file.');
    });
});
