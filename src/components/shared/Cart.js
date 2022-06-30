import CartProduct from "../ui/Cart/CartProduct";

const Cart = ({ cart, deleteCartItem }) => {
  return (
    <div className="cart">
      <header className="cart__header">
        <p className="cart__heading">Cart</p>
      </header>
      <div className="cart__content">
        {!Object.keys(cart).length && (
          <p className="cart__empty">Your cart is empty</p>
        )}
        {!!Object.keys(cart).length && (
          <CartProduct cart={cart} deleteCartItem={deleteCartItem} />
        )}
      </div>
    </div>
  );
};

Cart.defaultProps = {
  cart: {},
};

export default Cart;
