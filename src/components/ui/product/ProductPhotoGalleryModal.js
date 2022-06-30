// Components
import ProductPhotoGalleryGroup from "./ProductPhotoGalleryGroup";
import ProductCarouselPhoto from "./ProductCarouselPhoto";

const ProductPhotoGalleryModal = ({
  product,
  activePhoto,
  setActivePhoto,
  setIsPhotoGalleryModalOpen,
}) => {
  return (
    <section
      className="product-photo-gallery-modal is-cursor-pointer"
      onClick={() => setIsPhotoGalleryModalOpen(false)}
    >
      <div
        className="product-photo-gallery-modal__container is-cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="product-photo-gallery-modal__top">
          <ProductCarouselPhoto
            product={product}
            activePhoto={activePhoto}
            setActivePhoto={setActivePhoto}
          />
        </div>
        <div className="product-photo-gallery-modal__bottom">
          {product.images.length > 1 && (
            <ProductPhotoGalleryGroup
              images={product.images}
              activePhoto={activePhoto}
              setActivePhoto={setActivePhoto}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductPhotoGalleryModal;
