const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

//products.forEach((products) => console.log(products.name, products.price));

//products.forEach((products) =>
// console.log(products.name, products.price * 1.1)
//);

/*const categories = [];
products.forEach((products) => {
  if (!categories.includes(products.category)) {
    categories.push(products.category);
  }
});
console.log("Unique Categories:", categories);
*/

/*const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);

const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);

const Highrating = products.filter((product) => product.rating >= 4.5);
console.log("HighRated Products:", Highrating);
*/

/*const Highrating = products.filter((product) => product.rating >= 4.5);
Highrating.forEach((Highrating) =>
  console.log("HighRated Products:", Highrating.name)
); */

const Eletronics = products.filter(
  (product) => product.category === "Electronics"
);
products.filter((product) => product.price < 1000);

products.forEach(() => console.log("Electronics Below 1000:", Eletronics));
