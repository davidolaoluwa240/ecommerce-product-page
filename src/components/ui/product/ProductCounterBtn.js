// Assets
import IconMinus from "../../../assets/images/icon-minus.svg";
import IconPlus from "../../../assets/images/icon-plus.svg";

const ProductCounterBtn = ({ counter, setCounter }) => {
  return (
    <div className="product-counter-btn">
      <img
        className={`product-counter-btn__minus ${
          !counter ? "product-counter-btn__minus--disabled" : ""
        }`}
        src={IconMinus}
        alt="decrement product quantity"
        onClick={() => setCounter(counter > 1 ? counter - 1 : 0)}
      />
      <span className="product-counter-btn__display">{counter}</span>
      <img
        className="product-counter-btn__plus"
        src={IconPlus}
        alt="decrement product quantity"
        onClick={() => setCounter(counter + 1)}
      />
    </div>
  );
};

export default ProductCounterBtn;
