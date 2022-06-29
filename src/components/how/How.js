import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./how.css";
const How = () => {
  return (
    <div className="how">
      <Header />
      <div className="howhome">
        <h1>Purifier Working Construction</h1>
        <div className="howimage">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2NG6-yn3WeHUVaVo_PNxYAi-3BOawMBbQg&usqp=CAU"
            alt="pic"
          />
        </div>
        <p className="para">
          Water purifiers have become a necessity for every household. Water
          purifiers ensure that you get clean and safe drinking water on demand
          so that you stay away from water-borne diseases. There are different
          types of water filtration processes such as Reverse Osmosis Water
          Filtration (RO), Ultra Filtration (UF) and Ultra Violet disinfection
          (UV). You need to choose a water purification system depending on the
          quality of water. Though we can easily get in touch with service
          professionals if there is a problem, it is always helpful to know how
          these systems function.
        </p>
        <div className="ivideo">
          <iframe src="https://tnpcb.gov.in/" title="Iframe Example"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default How;
