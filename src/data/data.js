// Assets
import productThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";

const productData = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  price: 250,
  discount: 50,
  brand: "Sneaker Company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  images: [
    { id: 1, imageFull: product1, imageThumbnail: productThumbnail1 },
    { id: 2, imageFull: product2, imageThumbnail: productThumbnail2 },
    { id: 3, imageFull: product3, imageThumbnail: productThumbnail3 },
    { id: 4, imageFull: product4, imageThumbnail: productThumbnail4 },
  ],
};

export { productData };
