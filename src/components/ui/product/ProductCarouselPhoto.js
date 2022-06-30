// Modules
import getImageURL from "../../../utils/getImageURL";

const ProductCarouselPhoto = ({ product, activePhoto, setActivePhoto }) => {
  const onPrevClick = () => {
    // When the active photo is greater than 1 then keep decrementing the activePhoto value
    if (activePhoto > 1) {
      setActivePhoto(activePhoto - 1);
      return;
    }
    // When the active photo is at one the previous button is click, then go to the last image id
    setActivePhoto(product.images.length);
  };

  const onNextClick = () => {
    // When the activePhoto is less than the image length then keep incrementing the activePhoto value
    if (activePhoto < product.images.length) {
      setActivePhoto(activePhoto + 1);
      return;
    }
    // When the activePhoto value is equal to the length of the product image then set the activePhoto value back to 1
    setActivePhoto(1);
  };

  return (
    <div
      className="product-carousel-photo"
      style={{
        backgroundImage: `url(${getImageURL(product, activePhoto)})`,
      }}
    >
      <p className="product-carousel-photo__prev-box" onClick={onPrevClick}>
        <span className="product-carousel-photo__prev-icon"></span>
      </p>

      <p className="product-carousel-photo__next-box" onClick={onNextClick}>
        <span className="product-carousel-photo__next-icon"></span>
      </p>
    </div>
  );
};

export default ProductCarouselPhoto;
