const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function generateProducts(num, start = 11) {
    const products = [];
    // URLs for new images
    const imageUrls = [
        'https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Seasonal/Christmas6.png',
        'https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Seasonal/Christmas7.png',
        'https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Seasonal/Christmas8.png',
        'https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Seasonal/Christmas9.png',
        'https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Seasonal/Christmas10.png',
        'https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Seasonal/hal1.png',
        'https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Seasonal/hal2.png',
        'https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Seasonal/hal3.png',
        'https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Seasonal/hal4.png',
        'https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Seasonal/hal5.png'
    ];

    const template = {
        "shop": {
            "address": {
                "zip": "61032",
                "city": "Freeport",
                "state": "Illinois",
                "country": "USA",
                "street_address": "1986  Spinnaker Lane"
            },
            "settings": {
                "location": {
                    "lat": 38.9032325,
                    "lng": -77.0211068,
                    "city": "Washington",
                    "state": "DC",
                    "country": "United States",
                    "formattedAddress": "New York Ave NW, Washington, DC, USA"
                },
                "contact": "018927525111",
                "socials": [
                    {
                        "_id": "66c75afcbdc1efe45d902372",
                        "url": "https://www.facebook.com/",
                        "icon": "FacebookIcon"
                    },
                    {
                        "_id": "66c75afcbdc1efe45d902373",
                        "url": "https://www.instagram.com/",
                        "icon": "InstagramIcon"
                    },
                    {
                        "_id": "66c75afcbdc1efe45d902374",
                        "url": "https://www.twitter.com/",
                        "icon": "TwitterIcon"
                    }
                ],
                "website": "https://redq.io/"
            },
            "id": 6,
            "owner_id": 1,
            "name": "Grocery Shop",
            "slug": "grocery-shop",
            "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
            "cover_image": {
                "id": "894",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg",
                "_id": "66c75afcbdc1efe45d902370"
            },
            "logo": {
                "id": "893",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg",
                "_id": "66c75afcbdc1efe45d902371"
            },
            "is_active": 1,
            "created_at": "2021-06-27T03:48:23.000Z",
            "updated_at": "2021-07-08T09:22:38.000Z"
        },
        "_id": "",
        "id": "",
        "name": "",
        "slug": "",
        "description": "Our Indexx Greeting Cards are a perfect gift for any occasion. When traditional gift ideas fall short, why not surprise someone with the gift of cryptocurrency? This modern and thoughtful option allows you to send crypto in a beautifully designed greeting card, making it an ideal present for the tech-savvy recipient.",
        "type_id": 1,
        "price": 2,
        "shop_id": 6,
        "sale_price": 1000,
        "language": "en",
        "min_price": 50,
        "max_price": 10000,
        "sku": "1",
        "quantity": 18,
        "in_stock": 1,
        "is_taxable": 0,
        "shipping_class_id": null,
        "status": "publish",
        "product_type": "variable",
        "unit": "1lb",
        "height": null,
        "width": null,
        "length": null,
        "image": {
            "id": "1",
            "original": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/G-36+3.png",
            "thumbnail": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/G-36+3.png",
            "_id": "66c75afcbdc1efe45d90236a"
        },
        "video": null,
        "gallery": [
            {
                "_id": "66c75afcbdc1efe45d90236b",
                "id": "573",
                "original": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/G-36+3.png",
                "thumbnail": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/G-36+3.png"
            }
        ],
        "deleted_at": null,
        "created_at": "2021-03-08T10:24:53.000Z",
        "updated_at": "2021-12-23T18:16:06.000Z",
        "author_id": null,
        "manufacturer_id": null,
        "is_digital": 0,
        "is_external": 0,
        "external_product_url": null,
        "external_product_button_text": null,
        "ratings": 4.67,
        "total_reviews": 3,
        "rating_count": [
            {
                "_id": "66c75afcbdc1efe45d90236c",
                "rating": 5,
                "total": 2,
                "positive_feedbacks_count": 0,
                "negative_feedbacks_count": 0,
                "my_feedback": null,
                "abusive_reports_count": 0
            },
            {
                "_id": "66c75afcbdc1efe45d90236d",
                "rating": 4,
                "total": 1,
                "positive_feedbacks_count": 0,
                "negative_feedbacks_count": 0,
                "my_feedback": null,
                "abusive_reports_count": 0
            }
        ],
        "my_review": null,
        "in_wishlist": false,
        "blocked_dates": [],
        "translated_languages": ["en"],
        "categories": [
            {
                "type": null,
                "children": [],
                "products_count": 0,
                "_id": "66c75afcbdc1efe45d90236e",
                "id": 1,
                "name": "Greeting",
                "slug": "Greeting",
                "icon": "Greeting",
                "language": "en",
                "image": [],
                "details": null,
                "parent": null,
                "type_id": 1,
                "created_at": "2021-03-08T07:21:31.000Z",
                "updated_at": "2021-03-08T07:21:31.000Z",
                "deleted_at": null,
                "parent_id": null,
                "translated_languages": ["en"],
                "pivot": {
                    "product_id": 1,
                    "category_id": 1
                }
            },
            {
                "type": null,
                "children": [],
                "products_count": 0,
                "_id": "66c75afcbdc1efe45d90236f",
                "id": 2,
                "name": "Seasonal Cards",
                "slug": "seasonal-cards",
                "icon": "SeasonalCards",
                "language": "en",
                "image": [],
                "details": null,
                "type_id": 1,
                "created_at": "2021-03-08T07:22:04.000Z",
                "updated_at": "2021-03-08T07:22:04.000Z",
                "deleted_at": null,
                "parent_id": 1,
                "translated_languages": ["en"],
                "pivot": {
                    "product_id": 1,
                    "category_id": 2
                }
            }
        ]
    };
    
    // Start loop from the provided start value
    for (let i = start; i < start + num; i++) {
        const newProduct = JSON.parse(JSON.stringify(template));
        const url = imageUrls[i % imageUrls.length]; // Cyclically use the image URLs
        newProduct._id = uuidv4();
        newProduct.image.original = url;
        newProduct.image.thumbnail = url;
        newProduct.gallery[0].original = url;
        newProduct.gallery[0].thumbnail = url;
        newProduct.id = `p${i}`;
        newProduct.name = `Seasonal Card ${i}`;
        newProduct.slug = `seasonal-card-${i}`;
        newProduct.sku = `${i}`;
        newProduct.quantity = Math.floor(Math.random() * 100);
        products.push(newProduct);
    }

    return products;
}

// Call the function to generate 10 products, starting from 11
const products = generateProducts(10, 11);

// Save to a JSON file
fs.writeFileSync('products_seasonal.json', JSON.stringify(products, null, 2), 'utf8');

console.log('Products saved to products_seasonal_new.json');
