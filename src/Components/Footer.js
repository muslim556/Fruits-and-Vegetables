import React from "react";
import logo from "../Assets/Icons/footer_logo.svg";
import appstore from "../Assets/Icons/app_store.svg";
import playmarket from "../Assets/Icons/google_play.svg";
import visa from "../Assets/Icons/visa.svg";
import mastecard from "../Assets/Icons/MasterCard.svg";
import maestro from "../Assets/Icons/Maestro.svg";
import cirus from "../Assets/Icons/Cirrus.svg";
import american_express from "../Assets/Icons/AmericanExpress.svg";

export function Footer() {
  return (
    <footer id="footer">
      <div id="footer_top_container">
        <div id="footer_logo_card">
          <img src={logo} alt="" />
          <p>Address: 60-49 Road 11378 New York</p>
          <p>Phone: +65 11.188.888</p>
          <p>Email: hello@colorlib.com</p>
        </div>
        <div id="footer_link_card">
          <p>Useful Link</p>
          <a href="!#">About us</a>
          <a href="!#">About our shop</a>
          <a href="!#">Delivery information</a>
          <a href="!#">Privacy policy</a>
          <a href="!#">Our sitemap</a>
        </div>
        <div id="footer_link_card">
          <a href="!#">Home</a>
          <a href="!#">Product</a>
          <a href="!#">Contact</a>
          <a href="!#">Stores</a>
        </div>
        <div id="footer_inp_card">
          <p>Download App</p>
          <div id="app_play_card">
            <a href="https://www.apple.com/ru/app-store/" target="blank">
              <img src={appstore} alt="" />
            </a>
            <a
              href="https://play.google.com/store/games?hl=ru&gl=US"
              target="blank"
            >
              <img src={playmarket} alt="" />
            </a>
          </div>
          <p>Sign Up for Our Newsletter</p>
          <div id="inputs_card">
            <input type="email" placeholder="Enter email address" />
            <input type="submit" value="SUBSCRIBE " />
          </div>
          <p>Payment Method</p>
          <div id="payment_card">
            <a href="https://usa.visa.com/" target="blank">
              <img src={visa} alt="" />
            </a>
            <a href="https://www.mastercard.ru/ru-ru.html" target="blank">
              <img src={mastecard} alt="" />
            </a>
            <a href="https://www.maestro.com" target="blank">
              <img src={maestro} alt="" />
            </a>
            <a
              href="https://brand.mastercard.com/brandcenter.html"
              target="blank"
            >
              <img src={cirus} alt="" />
            </a>
            <a href="https://www.americanexpress.com" target="blank">
              <img src={american_express} alt="" />
            </a>
          </div>
        </div>
      </div>
      <p>
        Copyright ©2021 All rights reserved | This template is made with 💚 by
        LOGO
      </p>
    </footer>
  );
}
