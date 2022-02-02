import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import hero from "../images/hero-white-font.png";
import Button from "./Button";
import { isLogined } from "../utils/selectorFns";
import { logout } from "../slices/userSlice";
import "./Footer.scss";

const Footer = () => {
  const { pathname: location } = useLocation();

  const isAuthorized = useSelector(isLogined);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return isAuthorized ? (
    <>
      <footer>
        <div className='flex-container'>
          <div className='hero'>
            <img src={hero} alt='' />
          </div>
          <nav className='nav'>
            <div className='links'>
              <Link
                to='/'
                className={`nav-link${location === "/" ? " active" : ""}`}
              >
                All articles
              </Link>
              <Link
                to='/my_articles'
                className={`nav-link${
                  location === "/my_articles" ? " active" : ""
                }`}
              >
                My articles
              </Link>
              <Link
                to='add_article'
                className={`nav-link${
                  location === "/add_article" ? " active" : ""
                }`}
              >
                Add article
              </Link>
              <Link
                to='profile'
                className={`nav-link${
                  location === "/profile" ? " active" : ""
                }`}
              >
                Profile
              </Link>
            </div>
            <Button theme='black' onClick={logoutHandler}>
              Logout
            </Button>
          </nav>
        </div>
        <div className='line'></div>
        <div className='copyright-container'>
          <div className='copyright'>
            {`© ${new Date().getFullYear()} Justice-it. All rights reserved.`}
          </div>
          <div className='copyright'>
            {`© ${new Date().getFullYear()} Justice-it. All rights reserved.`}
          </div>
        </div>
      </footer>
    </>
  ) : (
    <>
      <footer>
        <div className='flex-container'>
          <div className='hero'>
            <img src={hero} alt='' />
          </div>
          <nav className='nav'>
            <div className='links'>
              <Link to='/login' className='nav-link login'>
                Login
              </Link>
            </div>

            <Link to='/signup'>
              <Button theme='black'>Sign in</Button>
            </Link>
          </nav>
        </div>
        <div className='line'></div>
        <div className='copyright-container'>
          <div className='copyright'>
            {`© ${new Date().getFullYear()} Justice-it. All rights reserved.`}
          </div>
          <div className='copyright'>
            {`© ${new Date().getFullYear()} Justice-it. All rights reserved.`}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
