import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navbar() {
  const { username, profilePic, isAuthenticated } = useContext(AuthContext);

  return (
    <nav>
      <Link to='/'><img src="/buystuff-logo.png" id="logo" alt="buyStuff Logo" /></Link>
      <div className='align-center'>
        <Link to='/catalog'><button className="button-secondary">Catalog</button></Link>
        {!isAuthenticated && (
        <Link to="/login"><button className="button-main">Sign in</button></Link>
        )}
         {isAuthenticated && (
          <div className='button-secondary' id='user-button' onClick={() => setToggle(!toggle)}>
            <p>{username}</p>
            <img src={profilePic} alt='pfp' className='pfp-icon' />
            {/* {(toggle && isAuthenticated) && (
              <ul className='option-container'>
                <Link to='/user' style={{ textDecoration: 'none' }}><li className='button-secondary'>User details</li></Link>
                <Link to='/watchlist' style={{ textDecoration: 'none' }}><li className='button-secondary'>My Watchlist</li></Link>
                <Link to='/myreviews' style={{ textDecoration: 'none' }}><li className='button-secondary'>Reviewed Movies</li></Link>
                <div className='divider'></div>
                <li className='button-secondary' onClick={onLogout}>Logout</li>
              </ul>
            )}  */}
      </div>
      )
        }
      </div>
    </nav >
  )
}
