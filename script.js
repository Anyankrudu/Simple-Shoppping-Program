const shop1 = {
  shopInfo: {
    shopType: "grocery-shop",
    shopTitle: "kmarket",
    shopId: "FI5678G3",
    shopAddress: "lipstikkakuja-1a-02100-Vantaa-Finland",
    shopContact: "+358 414352376",
    vat: 14,
  },

  shopItems: {
    bread: 2.6,
    tomatoe: 4.21,
    onion: 1.45,
    orange: 2.05,
    garlic: 0.78,
    milk: 3.86,
    sugar: 3.71,
  },
};

const shop2 = {
  shopInfo: {
    shopType: "accessories-shop",
    shopTitle: "giganti",
    shopId: "FI7678L2",
    shopAddress: "Elmontie-43-65200-Tampere-Finland",
    shopContact: "+358 419822393",
    vat: 25.5,
  },

  shopItems: {
    keyboard: 45.65,
    iphone6: 1050.89,
    calculator: 76.33,
    laptop: 421.99,
    television: 1450.79,
    vacuum: 205.98,
    mouse: 32.87,
  },
};

const shop3 = {
  shopInfo: {
    shopType: "liquor-shop",
    shopTitle: "alko",
    shopId: "FI0928A8",
    shopAddress: "sturenkatu-21-31205-Helsinki-Finland",
    shopContact: "+358 412789393",
    vat: 25.5,
  },

  shopItems: {
    baileys: 78.23,
    vodka: 47.21,
    redWine: 26.98,
    whiteWine: 34.78,
    jackDaniels: 41.99,
    sandels: 15.67,
    whisky: 38.87,
  },
};

const shop4 = {
  shopInfo: {
    shopType: "cloths-shop",
    shopTitle: "xxl",
    shopId: "FI4392A2",
    shopAddress: "Palosaarentie-62-39745-Vaasa-Finland",
    shopContact: "+358 417097234",
    vat: 24,
  },

  shopItems: {
    jacket: 48.23,
    tennis: 27.29,
    tshirt: 12.98,
    pullover: 24.71,
    jeans: 31.97,
    sandals: 54.98,
    shoe: 108.87,
  },
};

let shops = [shop1, shop2, shop3, shop4];
let currentShop;
let orders = [];

const displayShopTitles = shops.forEach(function (shop) {
  shopTitles = shop.shopInfo.shopTitle;
  console.log(shopTitles);
});

const getCurrentshop = function (shps) {
  let shop = prompt("Enter shop title: ").toLowerCase();
  currentShop = shps.find((shp) => shp.shopInfo.shopTitle === shop);
};
getCurrentshop(shops);

const displayCurrentShopItems = function (curshp) {
  for (let [item, price] of Object.entries(curshp.shopItems)) {
    console.log(`${item} : ${price}$`);
  }
};
displayCurrentShopItems(currentShop);

const getOrderedItemQuantity = function (curshp) {
  let orderedQuantity = ["quantity"];
  let item = prompt("Pick item: ");
  let quantity = orderedQuantity.push(
    Number(prompt(`What quantity of ${item}: `))
  );
  let orderedItemQuantity = Object.entries(curshp.shopItems).filter(
    (ts) => ts[0] === item
  );
  orderedItemQuantity.push(orderedQuantity);
  orders.push(orderedItemQuantity);
};
getOrderedItemQuantity(currentShop);

let stillShoppping = true;
while (stillShoppping) {
  let question = prompt("Type 'yes' to continue shopping or 'no' to stop: ");
  question === "yes"
    ? getOrderedItemQuantity(currentShop)
    : (stillShoppping = false);
}

console.clear();

const displaycurrentShopInfo = function (curshp) {};
displaycurrentShopInfo(currentShop);

let allItemPriceSum = [];
const displayOrderedItemDetails = function (ords) {
  ords.forEach(function (ord) {
    let [item, itemPrice] = ord[0];
    let [quantity, itemQuantity] = ord[1];
    let itemPriceSum = itemPrice * itemQuantity;
    allItemPriceSum.push(itemPriceSum);
    console.log(`${item} : ${itemPrice}$`);
    console.log(`${itemQuantity}x ${item} : ${itemPriceSum}$`);
  });
};

displayOrderedItemDetails(orders);

console.log(allItemPriceSum);

// FOLLOW UPS
// Each time user enters an item check in orders array if he already has the item, if the item is there notify
// and tell user to either edit current amount or so..
// Round all numbers to 2 deciaml points.....
