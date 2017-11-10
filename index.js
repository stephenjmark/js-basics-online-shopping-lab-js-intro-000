var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100))
  cart.push(new Object({[item]: price }))
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var cartCount = getCart().length

  if(cartCount === 0){
    console.log('Your shopping cart is empty.')
  } else {
      if (cartCount === 1) {
      var cartItems = Object.keys(cart);
      var itemPrice = cart[cartItems[0]];
      console.log(`In your cart, you have ${cartItems[0]} at $${itemPrice}.`)
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
