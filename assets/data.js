/* Edit this file to change the business details and the whole menu.
   Every page reads from here. Add "img": "assets/photos/xyz.jpg" to an item to show a real photo.

   NOTE: this was rebranded from a template restaurant site to match the
   @snacksbar____ Instagram account. Instagram only exposes a bio, phone
   number and hours without logging in - no address, no priced menu, and
   no downloadable photos. Anything marked TODO below is a placeholder,
   not real data, and should be replaced with the real details. */

window.SITE = {
  name: "Snacks Bar",
  short: "Snacks Bar",
  tagline: "Eat, drink, and be merry.",
  phone: "+977 981-627-8967",
  phoneRaw: "+9779816278967",
  email: "snacksbar08@gmail.com",
  address: ["Saptagandaki Chowk", "Bharatpur, Nepal"],
  mapQuery: "Snacks Bar, Saptagandaki Chowk, Bharatpur, Nepal",
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.1906675903715!2d84.43377079999999!3d27.685613500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fba247abcf79%3A0x231c1ffbcd075aaf!2sSnacks%20Bar!5e1!3m2!1sen!2snp!4v1793528429001!5m2!1sen!2snp",
  hours: [
    ["Every day", "8:30 am to 9:00 pm"]
  ],
  social: { instagram: "https://www.instagram.com/snacksbar____/", facebook: "#" }
};

/* "tagline" is a short line shown under the category name on the menu page. */
window.CATEGORIES = [
  { id: "corndogs", name: "Corndogs", tagline: "The one everyone orders", group: "menu" },
  { id: "snacks", name: "Non-Veg Snacks", tagline: "Fried, grilled and sadeko style", group: "menu" },
  { id: "thukpa", name: "Thukpa", tagline: "Hot noodle soup, your way", group: "menu" },
  { id: "momo", name: "Momo", tagline: "Steamed, chilly, jhol, fried, kothey or kurkure", group: "menu" },
  { id: "burger", name: "Burger", tagline: "Stacked and grilled fresh", group: "menu" },
  { id: "breakfast", name: "Snack Bar Breakfast", tagline: "Light, medium or heavy", group: "menu" },
  { id: "laphing", name: "Laphing", tagline: "Cold, tangy and spicy", group: "menu" },
  { id: "keema-noodles", name: "Keema Noodles", tagline: "Minced meat noodles", group: "menu" },
  { id: "chowmein-fried-rice", name: "Chowmein / Fried Rice", tagline: "Wok-tossed, your choice of protein", group: "menu" },
  { id: "mokthuk-soup-momo", name: "Mokthuk Soup Momo", tagline: "Momo served in a light soup", group: "menu" },
  { id: "espresso", name: "Espresso Beverage", tagline: "Hot, straight-up coffee", group: "drinks" },
  { id: "iced-coffee", name: "Iced Item (Cold Coffee)", tagline: "Cold coffee, iced and refreshing", group: "drinks" },
  { id: "blended", name: "Blended Items", tagline: "Smoothies, shakes, mojitos and lemonades", group: "drinks" },
  { id: "hot-tea", name: "Hot Tea & Other", tagline: "Tea, hot chocolate and more", group: "drinks" },
  { id: "drinks", name: "Soft Drinks", tagline: "Coke and water, ice cold", group: "drinks" }
];

/* Full food menu transcribed from the price list. Drinks category still only
   has the placeholder Blueberry Shake - add the rest of the drinks here. */
