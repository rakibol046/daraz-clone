import React from "react";
import Nav from "./nav/Nav";
import Banner from "./banner/Banner";
import CardChannel from "./card-channel/CardChannel";
import Product from "./products/Product";
import FlashSale from "./products/FlashSale";
import Categories from "./products/Categories";
import Mall from "./products/Mall";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="lg:px-36">
        <Banner />
        <CardChannel />
        <FlashSale />
        <Mall />
        <Categories />
        <Product />
      </section>
    </>
  );
};

export default Home;
