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
  email: "", // TODO: no email found on Instagram - add one if you have it
  address: [], // TODO: no address found on Instagram - add one here, e.g. ["Street", "City, Nepal"]
  mapQuery: "", // TODO: fill in once you have a real address, e.g. "Snacks Bar, City, Nepal"
  hours: [
    ["Every day", "8:30 am to 9:00 pm"]
  ],
  social: { instagram: "https://www.instagram.com/snacksbar____/", facebook: "#" }
};

/* "tagline" is a short line shown under the category name on the menu page. */
window.CATEGORIES = [
  { id: "coffee", name: "Coffee", tagline: "Brewed fresh, every cup" },
  { id: "corndogs", name: "Corndogs", tagline: "The one everyone orders" },
  { id: "snacks", name: "Snacks & Food", tagline: "Something to share" },
  { id: "drinks", name: "Drinks & Mojitos", tagline: "Including our Virgin Mojito" }
];

/* TODO: these are placeholder items, one per category, built only from what
   the Instagram bio mentions (coffee, corndogs, food, drinks, a virgin mojito).
   There is no real priced menu to pull from yet, so price/inside/pair are left
   out on purpose rather than making numbers up - add the real menu here. */
window.MENU = [
  {
    id: "coffee", cat: "coffee", name: "Coffee", glyph: "☕", tone: "terra",
    desc: "Hot or iced, however you like it."
  },
  {
    id: "corn-dog", cat: "corndogs", name: "Corn Dog", glyph: "🌭", tone: "mustard",
    desc: "Our most-ordered snack, fresh off the fryer."
  },
  {
    id: "snack-platter", cat: "snacks", name: "Snacks & Bites", glyph: "🍟", tone: "green",
    desc: "A little bit of everything, good for sharing."
  },
  {
    id: "virgin-mojito", cat: "drinks", name: "Virgin Mojito", glyph: "🍹", tone: "terra",
    desc: "Cool, fresh, and alcohol-free."
  }
];

/* TODO: placeholder captions only - swap in real photos from the Instagram
   account (assets/photos/..., then add "img" to each entry) when you have them. */
window.GALLERY = [
  { label: "Coffee counter", glyph: "☕", tone: "terra", h: 360 },
  { label: "Corn dogs, fresh off the fryer", glyph: "🌭", tone: "mustard", h: 300 },
  { label: "Weekend crowd", glyph: "🎉", tone: "green", h: 260 },
  { label: "Mojito pour", glyph: "🍹", tone: "terra", h: 420 },
  { label: "Snacks for the table", glyph: "🍟", tone: "mustard", h: 240 },
  { label: "Morning setup", glyph: "☀️", tone: "green", h: 340 },
  { label: "Second outlet", glyph: "📍", tone: "terra", h: 280 },
  { label: "Friends catching up", glyph: "💬", tone: "green", h: 380 },
  { label: "Drinks menu", glyph: "🥤", tone: "mustard", h: 250 }
];
