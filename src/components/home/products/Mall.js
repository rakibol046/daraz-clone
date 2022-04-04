import React from "react";
import { Link } from "react-router-dom";

const Mall = () => {
  const products = [
    {
      image: "./images/8768e6c93742929b2c011d2df9fb4de0.jpg",
      image2nd: "./images/2e795ea83e1a4e347c7434edd7a6a76f.png",
      name: "Adarsh",

      title: "Refreshing set of book",
    },
    {
      image: "./images/821cbd22c49ef140f778bf11dea15f98.jpg",
      image2nd: "./images/cef3ab12e0513cf6f8a518ad3de0fc8d.jpeg",
      name: "Philips",
      title: "Snse & Simplicity",
    },
    {
      image: "./images/6a2ef6f4d459c7cf297e2e91a4033f0c.jpg",
      image2nd: "./images/63e2cbcad8bbea9bd83b2c66433a7b11.jpeg",
      name: "UGC",
      title: "It's Your game",
    },
    {
      image: "./images/pure.jpg",
      image2nd: "./images/2e795ea83e1a4e347c7434edd7a6a76f.png",
      name: "Adarsh",
      title: "Refreshing set of book",
    },
    {
      image: "./images/cap.jpg",
      image2nd: "./images/2e795ea83e1a4e347c7434edd7a6a76f.png",
      name: "Adarsh",
      title: "Refreshing set of book",
    },
    {
      image: "./images/headphone.jpg",
      image2nd: "./images/2e795ea83e1a4e347c7434edd7a6a76f.png",
      name: "Adarsh",
      title: "Refreshing set of book",
    },
  ];
  return (
    <div>
      <div className="products w-full clear-both">
        <div className="w-full grid grid-cols-2 items-center">
          <div className="text-2xl px-4 text-orange-600 py-4 lg:px-0 ">
            Mall
          </div>
          <div className="text-orange-600 text-right pr-5">Shop More &gt;</div>
        </div>

        <div className="product-cards grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-6 lg:gap-3  clear-both">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card bg-white shadow-sm hover:shadow-md  h-68"
            >
              <img
                className="h-44 w-full object-cover"
                src={product.image}
                alt=""
              />
              <div className="grid items-center justify-center">
                <div className="h-14 w-14 p-1 -mt-7 bg-white outline outline-1 outline-gray-300 shadow-md">
                  <img
                    className=" w-full bg-gray-100  object-cover"
                    src={product.image2nd}
                    alt=""
                  />
                </div>
              </div>

              <div className="text-center">
                <p className="">{product.name}</p>
                <p className="text-gray-500 text-sm pb-5">{product.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mall;
