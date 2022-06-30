import CartProductItem from "./CartProductItem";

const CartProduct = ({ cart, deleteCartItem }) => {
  return (
    <div className="cart__products">
      <CartProductItem cartProduct={cart} deleteCartItem={deleteCartItem} />
      <button className="cart__products-btn btn">Checkout</button>
    </div>
  );
};

CartProduct.defaultProps = {
  cart: {},
};

export default CartProduct;
