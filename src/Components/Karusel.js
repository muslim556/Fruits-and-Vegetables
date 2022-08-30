import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Sec1() {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
  };
  return (
    <div id="sec-1">
      <Slider {...settings} className="slider">
        {MyData.map((item, index) => {
          return (
            <div key={index}>
              <div id="s1-card">
                <img src={item.img} id="s1-img" alt="" />

                <div id="s1-texts">
                  <p id="s1-t-1">{item.sale}</p>
                  <p id="s1-t-2">{item.text1}</p>
                  <p id="s1-t-3">{item.text2}</p>
                </div>

                <button id="s1-btn">SHOP NOW</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

const MyData = [
  {
    img: "",
    sale: "10% OFF",
    text1: "Buy More & Save More",
    text2: "Nuts & Snacks",
  },
  {
    img: "",
    sale: "10% OFF",
    text1: "Buy More & Save More",
    text2: "Nuts & Snacks",
  },
  {
    img: "",
    sale: "10% OFF",
    text1: "Buy More & Save More",
    text2: "Nuts & Snacks",
  },
  {
    img: "",
    sale: "10% OFF",
    text1: "Buy More & Save More",
    text2: "Nuts & Snacks",
  },
  {
    img: "",
    sale: "10% OFF",
    text1: "Buy More & Save More",
    text2: "Nuts & Snacks",
  },
];
