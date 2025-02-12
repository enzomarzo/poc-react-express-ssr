import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import ProductDetail from "./ProductDetail.jsx";

const App = (props) => {
  const { productId, productDetails } = props;
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products/:id"
          element={<ProductDetail productId={productId} productDetails={productDetails}/>}
        />
      </Routes>
    </div>
  );
};

export default App;
