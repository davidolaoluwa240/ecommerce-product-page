const getImageURL = (product, id) => {
  return product.images.find((image) => image.id === id).imageFull;
};

export default getImageURL;
