const shop1 = {
  shopInfo: {
    shopType: "grocery-shop",
    shopId: "FI5678G3",
    shopTitle: "kmarket",
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
    shopId: "FI7678L2",
    shopTitle: "giganti",
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
    shopId: "FI0928A8",
    shopTitle: "alko",
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
    shopId: "FI4392A2",
    shopTitle: "xxl",
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
let orders = {};

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

const getOrder = function (curshp) {
  let order = {};
  let orderArr = [];
  let item = prompt("Pick item: ");
  let quantity = prompt(`What quantity of ${item}: `);
  const test = Object.entries(curshp.shopItems).filter((ts) => ts[0] === item);
  console.log(test[0]);

  console.log(res2);
};
getOrder(currentShop);
