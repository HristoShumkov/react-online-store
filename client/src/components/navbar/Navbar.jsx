import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/"><p>Home</p></Link>
        <Link to="/login"><p>Login</p></Link>
        <Link to="/register"><p>Register</p></Link>
        <Link to="/catalog"><p>Catalog</p></Link>
        <Link to="/details"><p>Details</p></Link>
        <Link to="/user"><p>User</p></Link>
        <Link to="/saved"><p>Saved</p></Link>
        <Link to="/bought"><p>Bought</p></Link>
        <Link to="/sell"><p>Sell</p></Link>
        <Link to="/edit"><p>Edit</p></Link>
      </nav>
    </>
  )
}
