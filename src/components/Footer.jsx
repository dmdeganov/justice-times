import React from "react";
import styled from "styled-components";
import hero from "../images/hero-white-font.png";
import { useSelector } from "react-redux";
import Button from "./Button";
import { Link } from "react-router-dom";
import { isLogined } from "../utils/selectorFns";
import { useDispatch } from "react-redux";
import { logout } from "../slices/userSlice";

const Footer = () => {
  const isAuthorized = useSelector(isLogined);
  const dispatch = useDispatch();

  return isAuthorized ? (
    <>
      <StyledFooter>
        <div className='flex-container'>
          <div className='hero'>
            <img src={hero} alt='' />
          </div>
          <nav className='nav'>
            <div className='links'>
              <Link to='/' className='nav-link active'>
                All articles
              </Link>
              <Link to='/my_articles' className='nav-link'>
                My articles
              </Link>
              <Link to='add_article' className='nav-link'>
                Add article
              </Link>
              <Link to='profile' className='nav-link'>
                Profile
              </Link>
            </div>
            <Button theme='black' onClick={() => dispatch(logout())}>
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
      </StyledFooter>
    </>
  ) : (
    <>
      <StyledFooter>
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
      </StyledFooter>
    </>
  );
};

export default Footer;
const StyledFooter = styled.footer`
  margin-top: 10rem;
  height: 24rem;
  background-color: var(--clr-black);
  padding-top: 7.2rem;

  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 5.2rem;
    .hero {
      width: 26.8rem;
      height: 3.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav {
      display: flex;
      .links {
        display: flex;
        margin-right: 6.4rem;
        align-items: center;
        color: var(--clr-whiter);

        .nav-link {
          text-decoration: none;
          cursor: pointer;
          font-size: 1.5rem;
          &:not(:last-child) {
            margin-right: 4rem;
          }
          &,
          &:active,
          &:hover,
          &:visited {
            color: var(--clr-whiter);
            /* font-size: 3rem; */
          }
          &.active {
            text-decoration: underline;
            text-underline-offset: 8px;
          }
          &.login {
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  .line {
    background: rgba(255, 255, 255, 0.15);
    width: 100%;
    height: 1px;
  }
  .copyright-container {
    display: flex;
    justify-content: space-between;
    color: var(--clr-whiter);
    opacity: 0.5;
    .copyright {
      padding: 2.4rem 0;
      font-size: 1.2rem;
    }
  }
`;