window.MENU = [
  /* ---- Corndogs ---- */
  { id: "corn-dog", cat: "corndogs", name: "Corndog (Buff/Chicken)", glyph: "🌭", tone: "mustard",
    img: "assets/Images/Product/CornDog.webp", price: 180, desc: "Our most-ordered snack, fresh off the fryer." },
  { id: "corndog-full-cheese-veg", cat: "corndogs", name: "Corndog Full Cheese / Veg", glyph: "🌭", tone: "mustard",
    price: 220, desc: "Loaded with cheese, veg option included." },
  { id: "corndog-potato-coated", cat: "corndogs", name: "Corndog Potato Coated (Full Cheese)", glyph: "🌭", tone: "mustard",
    price: 235, desc: "Potato-crusted and full of cheese." },

  /* ---- Non-Veg Snacks ---- */
  { id: "snack-crispy-chicken", cat: "snacks", name: "Crispy Chicken", glyph: "🍗", tone: "green", price: 290, desc: "Crispy fried chicken, served hot." },
  { id: "snack-hot-wings", cat: "snacks", name: "Hot Wings", glyph: "🍗", tone: "green", price: 350, desc: "Spicy fried wings." },
  { id: "snack-chicken-chilly", cat: "snacks", name: "Chicken Chilly", glyph: "🍗", tone: "green", price: 280, desc: "Chicken tossed in a chilly sauce." },
  { id: "snack-chicken-sadeko", cat: "snacks", name: "Chicken Sadeko", glyph: "🍗", tone: "green", price: 270, desc: "Spiced, tangy chicken sadeko." },
  { id: "snack-sausage-bacon-wrap", cat: "snacks", name: "Sausage Bacon Wrap", glyph: "🍗", tone: "green", price: 195, desc: "Sausage wrapped in bacon." },
  { id: "snack-sukuti-sadeko", cat: "snacks", name: "Sukuti Sadeko", glyph: "🍗", tone: "green", price: 265, desc: "Dried meat sadeko, spiced and tangy." },
  { id: "snack-jolly-lolly", cat: "snacks", name: "Jolly Lolly (Lollypop)", glyph: "🍗", tone: "green", price: 365, desc: "Chicken lollypop, fried and spiced." },
  { id: "snack-chicken-popcorn", cat: "snacks", name: "Chicken Popcorn", glyph: "🍗", tone: "green", price: 210, desc: "Bite-sized crispy chicken popcorn." },
  { id: "snack-club-sandwich", cat: "snacks", name: "Club Sandwich", glyph: "🥪", tone: "green", price: 380, desc: "Classic club sandwich, stacked high." },
  { id: "snack-chicken-sandwich", cat: "snacks", name: "Chicken Sandwich", glyph: "🥪", tone: "green", price: 285, desc: "Grilled chicken sandwich." },
  { id: "snack-pork-dameko", cat: "snacks", name: "Pork Dameko", glyph: "🍗", tone: "green", price: 300, desc: "Pork dameko, spiced and smoky." },
  { id: "snack-american-chopsey", cat: "snacks", name: "American Chopsey", glyph: "🍗", tone: "green", price: 350, desc: "American-style chopsey." },
  { id: "snack-chinese-chopsey", cat: "snacks", name: "Chinese Chopsey", glyph: "🍗", tone: "green", price: 350, desc: "Chinese-style chopsey." },
  { id: "snack-chicken-chatpat", cat: "snacks", name: "Chicken Chatpat", glyph: "🍗", tone: "green", price: 215, desc: "Tangy, spiced chicken chatpat." },
  { id: "snack-buff-chatpat", cat: "snacks", name: "Buff Chatpat", glyph: "🍗", tone: "green", price: 215, desc: "Tangy, spiced buff chatpat." },

  /* ---- Thukpa ---- */
  { id: "thukpa-veg", cat: "thukpa", name: "Veg Thukpa", glyph: "🍜", tone: "terra", price: 195, desc: "Hot noodle soup with vegetables." },
  { id: "thukpa-buff", cat: "thukpa", name: "Buff Thukpa", glyph: "🍜", tone: "terra", price: 215, desc: "Hot noodle soup with buff." },
  { id: "thukpa-chicken", cat: "thukpa", name: "Chicken Thukpa", glyph: "🍜", tone: "terra", price: 225, desc: "Hot noodle soup with chicken." },
  { id: "thukpa-pork", cat: "thukpa", name: "Pork Thukpa", glyph: "🍜", tone: "terra", price: 265, desc: "Hot noodle soup with pork." },
  { id: "thukpa-mix", cat: "thukpa", name: "Mix Thukpa", glyph: "🍜", tone: "terra", price: 305, desc: "Hot noodle soup with a mix of meats." },

  /* ---- Momo ---- */
  { id: "momo-open", cat: "momo", name: "Open Mo:Mo (Chicken/Buff)", glyph: "🥟", tone: "mustard",
    img: "assets/Images/Product/openMomo.webp", price: 195, desc: "Chicken or buff momo, served open-style." },
  { id: "momo-buff-steam", cat: "momo", name: "Buff Momo (Steam)", glyph: "🥟", tone: "mustard", price: 180, desc: "Steamed buff momo." },
  { id: "momo-buff-chilly", cat: "momo", name: "Buff Momo (Chilly)", glyph: "🥟", tone: "mustard", price: 245, desc: "Buff momo tossed in chilly sauce." },
  { id: "momo-buff-jhol", cat: "momo", name: "Buff Momo (Jhol)", glyph: "🥟", tone: "mustard", price: 215, desc: "Buff momo served in jhol soup." },
  { id: "momo-buff-fried", cat: "momo", name: "Buff Momo (Fried)", glyph: "🥟", tone: "mustard", price: 215, desc: "Fried buff momo." },
  { id: "momo-buff-kothey", cat: "momo", name: "Buff Momo (Kothey)", glyph: "🥟", tone: "mustard", price: 245, desc: "Pan-fried kothey buff momo." },
  { id: "momo-buff-kurkure", cat: "momo", name: "Buff Momo (Kurkure)", glyph: "🥟", tone: "mustard", price: 245, desc: "Crispy kurkure-coated buff momo." },
  { id: "momo-chicken-steam", cat: "momo", name: "Chicken Momo (Steam)", glyph: "🥟", tone: "mustard", price: 185, desc: "Steamed chicken momo." },
  { id: "momo-chicken-chilly", cat: "momo", name: "Chicken Momo (Chilly)", glyph: "🥟", tone: "mustard", price: 255, desc: "Chicken momo tossed in chilly sauce." },
  { id: "momo-chicken-jhol", cat: "momo", name: "Chicken Momo (Jhol)", glyph: "🥟", tone: "mustard", price: 225, desc: "Chicken momo served in jhol soup." },
  { id: "momo-chicken-fried", cat: "momo", name: "Chicken Momo (Fried)", glyph: "🥟", tone: "mustard", price: 225, desc: "Fried chicken momo." },
  { id: "momo-chicken-kothey", cat: "momo", name: "Chicken Momo (Kothey)", glyph: "🥟", tone: "mustard", price: 240, desc: "Pan-fried kothey chicken momo." },
  { id: "momo-chicken-kurkure", cat: "momo", name: "Chicken Momo (Kurkure)", glyph: "🥟", tone: "mustard", price: 255, desc: "Crispy kurkure-coated chicken momo." },
  { id: "momo-pork-steam", cat: "momo", name: "Pork Momo (Steam)", glyph: "🥟", tone: "mustard", price: 205, desc: "Steamed pork momo." },
  { id: "momo-pork-chilly", cat: "momo", name: "Pork Momo (Chilly)", glyph: "🥟", tone: "mustard", price: 255, desc: "Pork momo tossed in chilly sauce." },
  { id: "momo-pork-jhol", cat: "momo", name: "Pork Momo (Jhol)", glyph: "🥟", tone: "mustard", price: 245, desc: "Pork momo served in jhol soup." },
  { id: "momo-pork-fried", cat: "momo", name: "Pork Momo (Fried)", glyph: "🥟", tone: "mustard", price: 235, desc: "Fried pork momo." },
  { id: "momo-pork-kothey", cat: "momo", name: "Pork Momo (Kothey)", glyph: "🥟", tone: "mustard", price: 245, desc: "Pan-fried kothey pork momo." },
  { id: "momo-pork-kurkure", cat: "momo", name: "Pork Momo (Kurkure)", glyph: "🥟", tone: "mustard", price: 255, desc: "Crispy kurkure-coated pork momo." },
  { id: "momo-veg-steam", cat: "momo", name: "Veg Momo (Steam)", glyph: "🥟", tone: "mustard", price: 175, desc: "Steamed veg momo." },
  { id: "momo-veg-chilly", cat: "momo", name: "Veg Momo (Chilly)", glyph: "🥟", tone: "mustard", price: 225, desc: "Veg momo tossed in chilly sauce." },
  { id: "momo-veg-jhol", cat: "momo", name: "Veg Momo (Jhol)", glyph: "🥟", tone: "mustard", price: 195, desc: "Veg momo served in jhol soup." },
  { id: "momo-veg-fried", cat: "momo", name: "Veg Momo (Fried)", glyph: "🥟", tone: "mustard", price: 205, desc: "Fried veg momo." },
  { id: "momo-veg-kothey", cat: "momo", name: "Veg Momo (Kothey)", glyph: "🥟", tone: "mustard", price: 205, desc: "Pan-fried kothey veg momo." },
  { id: "momo-veg-kurkure", cat: "momo", name: "Veg Momo (Kurkure)", glyph: "🥟", tone: "mustard", price: 225, desc: "Crispy kurkure-coated veg momo." },

  /* ---- Burger ---- */
  { id: "burger-deepu", cat: "burger", name: "Deepu's Burger", glyph: "🍔", tone: "terra", price: 385, desc: "Our signature stacked burger." },
  { id: "burger-tower", cat: "burger", name: "Tower Burger", glyph: "🍔", tone: "terra", price: 345, desc: "Tall and loaded burger." },
  { id: "burger-chicken", cat: "burger", name: "Chicken Burger", glyph: "🍔", tone: "terra", price: 280, desc: "Grilled chicken burger." },

  /* ---- Snack Bar Breakfast ---- */
  { id: "breakfast-light", cat: "breakfast", name: "Light Breakfast", glyph: "🍳", tone: "green", price: 370,
    desc: "Sausage, butter toast, jeera aalu, sunny side up and bacon, served with butter jam." },
  { id: "breakfast-medium", cat: "breakfast", name: "Medium Breakfast", glyph: "🍳", tone: "green", price: 415,
    desc: "Boiled egg, sausage, boiled veg, butter toast and hash brown potatoes, served with butter jam." },
  { id: "breakfast-heavy", cat: "breakfast", name: "Heavy Breakfast", glyph: "🍳", tone: "green", price: 435,
    desc: "Grilled chicken, butter toast, boiled egg, baked bacon and mushroom sausage, served with butter jam." },

  /* ---- Laphing ---- */
  { id: "laphing-waiwai", cat: "laphing", name: "Wai Wai Laphing", glyph: "🌶️", tone: "mustard", price: 90, desc: "Cold laphing with Wai Wai noodles." },
  { id: "laphing-lays", cat: "laphing", name: "Lays Laphing", glyph: "🌶️", tone: "mustard", price: 105, desc: "Cold laphing with Lays chips." },
  { id: "laphing-kurkure", cat: "laphing", name: "Kurkure Laphing", glyph: "🌶️", tone: "mustard", price: 105, desc: "Cold laphing with Kurkure." },
  { id: "laphing-kima", cat: "laphing", name: "Kima Laphing", glyph: "🌶️", tone: "mustard", price: 145, desc: "Laphing topped with minced meat." },
  { id: "laphing-combo", cat: "laphing", name: "Combo Laphing", glyph: "🌶️", tone: "mustard", price: 150, desc: "A combo of laphing toppings." },
  { id: "laphing-nepali-chips", cat: "laphing", name: "Nepali Chips", glyph: "🌶️", tone: "mustard", price: 105, desc: "Nepali-style spiced chips." },
  { id: "laphing-extra-jhol", cat: "laphing", name: "Extra Jhol", glyph: "🌶️", tone: "mustard", price: 25, desc: "Extra jhol on the side." },

  /* ---- Keema Noodles ---- */
  { id: "keema-buff", cat: "keema-noodles", name: "Keema Noodles (Buff)", glyph: "🍝", tone: "terra", price: 235, desc: "Noodles with minced buff." },
  { id: "keema-chicken", cat: "keema-noodles", name: "Keema Noodles (Chicken)", glyph: "🍝", tone: "terra", price: 245, desc: "Noodles with minced chicken." },
  { id: "keema-egg", cat: "keema-noodles", name: "Keema Noodles (Egg)", glyph: "🍝", tone: "terra", price: 235, desc: "Noodles with minced egg." },

  /* ---- Chowmein / Fried Rice ---- */
  { id: "chowmein-veg", cat: "chowmein-fried-rice", name: "Chowmein / Fried Rice (Veg)", glyph: "🍚", tone: "green", price: 170, desc: "Veg chowmein or fried rice." },
  { id: "chowmein-buff", cat: "chowmein-fried-rice", name: "Chowmein / Fried Rice (Buff)", glyph: "🍚", tone: "green", price: 185, desc: "Buff chowmein or fried rice." },
  { id: "chowmein-chicken", cat: "chowmein-fried-rice", name: "Chowmein / Fried Rice (Chicken)", glyph: "🍚", tone: "green", price: 190, desc: "Chicken chowmein or fried rice." },
  { id: "chowmein-mixed", cat: "chowmein-fried-rice", name: "Chowmein / Fried Rice (Mixed)", glyph: "🍚", tone: "green", price: 240, desc: "Mixed-meat chowmein or fried rice." },

  /* ---- Mokthuk Soup Momo ---- */
  { id: "mokthuk-buff", cat: "mokthuk-soup-momo", name: "Mokthuk Soup Momo (Buff)", glyph: "🍲", tone: "mustard", price: 215, desc: "Momo served in a light buff soup." },
  { id: "mokthuk-chicken", cat: "mokthuk-soup-momo", name: "Mokthuk Soup Momo (Chicken)", glyph: "🍲", tone: "mustard", price: 240, desc: "Momo served in a light chicken soup." },
  { id: "mokthuk-pork", cat: "mokthuk-soup-momo", name: "Mokthuk Soup Momo (Pork)", glyph: "🍲", tone: "mustard", price: 255, desc: "Momo served in a light pork soup." },

  /* ---- Espresso Beverage ---- */
  { id: "esp-solo", cat: "espresso", name: "Solo Espresso", glyph: "☕", tone: "terra", price: 90, desc: "A single shot, straight up." },
  { id: "esp-doppio", cat: "espresso", name: "Doppio Espresso", glyph: "☕", tone: "terra", price: 120, desc: "A double shot, straight up." },
  { id: "esp-cafe-lungo", cat: "espresso", name: "Cafe Lungo", glyph: "☕", tone: "terra", price: 140, desc: "A longer, milder espresso pull." },
  { id: "esp-macchiato", cat: "espresso", name: "Espresso Macchiato", glyph: "☕", tone: "terra", price: 120, desc: "Espresso marked with a touch of foam." },
  { id: "esp-americano-single", cat: "espresso", name: "Americano (Single Shot)", glyph: "☕", tone: "terra", price: 140, desc: "Espresso lengthened with hot water." },
  { id: "esp-americano-double", cat: "espresso", name: "Americano (Double Shot)", glyph: "☕", tone: "terra", price: 160, desc: "Double espresso lengthened with hot water." },
  { id: "esp-cafe-latte", cat: "espresso", name: "Cafe Latte", glyph: "☕", tone: "terra", price: 180, desc: "Espresso with steamed milk." },
  { id: "esp-cappuccino", cat: "espresso", name: "Cappuccino", glyph: "☕", tone: "terra", price: 180, desc: "Espresso, steamed milk and foam." },
  { id: "esp-flat-white", cat: "espresso", name: "Flat White", glyph: "☕", tone: "terra", price: 170, desc: "Espresso with silky steamed milk." },
  { id: "esp-con-panna", cat: "espresso", name: "Espresso Con Panna", glyph: "☕", tone: "terra", price: 140, desc: "Espresso topped with whipped cream." },
  { id: "esp-affogato", cat: "espresso", name: "Espresso Affogato", glyph: "☕", tone: "terra", price: 160, desc: "Espresso poured over ice cream." },
  { id: "esp-cafe-mocha", cat: "espresso", name: "Cafe Mocha", glyph: "☕", tone: "terra", price: 210, desc: "Espresso with chocolate and steamed milk." },
  { id: "esp-caramel-latte", cat: "espresso", name: "Caramel Latte", glyph: "☕", tone: "terra", price: 220, desc: "Latte with caramel." },
  { id: "esp-honey-latte", cat: "espresso", name: "Honey Latte", glyph: "☕", tone: "terra", price: 220, desc: "Latte with honey." },
  { id: "esp-mocha-madness", cat: "espresso", name: "Mocha Madness", glyph: "☕", tone: "terra", price: 230, desc: "An extra-indulgent mocha." },

  /* ---- Iced Item (Cold Coffee) ---- */
  { id: "iced-americano", cat: "iced-coffee", name: "Iced Americano", glyph: "🧊", tone: "mustard", price: 170, desc: "Espresso and water over ice." },
  { id: "iced-cappuccino", cat: "iced-coffee", name: "Iced Cappuccino", glyph: "🧊", tone: "mustard", price: 195, desc: "Cappuccino, served cold." },
  { id: "iced-latte", cat: "iced-coffee", name: "Iced Latte", glyph: "🧊", tone: "mustard", price: 195, desc: "Latte, served cold." },
  { id: "iced-caramel-macchiato", cat: "iced-coffee", name: "Iced Caramel Macchiato", glyph: "🧊", tone: "mustard", price: 220, desc: "Caramel macchiato, served cold." },
  { id: "iced-mocha", cat: "iced-coffee", name: "Iced Mocha", glyph: "🧊", tone: "mustard",
    img: "assets/Images/Product/IcedMocha.jpg", price: 235, desc: "Mocha, served cold." },
  { id: "iced-lemon-tea", cat: "iced-coffee", name: "Iced Lemon Tea", glyph: "🧊", tone: "mustard", price: 160, desc: "Lemon tea, served cold." },
  { id: "iced-lemonade", cat: "iced-coffee", name: "Iced Lemonade", glyph: "🧊", tone: "mustard", price: 180, desc: "Lemonade, served cold." },

  /* ---- Blended Items ---- */
  { id: "blended-blueberries-smoothie", cat: "blended", name: "Blueberries Smoothie", glyph: "🥤", tone: "green",
    img: "assets/Images/Product/blueBerryShake.webp", price: 360, desc: "Cool, creamy, and bursting with blueberry." },
  { id: "blended-mango-smoothie", cat: "blended", name: "Mango Smoothie", glyph: "🥤", tone: "green", price: 350, desc: "Blended mango smoothie." },
  { id: "blended-kiwi-smoothie", cat: "blended", name: "Kiwi Smoothie", glyph: "🥤", tone: "green", price: 350, desc: "Blended kiwi smoothie." },
  { id: "blended-mango-shake", cat: "blended", name: "Mango Shake", glyph: "🥤", tone: "green", price: 270, desc: "Blended mango shake." },
  { id: "blended-kiwi-shake", cat: "blended", name: "Kiwi Shake", glyph: "🥤", tone: "green", price: 270, desc: "Blended kiwi shake." },
  { id: "blended-kitkat-shake", cat: "blended", name: "KitKat Shake", glyph: "🥤", tone: "green", price: 270, desc: "Blended KitKat shake." },
  { id: "blended-mint-oreo-shake", cat: "blended", name: "Mint Oreo Shake", glyph: "🥤", tone: "green", price: 310, desc: "Blended mint Oreo shake." },
  { id: "blended-oreo-shake", cat: "blended", name: "Oreo Cookies Shake", glyph: "🥤", tone: "green", price: 270, desc: "Blended Oreo cookies shake." },
  { id: "blended-double-fun-vanilla-mocha", cat: "blended", name: "Double Fun Vanilla Mocha", glyph: "🥤", tone: "green", price: 350, desc: "Blended vanilla and mocha." },
  { id: "blended-mocha", cat: "blended", name: "Blended Mocha", glyph: "🥤", tone: "green", price: 270, desc: "Mocha, blended cold." },
  { id: "blended-caramel-macchiato", cat: "blended", name: "Blended Caramel Macchiato", glyph: "🥤", tone: "green", price: 240, desc: "Caramel macchiato, blended cold." },
  { id: "blended-lemonade", cat: "blended", name: "Lemonade", glyph: "🥤", tone: "green", price: 210, desc: "Blended fresh lemonade." },
  { id: "blended-mint-lemonade", cat: "blended", name: "Mint Lemonade", glyph: "🥤", tone: "green", price: 220, desc: "Blended lemonade with mint." },
  { id: "blended-strawberry-lemonade", cat: "blended", name: "Strawberry Lemonade", glyph: "🥤", tone: "green", price: 235, desc: "Blended lemonade with strawberry." },
  { id: "lassi", cat: "blended", name: "Lassi", glyph: "🥤", tone: "green", price: 190, desc: "Cool, creamy yogurt lassi." },
  { id: "mojito-blue-lagoon", cat: "blended", name: "Blue Lagoon Mojito", glyph: "🍹", tone: "green", price: 285, desc: "Blue lagoon mojito, alcohol-free." },
  { id: "mojito-virgin-lagoon", cat: "blended", name: "Virgin Lagoon Mojito", glyph: "🍹", tone: "green", price: 265, desc: "Virgin lagoon mojito, alcohol-free." },
  { id: "mojito-coconut", cat: "blended", name: "Coconut Mojito", glyph: "🍹", tone: "green", price: 280, desc: "Coconut mojito, alcohol-free." },
  { id: "peach-ice-tea", cat: "blended", name: "Peach Ice Tea", glyph: "🍹", tone: "green", price: 195, desc: "Cold peach ice tea." },
  { id: "tangy-twist", cat: "blended", name: "Tangy Twist", glyph: "🍹", tone: "green", price: 230, desc: "A tangy, refreshing twist." },

  /* ---- Hot Tea & Other ---- */
  { id: "tea-black", cat: "hot-tea", name: "Black Tea", glyph: "🍵", tone: "mustard", price: 50, desc: "Classic black tea." },
  { id: "tea-green", cat: "hot-tea", name: "Green Tea", glyph: "🍵", tone: "mustard", price: 60, desc: "Light and fresh green tea." },
  { id: "tea-latte", cat: "hot-tea", name: "Tea Latte", glyph: "🍵", tone: "mustard", price: 120, desc: "Tea with steamed milk." },
  { id: "honey-hot-lemon", cat: "hot-tea", name: "Honey Hot Lemon", glyph: "🍵", tone: "mustard", price: 130, desc: "Hot lemon water with honey." },
  { id: "hot-chocolate", cat: "hot-tea", name: "Hot Chocolate", glyph: "🍵", tone: "mustard", price: 180, desc: "Rich hot chocolate." },
  { id: "hot-peach-tea", cat: "hot-tea", name: "Hot Peach Tea", glyph: "🍵", tone: "mustard", price: 150, desc: "Hot peach-flavoured tea." },
  { id: "milk-horlicks", cat: "hot-tea", name: "Milk Horlicks", glyph: "🍵", tone: "mustard", price: 160, desc: "Warm Horlicks with milk." },

  /* ---- Soft Drinks ---- */
  { id: "coke", cat: "drinks", name: "Coke", glyph: "🥤", tone: "terra", price: 90, desc: "Chilled Coca-Cola." },
  { id: "water", cat: "drinks", name: "Water", glyph: "🥤", tone: "terra", price: 40, desc: "Bottled water." }
];

