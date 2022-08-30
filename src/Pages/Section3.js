import React, { useState } from "react";
import Slider from "react-slick";
import like from "../Assets/Icons/like2.svg";
import img6 from "../Assets/Images/img6.png";
import img7 from "../Assets/Images/img7.png";
import img8 from "../Assets/Images/img8.png";
import img9 from "../Assets/Images/img9.png";
import img10 from "../Assets/Images/img10.png";
import leftarrow from "../Assets/Icons/arrow_left.svg";
import rightarrow from "../Assets/Icons/arrow_right.svg";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
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



export function Section3() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Fresh organic apricot",
      price: 20,
      count: 0,
      img: img6,
      like: true,
      discount: 20,
    },
    {
      id: 1,
      name: "Cucumber",
      price: 7,
      count: 0,
      img: img7,
      like: true,
      discount: 9,
    },
    {
      id: 2,
      name: "Hazelnuts filbert nut",
      price: 30,
      count: 0,
      img: img8,
      like: true,
      discount: 80,
    },
    {
      id: 3,
      name: "Raw broccoli",
      price: 30,
      count: 0,
      img: img9,
      like: true,
      discount: 33,
    },
    {
      id: 4,
      name: "Organic quince",
      price: 100,
      count: 0,
      img: img10,
      like: true,
      discount: 2,
    },
    {
      id: 5,
      name: "Fresh organic apricot",
      price: 20,
      count: 0,
      img: img6,
      like: true,
      discount: 20,
    },
    {
      id: 6,
      name: "Cucumber",
      price: 7,
      count: 0,
      img: img7,
      like: true,
      discount: 9,
    },
    {
      id: 7,
      name: "Hazelnuts filbert nut",
      price: 30,
      count: 0,
      img: img8,
      like: true,
      discount: 80,
    },
    {
      id: 8,
      name: "Raw broccoli",
      price: 32,
      count: 0,
      img: img9,
      like: true,
      discount: 33,
    },
    {
      id: 9,
      name: "Organic quince",
      price: 100,
      count: 0,
      img: img10,
      like: true,
      discount: 2,
    },
  ]);

  const minus = (id) => {
    setProducts((products) =>
      products.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
          : item
      )
    );
  };

  const plus = (id) => {
    setProducts((products) =>
      products.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  return (
    <section id="sec3">
      <p>For You</p>
      <p>Top Featured Products</p>
      <div id="overall_card">
        <p>
          Overall
          {"  " +
            (products.reduce((a, b) => a + b.count * b.price, 0) -
              products.reduce(
                (a, b) => a + (b.price / 100) * b.discount * b.count,
                0
              ))}
          $
        </p>
      </div>
      <div id="sec3_cards_container">
        <Slider
          {...settings}
          style={{
            width: "100%",
          }}
        >
          {products.map((item, id) => {
            return (
              <div id="card" key={item.id}>
                <div id="discount_card">
                  <p>{item.discount} %off</p>
                  <button>
                    <img src={like} alt="" />
                  </button>
                </div>
                <div id="img_card">
                  <img src={item.img} alt="" />
                </div>
                <div id="price_card">
                  <p>Available(in stock) </p>
                  <p>{item.name}</p>
                  <p>
                    {item.price - (item.price / 100) * item.discount}
                    <s>{item.price}</s>
                  </p>
                </div>
                <div id="btns_card">
                  <button onClick={() => minus(item.id)}>-</button>
                  <p>{item.count}</p>
                  <button onClick={() => plus(item.id)}>+</button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
