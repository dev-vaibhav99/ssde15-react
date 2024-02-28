import { Link } from "react-router-dom";

function Navbar() {
  return (
   <div style={{width: "100%", height: "3rem", backgroundColor: "lightgray"}}>
        <Link to="/home" style={{marginRight: "1rem"}}>Home</Link>
        <Link to="/about" style={{marginRight: "1rem"}}>About</Link>
        <Link to="/contact" style={{marginRight: "1rem"}}>Contact Us</Link>
   </div>
  );
}

export default Navbar;