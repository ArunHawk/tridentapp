import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Nav from "../nav/Nav";

const Product = () => {
  return (
    <div>
      <Header type="list" />
      <Nav />
      <div className="product">
        <div className="searchItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhSDichIXp-SAtjpLJ099WJ522lKnkVaG5Q&usqp=CAU"
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">Enlighten Water Purifier</h1>
            <span className="siDistance">With in Free Consulting</span>
            <span className="siTaxiOp">Free Installation</span>
            <span className="siSubtitle">Online Monitersystems</span>
            <span className="siFeatures">Custom features</span>
            <span className="siCancelOp">Free cancellation </span>
          </div>
          <div className="siDetails">
            <div className="siDetailTexts">
              <span className="siPrice">Rs.7000</span>
              <span className="siTaxOp">IN Stock</span>
            </div>
          </div>
        </div>
        <div className="searchItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeg9xComMITX_8j8G6OCddRV0v32uxv1SHwA&usqp=CAU"
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">UV Water Purification</h1>
            <span className="siDistance">With in Free Consulting</span>
            <span className="siTaxiOp">Free Installation</span>
            <span className="siSubtitle">Online Monitersystems</span>
            <span className="siFeatures">Custom features</span>
            <span className="siCancelOp">Free cancellation </span>
          </div>
          <div className="siDetails">
            <div className="siDetailTexts">
              <span className="siPrice">Rs.12000</span>
              <span className="siTaxOp">IN Stock</span>
            </div>
          </div>
        </div>
        <div className="searchItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53kKUbWi13m635_qHwB4h6PZoBqPCmbbVDQ&usqp=CAU"
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">Fresh Ro</h1>
            <span className="siDistance">With in Free Consulting</span>
            <span className="siTaxiOp">Free Installation</span>
            <span className="siSubtitle">Online Monitersystems</span>
            <span className="siFeatures">Custom features</span>
            <span className="siCancelOp">Free cancellation </span>
          </div>
          <div className="siDetails">
            <div className="siDetailTexts">
              <span className="siPrice">Rs.8000</span>
              <span className="siTaxOp">IN Stock</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
