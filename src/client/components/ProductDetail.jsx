/* eslint-disable react/prop-types */
import { Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Button } from '@arrow-dxp/arrow-design-foundation';

const ProductDetail = ({ productId, productDetails }) => {
  const { title, price } = productDetails || null;
  const [count, setCount] = React.useState(0);
  const theme = useTheme();

  return (
    <Stack>
      <Typography variant="h3" color={theme.palette.secondary.main}>
        Product ID: {productId}
      </Typography>
      <h3>Product ID: {productId}</h3>

      <Typography variant="body1" color={theme.palette.primary.main}>
        Product Name: {title}
      </Typography>
      <Typography variant="body1" color={theme.palette.primary.main}>
        <p>Product Price: {price}</p>
      </Typography>

      <br />
      <Button disable label={`SSR prod ID: ${productId}`} />
      <Typography variant="body1" color={theme.palette.primary.main}>
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
      </Typography>
      <Button
        onClick={() => setCount(count + 1)}
        label={`CSR changes: ${count}`}
      />
    </Stack>
  );
};

export default ProductDetail;
