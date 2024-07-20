import React from "react";
import { Link } from "react-router-dom";
import '../index.css'
import logo from '../images/icons8-books-98.png'
import search from '../images/icons8-search-30.png'

const Header = () => {
  return (
    <>
      <header className="">
        <nav className="navlinks">
          <div className="upper">
            <div className="upperlinks">
              <div className="upperL"> 
              <div className="homeL">
                <Link to="/" className="links">Home</Link>
              </div>
              <div className="aboutL">
                <Link to="/About" className="links">About Us</Link>
              </div>
              <div className="featuresL">
                <Link to="/Features" className="links">Features</Link>
              </div>
              <div className="helpL">
                <Link to="/Help" className="links">help</Link>
              </div>
              </div>
              <div className="sidelinks">
              <div> <Link to='/Signin' className="links"> Sign In</Link></div>
              <div> <Link to="/Signup" className="links"> Sign Up </Link></div>
            </div>
            </div>
          </div>
          <div className="lower">
            <div className="up">
              <div className="right">
                <img src={logo} alt="books" className="img" />
                <h3 className="header">Laylas Book Store</h3>
              </div>
              <div className="left">
                <form className="form1" >
                  <input className="input"
                    type="text"
                    placeholder="Search for the desired book"
                  />
                  <span><button type="submit" className="btn"> <img src={search} className="btn1" alt="search"></img></button></span>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
