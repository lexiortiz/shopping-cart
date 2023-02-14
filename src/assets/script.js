// ** CORE CART FUNCTIONALITY **

/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const cherries = {
  name: 'Cherries',
  price: 5,
  quantity: 0,
  productId: 100,
  image: '/images/cherry.jpg'
};

const strawberries = {
  name: 'Strawberries',
  price: 4,
  quantity: 0,
  productId: 200,
  image: '/images/strawberry.jpg'
};

const oranges = {
  name: 'Oranges',
  price: 6,
  quantity: 0,
  productId: 300,
  image: '/images/orange.jpg'
};

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

// Add each object to the products array
products.push(cherries);
products.push(strawberries);
products.push(oranges);

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
// Declaring an addProductToCart function with a parameter of productId
function addProductToCart(productId) {
  // compare productIds for each product
  products.forEach((product) => {
    // Check productId for product
    if (product.productId === productId) {
      // increase the quantity of product
      product.quantity++;
      // if no product in cart, add to cart
      if (!cart.includes(product)) {
        // add object to the cart array
        cart.push(product);
      } else { // if product is already in cart
        // create a temp variable to help remove duplicates
        let newCart = [];
        // for each product in cart
        cart.forEach((product) => {
          // take the duplicates out of the cart
          if (!newCart.includes(product)) {
            // only add objects that are not already there
            newCart.push(product);
          }
        });
        // add products back to cart, without the duplicates
        newCart = cart;
      }
    }
  });
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
// Declaring an increaseQuantity function with a parameter of productId
function increaseQuantity(productId) {
  // compare productIds for each product
  products.forEach((product) => {
    // Check productId for product
    if (product.productId === productId) {
      // increase the quantity of product
      product.quantity++;
    }
  });
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
// Declaring a decreaseQuantity function with a parameter of productId
function decreaseQuantity(productId) {
  // compare productIds for each product
  products.forEach((product) => {
    // Check productId for product
    if (product.productId === productId) {
      // decrease the quantity of product
      product.quantity--;
      // if the quantity is less than or equal to 0
      if (product.quantity <= 0) {
        // find the index of the object
        const productIndex = cart.indexOf(product);
        // remove product from cart
        cart.splice(productIndex, 1);
      }
    }
  });
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
// Declaring a removeProductFromCart function with a parameter of productId
function removeProductFromCart(productId) {
  // compare productIds for each product
  products.forEach((product) => {
    // Check productId for product
    if (product.productId === productId) {
      // find the index of the object
      const productIndex = cart.indexOf(product);
      // remove product from cart
      cart.splice(productIndex, 1);
      // && set product.quantity to 0
      if (product.quantity >= 1) {
        product.quantity = 0;
      }
    }
  });
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
let grandTotal;

// Declaring a cartTotal function with no parameter
function cartTotal() {
  let itemPrice = [];
  grandTotal = 0;
  // Iterate through the cart
  cart.forEach((item) => {
    // for each item in the cart array, get the price
    itemTotal = item.price * item.quantity;
    // push the price of each item to the itemPrice array
    itemPrice.push(itemTotal);
  });
  // iterate through the itemPrice array
  itemPrice.forEach((item) => {
    // && add the price of each item together
    grandTotal += item;
  })
  // return the total of all items in cart
  return grandTotal;
}

/* Create a function called emptyCart that empties the products from the cart */
// Declaring an emptyCart function
function emptyCart() {
  // start at the first index of cart and delete all items
  cart.splice(0, cart.length);
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
// Global variable that starts at the number 0
let totalPaid = 0;

// Declaring a function named pay with a parameter of amount
function pay(amount) {
  // set totalPaid to the sum of the inputs
  totalPaid += amount;
  // set cashTaken to the difference of amount and grandTotal
  cashTaken = totalPaid - grandTotal;
  // if the difference is greater than or equal to 0
  if (cashTaken >= 0) {
    // reset totalPaid
    totalPaid = 0;
  }
  // return the difference
  return cashTaken;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}