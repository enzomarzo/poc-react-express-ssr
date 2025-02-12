import { Link } from "react-router-dom";
import { Button } from "@arrow-dxp/arrow-design-foundation";

function Navbar() {
  return (
    <div style={{
      display: "flex",
      gap: '10px',
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Button label="React Button Props" />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
