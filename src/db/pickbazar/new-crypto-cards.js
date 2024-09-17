const fs = require('fs');

// Base object template for the Bitcoin gift card
const baseObject = {
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
                    "_id": "66c75afbbdc1efe45d90219e",
                    "url": "https://www.facebook.com/",
                    "icon": "FacebookIcon"
                },
                {
                    "_id": "66c75afbbdc1efe45d90219f",
                    "url": "https://www.instagram.com/",
                    "icon": "InstagramIcon"
                },
                {
                    "_id": "66c75afbbdc1efe45d9021a0",
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
            "_id": "66c75afbbdc1efe45d90219c"
        },
        "logo": {
            "id": "893",
            "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
            "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg",
            "_id": "66c75afbbdc1efe45d90219d"
        },
        "is_active": 1,
        "created_at": "2021-06-27T03:48:23.000Z",
        "updated_at": "2021-07-08T09:22:38.000Z"
    },
    "_id": "7a05d917-b3e3-440a-921a-4a939fc81abf",
    "id": "77c727a4-3eb6-4b71-a390-ad96804bc1a8",
    "name": "Gift Card $1000",
    "slug": "gift-card-1000",
    "description": "The Indexx Gift Card is a versatile digital gift card that can be redeemed within our exchange for cryptocurrency. Upon redemption, you will receive our stable coin, IUSD+, equivalent to the card's value. You can easily trade IUSD+ for any other cryptocurrency available on our platform, making it a flexible and valuable gift for anyone interested in the crypto space.",
    "type_id": 1,
    "price": 2,
    "shop_id": 6,
    "sale_price": 1000,
    "language": "en",
    "min_price": 1000,
    "max_price": 1000,
    "sku": "1",
    "quantity": 18,
    "in_stock": 1,
    "is_taxable": 0,
    "shipping_class_id": null,
    "status": "publish",
    "product_type": "simple",
    "unit": "1lb",
    "height": null,
    "width": null,
    "length": null,
    "image": {
        "id": "1",
        "original": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/GIFTS/Gift+Cards/1000--.png",
        "thumbnail": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/GIFTS/Gift+Cards/1000--.png",
        "_id": "66c75afbbdc1efe45d902196"
    },
    "video": null,
    "gallery": [
        {
            "_id": "66c75afbbdc1efe45d902197",
            "id": "573",
            "original": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/GIFTS/Gift+Cards/1000--.png",
            "thumbnail": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/GIFTS/Gift+Cards/1000--.png"
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
            "_id": "66c75afbbdc1efe45d902198",
            "rating": 5,
            "total": 2,
            "positive_feedbacks_count": 0,
            "negative_feedbacks_count": 0,
            "my_feedback": null,
            "abusive_reports_count": 0
        },
        {
            "_id": "66c75afbbdc1efe45d902199",
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
            "_id": "66c75afbbdc1efe45d90219a",
            "id": 1,
            "name": "Gift",
            "slug": "gift",
            "icon": "Gift",
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
            "_id": "66c75afbbdc1efe45d90219b",
            "id": 2,
            "name": "Crypto Gift Cards",
            "slug": "crypto-cards",
            "language": "en",
            "icon": null,
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
    ],
    "type": {
        "id": 1,
        "name": "Grocery",
        "settings": {
            "isHome": true,
            "layoutType": "classic",
            "productCard": "helium",
            "_id": "66c75afbbdc1efe45d9021a1"
        },
        "slug": "grocery",
        "language": "en",
        "icon": "FruitsVegetable",
        "promotional_sliders": [
            {
                "_id": "66c75afbbdc1efe45d9021a2",
                "id": "902",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/offer-5.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/conversions/offer-5-thumbnail.jpg"
            },
            {
                "_id": "66c75afbbdc1efe45d9021a3",
                "id": "903",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/offer-4.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/conversions/offer-4-thumbnail.jpg"
            },
            {
                "_id": "66c75afbbdc1efe45d9021a4",
                "id": "904",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/offer-3.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/offer-3-thumbnail.jpg"
            },
            {
                "_id": "66c75afbbdc1efe45d9021a5",
                "id": "905",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/offer-2.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/conversions/offer-2-thumbnail.jpg"
            },
            {
                "_id": "66c75afbbdc1efe45d9021a6",
                "id": "906",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/offer-1.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/conversions/offer-1-thumbnail.jpg"
            }
        ],
        "created_at": "2021-03-08T07:18:25.000Z",
        "updated_at": "2021-09-26T15:23:32.000Z",
        "translated_languages": ["en"],
        "_id": "66c75afbbdc1efe45d9021a7"
    },
    "variations": [],
    "metas": [],
    "manufacturer": null,
    "variation_options": [],
    "tags": [],
    "author": null
};

// URLs for new Bitcoin gift card images
const imageUrls = [
    // "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Crypto/btc_100.png",
    // "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Crypto/btc_200.png",
    // "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Crypto/btc_300.png",
    // "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Crypto/btc_500.png",
    // "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Crypto/btc_1000.png",
    "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Crypto/usdt+100.png",
    "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Crypto/usdt+200.png",
    "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Crypto/usdt+300.png",
    "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Crypto/usdt+500.png",
    "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Crypto/usdt+1000.png"
];
// Prices for each card (50, 100, 200, 300, 500, 1000)
const prices = [50, 100, 200, 300, 500, 1000];
// Function to generate new Bitcoin gift card JSON objects
function createCryptoCards(base, imageUrls) {
    return imageUrls.map((url, index) => {
        const newId = `d2d7f741-0b85-460f-a57e-4260569f38e${index + 9}`;
        const newObject = { ...base };
        newObject.id = newId;
        newObject._id = newId;
        newObject.name = `Tether Card ${index + 1}`;
        newObject.slug = `crypto-usdt-cards-${index + 1}`;
        newObject.image.original = url;
        newObject.image.thumbnail = url;
        newObject.gallery[0].original = url;
        newObject.gallery[0].thumbnail = url;

        newObject.price = prices[index];
        newObject.sale_price = prices[index];
        return newObject;
    });
}

// Create new Bitcoin gift card objects and save to a file
const newCryptoCards = createCryptoCards(baseObject, imageUrls);
fs.writeFileSync('new_crypto_usdt_cards.json', JSON.stringify(newCryptoCards, null, 2));

console.log("Bitcoin gift card JSON objects created successfully.");
