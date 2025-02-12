import React from "react";
import { Button } from "@arrow-dxp/arrow-design-foundation";

const ProductDetail = ({ productId, productDetails }) => {
  const { title, price } = productDetails || null;
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Product ID: {productId || ""}</h1>
      <p>Product Name: {title || ""}</p>
      <p>Product Price: ${price || ""}</p>
      <br />

      <Button disable label={`SSR prod ID: ${productId}`} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <Button
        onClick={() => setCount(count + 1)}
        label={`CSR changes: ${count}`}
      />
    </div>
  );
};

export default ProductDetail;
