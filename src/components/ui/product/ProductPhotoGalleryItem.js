const ProductPhotoGalleryItem = ({
  id,
  image,
  activePhoto,
  setActivePhoto,
}) => {
  return (
    <div
      className={`product-detail-gallery-item ${
        activePhoto === id ? "product-detail-gallery-item--active" : ""
      }`}
      onClick={() => setActivePhoto(id)}
    >
      <img
        className="product-detail-gallery-item__photo"
        src={image}
        alt={`Product ${id}`}
      />
    </div>
  );
};

export default ProductPhotoGalleryItem;
