import React from 'react';
import './ProductCard.css';
function ProductCard({ productDetails }) {
  const { productId, productPic, productName, Brand, productDescription, Price, Rating } = productDetails;

  const addToCart = () => {
    alert(`Product of ID ${productId}, which is ${productName} of brand ${Brand} has a price of ${Price} is added in the cart, please proceed to pay!!!`);
    // Add code to add product to cart here
  };

  return (
    <div className="card">
      <img src={productPic} alt={productName} />
      <h2>{productName}</h2>
      <p>{Brand}</p>
      <p>{productDescription}</p>
      <p>Price: {Price}</p>
      <p>Rating: {Rating} / 5</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
