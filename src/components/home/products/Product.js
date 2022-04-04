import React from "react";

const Product = () => {
  const products = [
    {
      image: "./images/cap.jpg",
      name: "US polo sports Cap",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/headphone.jpg",
      name: "Aukey EP-B52 Over Head Bluetooth Headset - Black",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pad.jpg",
      name: "2pis Tens Adhesive Electrode Pads For Acupuncture Digital ",
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
      name: "US polo sports Cap",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/headphone.jpg",
      name: "Aukey EP-B52 Over Head Bluetooth Headset - Black",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pad.jpg",
      name: "2pis Tens Adhesive Electrode Pads For Acupuncture Digital ",
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
      name: "US polo sports Cap",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/headphone.jpg",
      name: "Aukey EP-B52 Over Head Bluetooth Headset - Black",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pad.jpg",
      name: "2pis Tens Adhesive Electrode Pads For Acupuncture Digital ",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/pure.jpg",
      name: "pure fillter",
      price: "$ 190",
      discount: "245 -22%",
    },
  ];
  return (
    <div>
      <div className="products">
        <div className="text-2xl px-4 text-orange-600 py-4 lg:px-0">
          Just For You
        </div>
        <div className="product-cards grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-6 lg:gap-3  ">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card bg-white shadow-sm hover:shadow-md p-3 h-80"
            >
              <img
                className="h-40 w-full object-cover"
                src={product.image}
                alt=""
              />

              <p className="">{product.name}</p>
              <p className="text-orange-600 text-lg">{product.price}</p>
              <p>{product.discount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