/* TODO: placeholder captions only - swap in real photos from the Instagram
   account (assets/photos/..., then add "img" to each entry) when you have them. */
window.GALLERY = [
  { label: "Coffee counter", img: "assets/Images/Gallery/Counter.jpeg", glyph: "☕", tone: "terra", h: 360 },
  { label: "Corn dogs, fresh off the fryer", img: "assets/Images/Product/CornDog.webp", glyph: "🌭", tone: "mustard", h: 300 },
  { label: "Restro Fresh-Up", img: "assets/Images/Gallery/RestroFreshUp.jpeg", glyph: "🧹", tone: "mustard", h: 300 },
  { label: "Workshop", img: "assets/Images/Gallery/Workshop.jpeg", glyph: "🛠️", tone: "terra", h: 340 },
  { label: "Our Blended Drink", img : "assets/Images/Gallery/BlendedDrink.webp", glyph: "🍹", tone: "terra", h: 420 },
  { label: "Snacks for the table", img: "assets/Images/Gallery/Platter.webp", glyph: "🍟", tone: "mustard", h: 240 },
  { label: "Our Customers", img : "assets/Images/Gallery/Customer.webp", glyph: "☀️", tone: "green", h: 340 },
  { label: "Second outlet", img : "assets/Images/Gallery/secondOutlet.webp", glyph: "📍", tone: "terra", h: 280 },
  { label: "Open Mo MO", img: "assets/Images/Product/openMomo.webp", glyph: "💬", tone: "green", h: 380 },
  { label: "Drinks menu",img: "assets/Images/Gallery/Coffee.webp", glyph: "🥤", tone: "mustard", h: 250 },
  { label: "Laphing Platter", img: "assets/Images/Product/LaphingPlatter.jpg", glyph: "🌶️", tone: "green", h: 360 },
  { label: "Iced Mocha", img: "assets/Images/Product/IcedMocha.jpg", glyph: "☕", tone: "terra", h: 300 },
  { label: "Chicken Keema Noodles", img: "assets/Images/Product/ChickenKemmaNoddles.jpg", glyph: "🍝", tone: "mustard", h: 340 },
  { label: "Hot Wings", img: "assets/Images/Product/HotWings.jpg", glyph: "🍗", tone: "green", h: 260 },
  { label: "Light Breakfast", img: "assets/Images/Product/LightBreakFast.webp", glyph: "🍳", tone: "terra", h: 380 }
];
