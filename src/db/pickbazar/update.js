const fs = require('fs');
const path = require('path');

// Define descriptions based on the slug prefix
const descriptions = {
  "greetings-card": "Our Indexx Greeting Cards are a perfect gift for any occasion. When traditional gift ideas fall short, why not surprise someone with the gift of cryptocurrency? This modern and thoughtful option allows you to send crypto in a beautifully designed greeting card, making it an ideal present for the tech-savvy recipient.",
  "birthday-card": "Looking for the perfect birthday gift? The Indexx Birthday Crypto Card is a fantastic way to introduce someone to the world of cryptocurrency. It’s an exciting and engaging way to help them start their crypto journey, sparking their interest with a special birthday surprise that’s both fun and valuable.",
  "hive-pack": "The Indexx Hive Pack offers a curated selection of Indexx and non-Indexx tokens, including popular cryptocurrencies like BTC, ETH, and SOL. It’s the perfect blend of top cryptocurrencies to help someone start their journey in the crypto industry. Buy it from our shop and redeem it on our exchange to instantly receive a diverse pack of tokens. The Hive Pack is the best way to kickstart someone’s experience in the world of digital assets!",
  "token-pack": "The Indexx Hive Pack offers a curated selection of Indexx and non-Indexx tokens, including popular cryptocurrencies like BTC, ETH, and SOL. It’s the perfect blend of top cryptocurrencies to help someone start their journey in the crypto industry. Buy it from our shop and redeem it on our exchange to instantly receive a diverse pack of tokens. The Hive Pack is the best way to kickstart someone’s experience in the world of digital assets!",
  "crypto-pack": "The Indexx Hive Pack offers a curated selection of Indexx and non-Indexx tokens, including popular cryptocurrencies like BTC, ETH, and SOL. It’s the perfect blend of top cryptocurrencies to help someone start their journey in the crypto industry. Buy it from our shop and redeem it on our exchange to instantly receive a diverse pack of tokens. The Hive Pack is the best way to kickstart someone’s experience in the world of digital assets!",
  "action-pack": "The Indexx Hive Pack offers a curated selection of Indexx and non-Indexx tokens, including popular cryptocurrencies like BTC, ETH, and SOL. It’s the perfect blend of top cryptocurrencies to help someone start their journey in the crypto industry. Buy it from our shop and redeem it on our exchange to instantly receive a diverse pack of tokens. The Hive Pack is the best way to kickstart someone’s experience in the world of digital assets!",
  "gift-card": "The Indexx Gift Card is a versatile digital gift card that can be redeemed within our exchange for cryptocurrency. Upon redemption, you will receive our stable coin, IUSD+, equivalent to the card's value. You can easily trade IUSD+ for any other cryptocurrency available on our platform, making it a flexible and valuable gift for anyone interested in the crypto space.",
  "gift-pack": "Show your loved ones you care with the Indexx Gift Pack. This thoughtful gift contains a mix of two different Indexx cryptocurrencies, with 50% allocated to Token A and 50% to Token B. It’s a unique and innovative gift that opens the door to the world of crypto for friends or family."
};

// Load the products.json file
const filePath = path.join(__dirname, 'products.json');
const products = require(filePath);

// Update the description of each product based on its slug
products.forEach(product => {
  const slug = product.slug;
  if (slug) {
    const slugPrefix = Object.keys(descriptions).find(prefix => slug.startsWith(prefix));
    if (slugPrefix) {
      product.description = descriptions[slugPrefix];
    }
  }
});

// Write the updated data back to the products.json file
fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
  if (err) {
    console.error('Error writing to products.json:', err);
  } else {
    console.log('Successfully updated products.json');
  }
});
