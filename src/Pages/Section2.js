import React from "react";
import Slider from "react-slick";
import apple from "../Assets/Icons/apple.svg";
import shopping_cart from "../Assets/Icons/shopping_cart.svg";
import milk from "../Assets/Icons/milk.svg";
import groceries from "../Assets/Icons/groceries.svg";
import snacks from "../Assets/Icons/snacks.svg";
import home from "../Assets/Icons/house.svg";
import leftarrow from "../Assets/Icons/arrow_left.svg";
import rightarrow from "../Assets/Icons/arrow_right.svg";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={leftarrow}
      alt=""
      className={className}
      style={{ ...style, display: "block", width: "30px", height: "30px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={rightarrow}
      alt=""
      className={className}
      style={{ ...style, display: "block", width: "30px", height: "30px" }}
      onClick={onClick}
    />
  );
}

export function Section2() {
  const Sec2Data = [
    {
      id: 1,
      img: apple,
      type: "Vegetables & Fruits",
    },
    {
      id: 2,
      img: shopping_cart,
      type: "Grocery & Staples",
    },
    {
      id: 3,
      img: milk,
      type: "Dairy & Eggs",
    },
    {
      id: 4,
      img: groceries,
      type: "Beverages",
    },
    {
      id: 5,
      img: snacks,
      type: "Snacks",
    },
    {
      id: 6,
      img: home,
      type: "Home Care",
    },
    {
      id: 1,
      img: apple,
      type: "Vegetables & Fruits",
    },
    {
      id: 2,
      img: shopping_cart,
      type: "Grocery & Staples",
    },
    {
      id: 3,
      img: milk,
      type: "Dairy & Eggs",
    },
    {
      id: 4,
      img: groceries,
      type: "Beverages",
    },
    {
      id: 5,
      img: snacks,
      type: "Snacks",
    },
    {
      id: 6,
      img: home,
      type: "Home Care",
    },
  ];
  return (
    <section id="sec2">
      <p>Shop By</p>
      <p>Categories</p>
      <div id="sec2_cards_container">
        <Slider
          {...settings}
          style={{
            width: "1150px",
          }}
        >
          {Sec2Data.map((item) => {
            return (
              <div id="sec2_cards">
                <img src={item.img} alt="" />
                <p>{item.type}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
