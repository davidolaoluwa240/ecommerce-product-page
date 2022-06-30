// Components
import ProductPhotoGalleryItem from "./ProductPhotoGalleryItem";

const ProductPhotoGalleryGroup = ({ images, activePhoto, setActivePhoto }) => {
  return (
    <div className="product-detail__gallery-group">
      {images.map(({ id, imageThumbnail }) => (
        <ProductPhotoGalleryItem
          key={id}
          id={id}
          image={imageThumbnail}
          activePhoto={activePhoto}
          setActivePhoto={setActivePhoto}
        />
      ))}
    </div>
  );
};

export default ProductPhotoGalleryGroup;
