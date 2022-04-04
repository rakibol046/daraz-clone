import React from "react";
import { Link } from "react-router-dom";

const FlashSale = () => {
  const products = [
    {
      image:
        "./images/62bb6c4fcb9d42d5ce210f3eb762c35e.jpg_400x400q75-product.jpg",
      name: "US polo sports Cap",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/0aabfe504460092e072998e07e3dd4e3.jpg",
      name: "Aukey EP-B52 Over Head Bluetooth Headset - Black",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image: "./images/01c8c6a1b841e3645115bceaf9dc4c69.jpg",
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
      image:
        "./images/62bb6c4fcb9d42d5ce210f3eb762c35e.jpg_400x400q75-product.jpg",
      name: "US polo sports Cap",
      price: "$ 190",
      discount: "245 -22%",
    },
    {
      image:
        "./images/09a825ad88799f2c3cfe5538e391990f.jpg_400x400q75-product.jpg",
      name: "Aukey EP-B52 Over Head Bluetooth Headset - Black",
      price: "$ 190",
      discount: "245 -22%",
    },
  ];
  return (
    <div>
      <div className="products w-full">
        <div className="text-2xl px-4 text-orange-600 py-4 lg:px-0">
          Flash Sale
        </div>

        <div className="grid items-center  grid-cols-1 lg:grid-cols-2   h-12 w-full bg-white shadow-sm clear-both mb-0.5">
          <div className="text-center lg:text-left">
            <span className=" text-orange-600 pr-4 lg:pr-10 lg:px-10">
              On Sale Now
            </span>
            <span className="">
              Ending in{" "}
              <span className="p-2  bg-orange-600  text-white">00</span> :{" "}
              <span className="p-2 bg-orange-600 text-white">00</span> :{" "}
              <span className="p-2 bg-orange-600 text-white">00</span>
            </span>
          </div>
          <div className="hidden lg:block  text-right px-5">
            <Link
              className=" outline-1 outline outline-orange-700 text-orange-700 py-1 px-2"
              to=""
            >
              Shop More
            </Link>
          </div>
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

export default FlashSale;
