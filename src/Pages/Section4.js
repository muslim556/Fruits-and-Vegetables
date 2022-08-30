import React from "react";
import img1 from "../Assets/Images/img11.png";
import img2 from "../Assets/Images/img12.png";
import img3 from "../Assets/Images/img13.png";

const Sec4Data = [
  {
    id: 1,
    img: img1,
    text: "Daily Essentials",
    discount: "20% off Everyday",
  },
  {
    id: 2,
    img: img2,
    text: "Get up to",
    discount: "20% Off",
  },
  {
    id: 3,
    img: img3,
    text: "Special Discount",
    discount: "For All Items",
  },
];

export function Section4() {
  return (
    <section id="sec4">
      <p>Offers</p>
      <p>Best Values</p>
      <div id="sec4_container">
        {Sec4Data.map((item) => {
          return (
            <div id="sec4_cards" key={item.id}>
              <img src={item.img} alt="" />
              <div id="sec4_text_card">
                <p>{item.text}</p>
                <p> {item.discount}</p>
                <button>SHOP NOW</button>
              </div>
            </div>
          );
        })}
      </div>
      <div id="sec4_bottom">
        <p>Get $5 Cashback! Min Order of $50</p>
        <p>USE CODE : COMBOSUPERR2a</p>
      </div>
    </section>
  );
}
