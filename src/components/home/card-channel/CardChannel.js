import React from "react";

const CardChannel = () => {
  return (
    <div className="grid grid-cols-2 gap-1  md:grid-cols-3 lg:grid-cols-5 lg:gap-5 xl:grid-cols-5 mt-5">
      <div className="channel">
        <img src="./images/mall.gif" alt="" width={"25px"} />
        <span className="pl-1">Mall</span>
      </div>
      <div className="channel">
        <img src="./images/car.gif" alt="" width={"25px"} />
        <span className="pl-1"> Free Shipping</span>
      </div>
      <div className="channel">
        <img src="./images/bascat.gif" alt="" width={"25px"} />
        <span className="pl-1">Super Market</span>
      </div>
      <div className="channel">
        <img src="./images/tshart.gif" alt="" width={"25px"} />
        <span className="pl-1">Fashion</span>
      </div>
      <div className="channel">
        <img src="./images/beauty.gif" alt="" width={"25px"} />
        <span className="pl-1">Beauty & Glamour</span>
      </div>
    </div>
  );
};

export default CardChannel;
