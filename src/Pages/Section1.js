import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assets/Images/img1.png";
import img2 from "../Assets/Images/img2.png";
import img3 from "../Assets/Images/img3.png";
import img4 from "../Assets/Images/img4.png";
import img5 from "../Assets/Images/img5.png";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 5,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src=""
      alt=""
      className={className}
      style={{ ...style, display: "none", width: "30px", height: "30px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src=""
      alt=""
      className={className}
      style={{ ...style, display: "none", width: "30px", height: "30px" }}
      onClick={onClick}
    />
  );
}
export function Section1() {
  const Sec1Data = [
    {
      id: 1,
      img: img1,
      discount: "6%",
      motto: "Buy More & Save More",
      type: "Beverage",
    },
    {
      id: 2,
      img: img2,
      discount: "6%",
      motto: "Buy More & Save More",
      type: "Beverage",
    },
    {
      id: 3,
      img: img3,
      discount: "6%",
      motto: "Buy More & Save More",
      type: "Beverage",
    },
    {
      id: 4,
      img: img4,
      discount: "6%",
      motto: "uy More & Save More",
      type: "Beverage",
    },
    {
      id: 5,
      img: img5,
      discount: "6%",
      motto: "Buy More & Save More",
      type: "Beverage",
    },
    {
      id: 1,
      img: img1,
      discount: "6%",
      motto: "Buy More & Save More",
      type: "Beverage",
    },
    {
      id: 2,
      img: img2,
      discount: "6%",
      motto: "Buy More & Save More",
      type: "Beverage",
    },
    {
      id: 3,
      img: img3,
      discount: "6%",
      motto: "Buy More & Save More",
      type: "Beverage",
    },
    {
      id: 4,
      img: img4,
      discount: "6%",
      motto: "uy More & Save More",
      type: "Beverage",
    },
    {
      id: 5,
      img: img5,
      discount: "6%",
      motto: "Buy More & Save More",
      type: "Beverage",
    },
  ];

  return (
    <>
      <section id="sec1">
        <Slider
          {...settings}
          style={{
            width: "1580px",
          }}
        >
          {Sec1Data.map((item) => {
            return (
              <div id="sec1_cards" key={item.id}>
                <img src={item.img} alt="" />
                <div id="sec1_discount_card">
                  <p>{item.discount} OFF</p>
                  <p>{item.motto}</p>
                  <p>{item.type}</p>
                </div>
                <button>Shop Now</button>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
}
