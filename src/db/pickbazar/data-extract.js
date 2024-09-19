const fs = require('fs');

// Example gift pack data
const giftPacks = [
    {
        "slug": "gift-pack-btc-inex-wibs-1",
        "name": "Bitcoin + INEX & WIBS",
        "image": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/GIFTS/Gift+Packs/1.png",
        "currencies": ["Bitcoin", "INEX", "WIBS"]
    },
    {
        "slug": "gift-pack-btc-inex-iusdp-1",
        "name": "Bitcoin + INEX & IUSD+",
        "image": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/GIFTS/Gift+Packs/3.png",
        "currencies": ["Bitcoin", "INEX", "IUSD+"]
    },
    {
        "slug": "gift-pack-btc-inex-1",
        "name": "Bitcoin + INEX",
        "image": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/GIFTS/Gift+Packs/4.png",
        "currencies": ["Bitcoin", "INEX"]
    },
    {
        "slug": "gift-pack-btc-wibs-1",
        "name": "Bitcoin + WIBS",
        "image": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/GIFTS/Gift+Packs/5.png",
        "currencies": ["Bitcoin", "WIBS"]
    },
    {
        "slug": "gift-pack-btc-iusdp-1",
        "name": "Bitcoin + IUSD+",
        "image": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/GIFTS/Gift+Packs/6.png",
        "currencies": ["Bitcoin", "IUSD+"]
    },
    {
        "slug": "gift-pack-btc-in500-1",
        "name": "Bitcoin + IN500",
        "image": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/GIFTS/Gift+Packs/7.png",
        "currencies": ["Bitcoin", "IN500"]
    }
];

// Load the JSON data from the products.json file
const inputFile = 'products.json';
const outputFile = 'extracted_products_with_currencies.json';

// Read the input JSON file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse the JSON data
    const products = JSON.parse(data);

    // Extract slug, name, image, and currencies from each object
    const extractedData = products.map(product => {
        // Find the matching gift pack by slug
        const giftPack = giftPacks.find(pack => pack.slug === product.slug);

        // Default to IUSD+ if no gift pack match is found
        const currencies = giftPack ? giftPack.currencies : ['USD'];

        return {
            slug: product.slug,
            name: product.name,
            image: product.image ? product.image.original : (giftPack ? giftPack.image : null), // Use product or gift pack image
            currencies: currencies // Add currencies array
        };
    });

    // Write the extracted data to a new JSON file
    fs.writeFile(outputFile, JSON.stringify(extractedData, null, 4), 'utf8', err => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }
        console.log(`Extracted data with currencies saved to ${outputFile}`);
    });
});
