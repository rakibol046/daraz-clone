import React from "react";

const Categories = () => {
  const products = [
    {
      image: "./images/def4db2bafa9ac0b38500a444269dfdd.jpg",
      name: "Game keys & codes",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/3cb1c30e1da4aa5169d6e476290ee65d.jpg",
      name: "Rigns",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/01c8c6a1b841e3645115bceaf9dc4c69.jpg",
      name: "Cabals ",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pure.jpg",
      name: "pure fillter",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/cap.jpg",
      name: "US polo ",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/headphone.jpg",
      name: "Aukey EP",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pad.jpg",
      name: "2pis  ",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/headphone.jpg",
      name: "Aukey EP",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pad.jpg",
      name: "2pis  ",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/headphone.jpg",
      name: "Aukey EP",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pad.jpg",
      name: "2pis  ",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/headphone.jpg",
      name: "Aukey EP",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pad.jpg",
      name: "2pis  ",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pad.jpg",
      name: "2pis is no  ",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/headphone.jpg",
      name: "Aukey EP",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pad.jpg",
      name: "2pis sdgjk  ",
      price: "$ 190",
      discount: "245 -22%",
    },
  ];
  return (
    <div>
      <div className="products">
        <div className="text-2xl px-4 text-orange-600 py-4 lg:px-0">
          Catagoris
        </div>
        <div className="product-cards grid grid-cols-3 gap-px md:grid-cols-5 lg:grid-cols-8 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card bg-white shadow-sm hover:shadow-md p-3 h-40"
            >
              <img
                className="h-24 w-full object-cover p-3"
                src={product.image}
                alt=""
              />

              <p className="text-center">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
