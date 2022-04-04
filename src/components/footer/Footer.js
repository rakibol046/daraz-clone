import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <section className="footer-top px-2 lg:px-36 mt-5  text-white py-5 grid grid-cols-2 sm:grid-cols-2 gap-5   md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3>Customer Care</h3>
          <ul className="text-xs">
            <li>
              <Link to="">Help Center</Link>
            </li>
            <li>
              <Link to="">How to Buy</Link>
            </li>
            <li>
              <Link to="">Returns & Refunds</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
            <li>
              <Link to="">Terms & Conditions</Link>
            </li>
          </ul>
          <h3 className="mt-5">Earn With Daraz</h3>
          <ul className="text-xs">
            <li>
              <Link to="">Daraz University</Link>
            </li>
            <li>
              <Link to="">Sell on Daraz</Link>
            </li>
            <li>
              <Link to="">Code of Conduct</Link>
            </li>
            <li>
              <Link to="">Join the Daraz Affiliate Program</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mt-5"> Daraz</h3>
          <ul className="text-xs">
            <li>
              <Link to="">About Daraz</Link>
            </li>
            <li>
              <Link to="">Digital Payments</Link>
            </li>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">Daraz Blog</Link>
            </li>
            <li>
              <Link to="">Amar Daraz</Link>
            </li>
            <li>
              <Link to="">dMart</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
            <li>
              <Link to="">Daraz App</Link>
            </li>
            <li>
              <Link to="">Daraz Exclusivesz</Link>
            </li>
            <li>
              <Link to="">Hungrynaki Food Delivery</Link>
            </li>
            <li>
              <Link to="">BD Cricket Live</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <div>
            <img
              className="w-28 h-28 rounded-md float-left"
              src="./images/TB1nvAvXMFY.1VjSZFnXXcFHXXa.png"
              alt=""
            />
            <div className="px-5 float-left mt-5">
              <img
                className="w-12 h-12"
                src="./images/5db39a81-a04b-4f58-871e-9b9f6d044d25.png"
                alt=""
              />
              <p className="text-orange-600">Happy Shoping</p>
              <p>Download App</p>
            </div>
          </div>

          <div className="clear-both py-5">
            <Link to="">
              <img
                className="pr-2 w-28 lg:w-40 float-left"
                src="https://www.seekpng.com/png/full/395-3950335_updated-daily-so-check-back-for-fresh-laughs.png"
                alt=""
              />
            </Link>
            <Link to="">
              <img
                className="pr-2 w-28 lg:w-40 float-left"
                src="https://dreamofitaly.com/wp-content/uploads/2019/05/Google-play-1600x468.png"
                alt=""
              />
            </Link>
            <Link to="">
              <img
                className=" h-8 lg:h-11 w-28 lg:w-40 float-left"
                src="https://www.wish1075.com/wp-content/uploads/2020/04/Explore-it-on-AppGallery_Black.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="footer-middle px-2 gap-5 lg:gap-10 lg:px-36   py-5 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="pb-3">Payment Methods</h2>
          <img src="./images/payment.png" alt="" />
          <br />
          <strong className="py-5"> &copy; Daraz 2022</strong>
        </div>
        <div>
          <h2 className="pb-3">Daraz International</h2>
          <a href="">
            <img
              className="w-11 float-left  pr-2"
              src="./images/pakistan.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="w-11 float-left pr-2"
              src="./images/bangladesh.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="w-11 float-left pr-2"
              src="./images/sri-lanka.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="w-11 float-left pr-2"
              src="./images/spain.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="w-11 float-left pr-2"
              src="./images/nepal.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <h2 className="pb-3">Follow Us</h2>
          <a href="">
            <img
              className="w-11 float-left  pr-2"
              src="./images/facebook .png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="w-11 float-left pr-2"
              src="./images/instagram.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="w-11 float-left pr-2"
              src="./images/youtube.png"
              alt=""
            />
          </a>
          <a href="">
            <img className="w-11 float-left pr-2" src="./images/s.png" alt="" />
          </a>
        </div>
        <div>
          <h2 className="pb-3">Verified by</h2>
          <img src="./images/verify-dss.png" alt="" />
        </div>
      </section>

      <section className="footer-bottom px-2 lg:px-36 lg:gap-16  py-5 grid grid-cols-2 sm:grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3>
            Experience Personalized Online Shopping in Bangladesh with
            Daraz.com.bd
          </h3>
          <p className="text-xs">
            Online Shopping BD has never been easier. Daraz.com.bd is best
            online shopping store in Bangladesh that features 10+ million
            products at affordable prices. As bangaldesh's online shopping
            landscape is expanding every year, online shopping in dhaka,
            chittagong, khulna, sylhet and other big cities are also gaining
            momentum. Daraz is among best websites for online shopping in
            bangladesh that promises fast, reliable and convenient delivery of
            products to your doorstep. Daraz being the trusted online shop in
            Bangladesh aims to provide a trouble-free shopping experience for
            the people of Bangladesh but is also providing ample opportunity for
            international online shopping from Bangladesh. Daraz aims to make
            online shopping accessible to all parts of the country.
          </p>
          <p className="py-5 text-xs">
            Everyone is encouraged to shop with confidence at Daraz.com.bd as
            our strict buyer’s protection policies ensure no risks while
            shopping online.
          </p>
          <p className="text-xs">
            Among tons of online stores in Bangladesh, Daraz aims to strictly
            adhere to international quality standards ensuring trust and
            reliability in customer service and originality in product delivery.
            Realizing the surge in ecommerce
          </p>
        </div>

        <div>
          <p className="text-xs">
            platform in bangladesh, Daraz aims to redefine online shopping
            experience with home delivery, cash on delivery and installment
            facility for shoppers across country. Our assortment includes 100%
            original products from leading electronics, fashion, beauty, and
            lifestyle brands. Especially for shoppers who do not have debit
            cards or credit cards, Daraz provides a facility of online shopping
            with cash on delivery to your home. To enhance your online shopping
            experience, we encourage you to download Daraz app for Android & IOS
            and have a taste of personalized shopping experience based on your
            interest and shopping needs.
          </p>
          <p className="pt-5 text-xs">
            Daraz is a global online marketplace with ecommerce stores in
            Pakistan, Bangladesh, Nepal, Sri Lanka and Myanmar.
          </p>
          <h3 className="pt-5">Tranding</h3>
          <p className=" text-xs">
            Valentine's Day Sale , Daraz Flash Sale , Mobile Week Sale , Deals
            Under 999 , Top Up & eStore , 10.10 Sale , 11.11 Sale , Fatafati
            Friday , 12.12 Sale , Daraz EMI Partners , Daraz Payment Partners ,
            Daraz Mall , Daraz Mart , Mega Deals , Daraz Voucher , Gorur Haat ,
            Anniversary Sale , Hot Deals , Happy Hour , bKash Offers , Shake
            Shake , BD Cricket Live , Big Home Makeover , Bengali New Year Sale
            , Ramadan Bazar , Eid Shopping Fest , Online Bill Payment
          </p>
        </div>

        <div className="">
          <h3 className="">Top Categories & Brand</h3>
          <p className="text-sm">MOBILE PHONES</p>
          <p className=" text-xs">
            Samsung Mobile, Apple iPhones, Xiaomi Mobile, Huawei Mobile, Vivo
            Mobile, Oppo Mobile, Realme Mobile, Honor Mobile, Sony Mobile
            TABLETS Ipad, Samsung Tablets, Huawei Tablets, Lenovo Tablets
            COMPUTING DEVICES WiFi Routers, Graphic Card, Computer Ram, External
            Hard Drive, Multi Function Printers, Internal Hard Drive, External
            Hard Drive, SSD, Desktop Computers, Monitors LAPTOPS Dell Laptops,
            Hp Laptops, Lenovo Laptops, Acer Laptops, Asus Laptops, Msi Laptops,
            Apple Laptops HOME APPLICANCES Aircon, Chigo Aircon, Midea Aircon,
            Refrigerator, Samsung Refrigerator, Midea Refrigerator, Hitachi
            Refrigerator, Washing Machine, Samsung Washing Machine, Midea
            Washing Machine, Hitachi Washing Machine, Led Tv, Samsung LED Tv,
            Panasonic LED Tv, Lg LED Tv, Sony LED Tv MOBILE ACCESSORIES Power
            bank, Xiaomi Power Bank, Remax Power Bank, Aukey Power Bank, Mobile
            Covers, Bluetooth Speakers, Mobile Charger, Samsung Charger, Oppo
            Charger, Remax Charger, Aukey Charger
          </p>
        </div>
        <div className="">
          <p className="text-sm">TRENDING BRANDS</p>
          <p className="text-xs">
            Aukey, Sweety Home, Mango China, Asus, Apple, Bosch, Canon, Chigo,
            Dell, Erke, H&M, Hikvision, Huawei, JBL, Lenovo, LG, Midea, Oppo,
            Panasonic, Philips, Remax, Samsung, Skechers, Timberland, Vivo,
            Xiaomi, Yangoods TRENDING MOBILE PHONES Mi 9, Samsung Galaxy S21
            Ultra, Samsung Galaxy S21+, Mi Note 10 Pro, Mi Note 10 Lite, Samsung
            Note 9, Samsung Note 8, Mi K20, Oppo A52, Samsung A20, Mi Note 8
            Pro, Samsung A10, Samsung Note 10, Xiaomi Redmi K30 Ultra, iPhone 11
            Pro Max, Oppo Reno4, Mi 9SE, Mi A1 (5x), Samsung Galaxy S20, Samsung
            A51, Mi Redmi 8A, Samsung A71, Samsung Galaxy A31, Oppo A9, iPhone 7
            Plus, Mi 10 Lite Zoom, Samsung A7, Mi Note 7, Huawei Nova 7i, iPhone
            7, Mi CC9E, Mi 8, Oppo A5, Mi Max 3, Xiaomi Redmi 10X, iPhone 11,
            iPhone 12, Xiaomi Redmi K30, Mi Note 8, Samsung A21s, iPhone 11,
            iPhone 11 Pro Max, iPhone 12, iPhone 12 Pro Max, iPhone X, iPhone
            XR, iPhone XS, iPhone XS Max, Vivo Y20, Oppo A31, Samsung A02s,
            Samsung A21, Samsung S21, Samsung S10, Vivo S1, Vivo Y30, Vivo Y50,
            Vivo Y51, Mi Redmi Note 9 Pro
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
