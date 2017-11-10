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
  } else if (cartCount === 1){
      var itemName = Object.keys(cart[0])
      var itemPrice = cart[0][itemName]
      var sentence = `In your cart, you have ${itemName} at $${itemPrice}.`
      console.log(sentence)
    } else {
      var itemNameAndPrice = new Array()
      var sentence

      for (var i = 0; i < cartCount - 1; i++){
        var itemName = Object.keys(cart[i])
        var itemPrice = cart[i][itemName]
        itemNameAndPrice.push(`${itemName} at $${itemPrice}`)
      }
      while (i === cartCount - 1){
        var itemName = Object.keys(cart[i])
        var itemPrice = cart[i][itemName]
        itemNameAndPrice.push(`and ${itemName} at $${itemPrice}.`)
        i++
      }

      var sentence =  `In your cart, you have ${itemNameAndPrice.join(', ')}`
      console.log(sentence)
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
