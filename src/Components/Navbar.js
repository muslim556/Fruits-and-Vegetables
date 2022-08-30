import React from "react";
import email from "../Assets/Icons/email.svg";
import facebook from "../Assets/Icons/facebook.svg";
import whatsap from "../Assets/Icons/whatapp.svg";
import linkidn from "../Assets/Icons/linkeidn.svg";
import twitter from "../Assets/Icons/twitter.svg";
import logo from "../Assets/Icons/logo.svg";
import location from "../Assets/Icons/location.svg";
import search from "../Assets/Icons/search.svg";
import phone from "../Assets/Icons/phone.svg";
import like from "../Assets/Icons/like.svg";
import user from "../Assets/Icons/user.svg";
import menu from "../Assets/Icons/menu.svg"
import cart from "../Assets/Icons/cart.svg"


export function Navbar() {
  return (
    <nav id="nav">
      <div id="first_nav">
        <img src={email} alt="" />
        <a href="mailto:muslimbeknajmiddinov31@gmail.com" target="blank">
          Hello@colorlib.com
        </a>
        <span></span>
        <p>Free Shipping for all order of $99</p>
        <img src={facebook} alt="" />
        <img src={whatsap} alt="" />
        <img src={linkidn} alt="" />
        <img src={twitter} alt="" />
      </div>
      <div id="second_nav">
        <div id="second_nav_left">
          <img src={logo} alt="" />
          <div id="location_card">
            <img src={location} alt="" />
            <p>Gurugram</p>
          </div>
          <div id="search_card">
            <img src={search} alt="" />
            <input type="search"placeholder="Search for products..."/>
          </div>
        </div>
        <div id="second_nav_right">
          <div id="phone_card">
            <img src={phone} alt="" />
            <a href="tel:+998911831282">1800-000-000</a>
          </div>
          <div id="like_card">
            <span></span>
            <img src={like} alt="" />
            <span></span>
          </div>
          <div id="user_card">
            <img src={user} alt="" />
            <a href="https://t.me/muslim_1233">John Doe</a>
          </div>
        </div>
      </div>
      <div id="third_nav">
        <button>
          <img src={menu} alt="" />
          <p>Select Categories</p>
        </button>
        <div id="nav_link_card">
          <a href="/">Home</a>
          <a href="/">Product</a>
          <a href="/">Stores</a>
          <a href="/">Contact</a>
        </div>
        <div id="cart">
          <img src={cart} alt="" />
          <p>CART 2</p>
        </div>
      </div>
    </nav>
  );
}
