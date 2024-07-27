import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    // <>
    //   <nav>
    //     <Link to="/"><p>Home</p></Link>
    //     <Link to="/login"><p>Login</p></Link>
    //     <Link to="/register"><p>Register</p></Link>
    //     <Link to="/catalog"><p>Catalog</p></Link>
    //     <Link to="/user"><p>User</p></Link>
    //     <Link to="/saved"><p>Saved</p></Link>
    //     <Link to="/bought"><p>Bought</p></Link>
    //     <Link to="/sell"><p>Sell</p></Link>
    //     <Link to="/edit"><p>Edit</p></Link>
    //   </nav>
    // </>
    <nav>
      <Link to='/'><img src="/public/buystuff-logo.png" id="logo" alt="buyStuff Logo" /></Link>
      <div className='align-center'>
        <Link to='/catalog'><button className="button-secondary">Catalog</button></Link>
        {/* {!isAuthenticated && ( */}
        <Link to="/login"><button className="button-main">Sign in</button></Link>
        {/*)}
         {isAuthenticated && (
          <div className='button-secondary' id='user-button' onClick={() => setToggle(!toggle)}>
            <p>{username}</p>
            <img src={profilePic} alt='pfp' className='pfp-icon' />
            {(toggle && isAuthenticated) && (
              <ul className='option-container'>
                <Link to='/user' style={{ textDecoration: 'none' }}><li className='button-secondary'>User details</li></Link>
                <Link to='/watchlist' style={{ textDecoration: 'none' }}><li className='button-secondary'>My Watchlist</li></Link>
                <Link to='/myreviews' style={{ textDecoration: 'none' }}><li className='button-secondary'>Reviewed Movies</li></Link>
                <div className='divider'></div>
                <li className='button-secondary' onClick={onLogout}>Logout</li>
              </ul>
            )} 
      </div>
      )
        }*/}
      </div>
    </nav >
  )
}
