// Importing the JSON data (you can replace this with your actual import method)
const data = require('./categories.json'); // Assuming the JSON is saved as data.json

// Function to add descriptions to the respective categories and children
function updateDescriptions(data) {
  data.forEach(item => {
    switch (item.name) {
      case 'Gift':
        // Add descriptions for "Gift" category as a new property 'description'
        item.description = "Gift your loved ones with future assets in the crypto space.";
        
        // Add descriptions to the children of "Gift"
        item.children.forEach(child => {
          if (child.name === 'Gift Cards') {
            child.description = "The Gift of the Future! The Indexx Gift Card can be redeemed for our stable coin, IUSD+, and traded for any cryptocurrency on our platform. Give the ultimate flexible and valuable gift in the crypto space.";
          } else if (child.name === 'Gift Pack') {
            child.description = "Introduce your loved ones to the world of crypto with the Indexx Gift Pack. This innovative gift includes a balanced mix of two Indexx cryptocurrencies, offering a unique and thoughtful way to start a crypto journey.";
          }
        });
        break;

      case 'Greeting':
        // Add descriptions for "Greeting" category as a new property 'description'
        item.description = "A perfect way to celebrate every occasion with future investments.";
        
        // Add descriptions to the children of "Greeting"
        item.children.forEach(child => {
          if (child.name === 'Greeting Cards') {
            child.description = "Out of gift ideas? Our Indexx Greeting Cards are perfect for any occasion. More than a card, it's the gift of the future. Invest in your child's future today—like your kids, their assets will grow too!";
          } else if (child.name === 'Birthday Cards') {
            child.description = "Surprise someone special with the gift of the future on their big day. Our Indexx Birthday Cards combine heartfelt wishes with the excitement of cryptocurrency. It's more than a gift; it's a growing investment in their future.";
          }
        });
        break;

      case 'Hive Pack':
        // Add descriptions for "Hive Pack" category as a new property 'description'
        item.description = "Kickstart your investment journey with the Indexx Hive Pack. Our AI-curated selection of top Indexx and non-Indexx tokens maximizes your portfolio's growth potential. Dive into crypto easily with this comprehensive pack!";
        
        // Add the same description to all children of "Hive Pack"
        item.children.forEach(child => {
          child.description = "Kickstart your investment journey with the Indexx Hive Pack. Our AI-curated selection of top Indexx and non-Indexx tokens maximizes your portfolio's growth potential. Dive into crypto easily with this comprehensive pack!";
        });
        break;

      default:
        // Handle any other categories, if present
        item.description = `Details for ${item.name} not provided.`;
    }
  });

  // Return the updated data
  return data;
}

// Call the function and get the updated data
const updatedData = updateDescriptions(data);

// Output the updated data or save to a file
console.log(JSON.stringify(updatedData, null, 2));

// Optionally, save the updated data back to a JSON file (if using Node.js)
const fs = require('fs');
fs.writeFileSync('./categories.json', JSON.stringify(updatedData, null, 2), 'utf8');
