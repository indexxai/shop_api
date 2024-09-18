// Original category data
const categoryData = {
    products_count: 0,
    _id: "66c5ced7e0d4310148b7baf6",
    id: 1,
    name: "Gift",
    slug: "gift",
    icon: "Gift",
    image: [],
    details: null,
    language: "en",
    translated_languages: ["en"],
    parent: null,
    type_id: 1,
    updated_at: "2024-08-21T07:21:31.000Z",
    deleted_at: null,
    parent_id: null,
    type: {
      id: 1,
      name: "Gift",
      language: "en",
      translated_languages: ["en"],
      settings: {
        isHome: true,
        layoutType: "classic",
        productCard: "neon",
        _id: "66c770d9f0995079778a4213",
      },
      slug: "grocery",
      icon: "Gift",
      promotional_sliders: [
        {
          _id: "66c770d9f0995079778a4214",
          id: "902",
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/offer-5.png",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/conversions/offer-5-thumbnail.jpg",
        },
        {
          _id: "66c770d9f0995079778a4215",
          id: "903",
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/offer-4.png",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/conversions/offer-4-thumbnail.jpg",
        },
      ],
      updated_at: "2024-08-21T07:21:31.000Z",
      created_at: "2024-08-22T17:09:45.534Z",
      _id: "66c770d9f0995079778a4219",
    },
    children: [
      {
        id: 2,
        name: "Gift Cards",
        slug: "gift-cards",
        icon: null,
        image: [],
        details: null,
        language: "en",
        translated_languages: ["en"],
        parent: {
          id: 1,
          name: "Gift",
          slug: "gift",
        },
        type_id: 1,
        created_at: "2021-03-08T07:22:04.000000Z",
        updated_at: "2021-03-08T07:22:04.000000Z",
        products_count: 9,
        parent_id: 1,
        children: [],
        description:
          "The Gift of the Future! The Indexx Gift Card can be redeemed for our stable coin, IUSD+, and traded for any cryptocurrency on our platform.",
      },
      {
        id: 3,
        name: "Gift Pack",
        slug: "gift-pack",
        icon: null,
        image: { id: null, original: null, thumbnail: null },
        details: null,
        language: "en",
        translated_languages: ["en"],
        parent: { id: 1, name: "Gift", slug: "gift" },
        type_id: 1,
        created_at: "2021-03-08T07:22:04.000000Z",
        updated_at: "2021-03-08T07:22:04.000000Z",
        products_count: 11,
        parent_id: 1,
        children: [],
        description:
          "Introduce your loved ones to the world of crypto with the Indexx Gift Pack. This innovative gift includes a balanced mix of two Indexx cryptocurrencies.",
      },
    ],
    created_at: "2024-08-22T17:09:45.535Z",
    description: "Gift your loved ones with future assets in the crypto space.",
  };
  
  // Create new "Crypto" category with two children: "Bitcoin Cards" and "USDT Cards"
  const newCryptoCategory = {
    id: 10, // New ID for Crypto category
    name: "Crypto",
    slug: "crypto",
    icon: null,
    image: [],
    details: "Crypto gift cards and more",
    language: "en",
    translated_languages: ["en"],
    parent: null,
    type_id: 1,
    created_at: "2024-09-17T12:00:00.000Z",
    updated_at: "2024-09-17T12:00:00.000Z",
    children: [
      {
        id: 11, // New ID for Bitcoin Cards
        name: "Bitcoin Cards",
        slug: "bitcoin-cards",
        icon: null,
        image: [],
        details: "Gift Bitcoin with our Bitcoin cards.",
        language: "en",
        translated_languages: ["en"],
        parent: { id: 10, name: "Crypto", slug: "crypto" },
        type_id: 1,
        created_at: "2024-09-17T12:00:00.000Z",
        updated_at: "2024-09-17T12:00:00.000Z",
        products_count: 5,
        children: [],
      },
      {
        id: 12, // New ID for USDT Cards
        name: "USDT Cards",
        slug: "usdt-cards",
        icon: null,
        image: [],
        details: "Gift USDT with our USDT cards.",
        language: "en",
        translated_languages: ["en"],
        parent: { id: 10, name: "Crypto", slug: "crypto" },
        type_id: 1,
        created_at: "2024-09-17T12:00:00.000Z",
        updated_at: "2024-09-17T12:00:00.000Z",
        products_count: 8,
        children: [],
      },
    ],
  };
  
  // Separate "Crypto Gift Cards" from "Gift" and add it to the new "Crypto" category
  const cryptoGiftCardsIndex = categoryData.children.findIndex(
    (child) => child.name === "Crypto Gift Cards"
  );
  
  // Remove "Crypto Gift Cards" from the "Gift" category if found
  if (cryptoGiftCardsIndex !== -1) {
    const cryptoGiftCards = categoryData.children.splice(cryptoGiftCardsIndex, 1)[0];
  
    // Add "Crypto Gift Cards" to the new "Crypto" category
    newCryptoCategory.children.unshift(cryptoGiftCards);
  }
  
  // Adding new "Crypto" category to the main category list
  categoryData.children.push(newCryptoCategory);
  
  // Log the updated structure
  console.log(JSON.stringify(categoryData, null, 2));
  