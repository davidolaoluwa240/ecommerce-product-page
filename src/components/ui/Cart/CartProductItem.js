// Assets
import IconDelete from "../../../assets/images/icon-delete.svg";

const CartProductItem = ({ cartProduct, deleteCartItem }) => {
  return (
    <div className="cart-product-item">
      <div className="cart-product-item__header">
        <img
          className="cart-product-item__photo"
          src={cartProduct.images[0].imageThumbnail}
          alt={cartProduct.name}
        />
      </div>
      <div className="cart-product-item__details">
        <p className="cart-product-item__name">{cartProduct.name}</p>
        <p className="cart-product-item__pricing">
          <span className="cart-product-item__price">
            ${cartProduct.price.toFixed(2)} x {cartProduct.qty}
          </span>
          <span className="cart-product-item__total">
            ${(cartProduct.price * cartProduct.qty).toFixed(2)}
          </span>
        </p>
      </div>
      <div className="cart-product-item__action" onClick={deleteCartItem}>
        <img
          className="cart-product-item__delete-icon"
          src={IconDelete}
          alt={`delete ${cartProduct.name}`}
        />
      </div>
    </div>
  );
};

export default CartProductItem;
