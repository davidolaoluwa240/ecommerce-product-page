// Modules
import { useState } from "react";
import getImageURL from "../../../utils/getImageURL";

// Components
import ProductCounterBtn from "./ProductCounterBtn";
import ProductPhotoGalleryGroup from "./ProductPhotoGalleryGroup";
import ProductPhotoGalleryModal from "./ProductPhotoGalleryModal";
import ProductCarouselPhoto from "./ProductCarouselPhoto";

const ProductDetails = ({ product, addToCart }) => {
  const [activePhoto, setActivePhoto] = useState(1);
  const [isPhotoGalleryModalOpen, setIsPhotoGalleryModalOpen] = useState(false);
  const [quantityNumber, setQuantityNumber] = useState(0);

  return (
    <section className="product-detail">
      <div className="product-detail__container">
        <div className="product-detail__left">
          <div className="product-detail__photo-wrapper">
            {product.images.map(({ id }) => (
              <img
                key={id}
                className={`product-detail__photo is-cursor-pointer ${
                  activePhoto === id ? "" : "d-none"
                }`}
                src={getImageURL(product, id)}
                alt={product.name}
                onClick={() => setIsPhotoGalleryModalOpen(true)}
              />
            ))}
          </div>

          <div className="product-detail__photo-wrapper-mobile">
            <ProductCarouselPhoto
              product={product}
              activePhoto={activePhoto}
              setActivePhoto={setActivePhoto}
            />
          </div>

          <ProductPhotoGalleryGroup
            images={product.images}
            activePhoto={activePhoto}
            setActivePhoto={setActivePhoto}
          />
        </div>
        <div className="product-detail__right">
          <p className="product-detail__brand">{product.brand}</p>
          <h1 className="product-detail__name">{product.name}</h1>
          <p className="product-detail__description">{product.description}</p>
          <p className="product-detail__pricing">
            <span className="product-detail__price-after">$125.00</span>
            <span className="product-detail__discount">50%</span>
            <span className="product-detail__price-before">$125.00</span>
          </p>

          <div className="product-detail__btns">
            <ProductCounterBtn
              counter={quantityNumber}
              setCounter={setQuantityNumber}
            />
            <button
              className="product-detail__cart-btn btn"
              onClick={() => {
                addToCart(quantityNumber);
                setQuantityNumber(0);
              }}
            >
              <span className="product-detail__cart-icon"></span>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {isPhotoGalleryModalOpen && (
        <ProductPhotoGalleryModal
          product={product}
          activePhoto={activePhoto}
          setActivePhoto={setActivePhoto}
          setIsPhotoGalleryModalOpen={setIsPhotoGalleryModalOpen}
        />
      )}
    </section>
  );
};

export default ProductDetails;
