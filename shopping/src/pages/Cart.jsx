import React from 'react'

function Cart( {cart, increaseQuantity, decreaseQuantity, removeItem} ) {
  
  if (cart.length === 0){
    return (
    <>
      <h2>Your cart is empty</h2>
      <p>Contine shopping</p>
    </>
    );
  }

  const grandTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0);

  return (
    <>
      <div className="cart-page">
        {
          cart.map( (item) => (
            <div key={item.id} >
              <img src={item.thumbnail} alt={item.title} />
              <h2> {item.title} </h2>
              <p> Price $: {item.price} </p>
              <p> Quantity: {item.quantity} </p>
              <p> Subtotal: {item.price * item.quantity} </p>
              <button onClick={ () => increaseQuantity(item.id) }> + </button>
              <button onClick={ () => decreaseQuantity(item.id) }> - </button>
              <button onClick={ () => removeItem(item.id) }> Remove </button>
            </div>
          ) )
        }
          <div className="cart-total">
              <h2>
                  Grand Total: ${grandTotal.toFixed(2)}
              </h2>
          </div>
      </div>
    </>
  )
}

export default Cart