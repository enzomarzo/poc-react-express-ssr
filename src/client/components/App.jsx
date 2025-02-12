/* eslint-disable react/prop-types */
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import ProductDetail from './ProductDetail.jsx';
import React from 'react';

const App = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const clientSideData = (globalThis.window && window.__INITIAL_DATA__) || null;
  const productId =
    props.productId || (clientSideData && clientSideData.productId) || null;
  const productDetails =
    props.productDetails ||
    (clientSideData && clientSideData.productDetails) ||
    null;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products/:id"
          element={
            <ProductDetail
              productId={productId}
              productDetails={productDetails}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
