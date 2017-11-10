var cart = new Array();

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
  } else{
      var itemName = Object.keys(cart[0])
      var itemPrice = cart[0].itemName

      console.log(`In your cart, you have ${itemName} at $${itemPrice}.`)
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
