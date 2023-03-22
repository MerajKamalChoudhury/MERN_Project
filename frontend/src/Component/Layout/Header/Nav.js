import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
// import { useCartContext } from "../context/cart_context";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  // const {total_item} = useCartContext();

  const Nav = styled.nav`
    .dropdown-menu{
      background: "transparent";
      border: "none";
      font-size: "15px";

    }
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

    .brandsName{
      margin-right: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
    }

    .ddbrand{
    font-family: 'Bebas Neue',sans-serif;
    margin-right: 30px;
    }

    button{
      width: 30px;
      font-size: 20px;
      border: none;
    }

    .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.4rem;
          font-weight: 500;
          text-transform: uppercase;
          color: " #212529";
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: "#8490ff";
        }
      }
      .searchUnderline{
        position: absolute;
        margin-left: -58px;
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 2rem;
      }

      .cart-total--item {
        width: 2rem;
        height: 2rem;
        position: absolute;
        background-color: #fff;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width:"768px") {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: " #212529";

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: " #212529";
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: " #212529";
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 3.2rem;
        }
        .searchUnderline {
          position: absolute;
          margin-left: -104px;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

 

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">


          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li> 
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}>
              {/* Search */}
              <span style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "18px" }} >Search</span>
              {/* <span className="searchUnderline"
              >____________</span> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}>
              <span style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "18px" }}>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}>
              <span style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "18px" }}>LOGIN</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> 10 </span>
            </NavLink>
          </li>
        </ul>

        {/* <ul className="navbar-lists">

          <div className="navComp">
            <NavLink to="#" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="searchNavbar" style={{ cursor: 'pointer' }}>
                <span>Search</span>
                <span className="searchUnderline">_______________</span>
              </div>
            </NavLink>
            <div className="lhNav">
              <NavLink to="#" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="loginNavebar" style={{ cursor: 'pointer' }}>Login</div>
              </NavLink>
              <NavLink to="#" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="helpNavebar" style={{ cursor: 'pointer' }}>Help</div>
              </NavLink>
            </div>
          </div>
        </ul> */}

        {/* <div className="set-pos" style={{
          marginLeft: '30px',
          marginRight: '17px'
        }}>
          <CartIcon className='cart-icon'>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> 10 </span>
            </NavLink>
          </CartIcon>
        </div> */}

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div >
    </Nav >
  );
};

export default Nav;
