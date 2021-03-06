// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let itemPrice = 0;
  for (i = 0; i < data.length; i++) {
    itemPrice = itemPrice + data[i].price;
  }

  let avgPrice = (itemPrice / data.length);
  console.log(avgPrice);
}




// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let priceRangeItems = [];
  for (i = 0; i < data.length; i++) {
    if ((data[i].price >= 14) && (data[i].price <= 18)) {
      priceRangeItems.push(data[i].title);
    }
  }
  console.log(priceRangeItems);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let gbpCurrencyItem = "";
  let gbpCurrencyPrice = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      gbpCurrencyItem = gbpCurrencyItem + data[i].title;
      gbpCurrencyPrice = gbpCurrencyPrice + data[i].price;
    }
  }
  console.log(gbpCurrencyItem + " costs " + gbpCurrencyPrice + " pounds.");
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let woodItems = [];
  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] === "wood") {
        woodItems.push(data[i].title);
      }
    }
  }
  let woodItemsList = "";
  for (i = 0; i < woodItems.length; i++) {
    woodItemsList = woodItemsList + woodItems[i] + " is made of wood. \n";
  }
  console.log(woodItemsList);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let eightMaterialsList = "";
  for (i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      eightMaterialsList = eightMaterialsList + data[i].title + " has " + data[i].materials.length + " materials: \n";
      for (j = 0; j < data[i].materials.length; j++) {
        eightMaterialsList = eightMaterialsList + data[i].materials[j] + "\n";
      }
    }
  }
  console.log(eightMaterialsList);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let sellerMadeItems = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      sellerMadeItems = sellerMadeItems + 1;
    }
  }
  console.log(sellerMadeItems + " items were made by their sellers.");
}
