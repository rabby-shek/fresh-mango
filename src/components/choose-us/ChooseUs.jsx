import React from "react";
import TitleLogo from "../../assets/images/section-logo.png";
import Choose from "../../assets/images/choose-us.png";
const ChooseUs = () => {
  return (
    <section className="choose-us-container section-padding">
      <div className="about-section-title drop-shadow" data-aos="fade-up">
        <img src={TitleLogo} alt="title-logo" className="title-logo" />
        <span className="title-part-1">Why </span>{" "}
        <span className="title-part-2">Choose Us</span>
      </div>
      <div className="choose-us-data">
        <div>
        <div className="about-text choose-us-text drop-shadow">
          Nourish Your Body With <br /> Pure{" "}
          <span className="about-text-bottom-1">Organic </span>{" "}
          <span className="about-text-bottom-2">Goodness</span>
        </div>
        <div className="choose-us-list">
          <ul>
            <li data-aos="flip-up">
              <div>100% Organic</div>
              <p>Our products are certified by reputable organic.</p>
            </li>
            <li data-aos="flip-up">
              <div>Biodynamic Food</div>
              <p>Our products are certified by reputable organic.</p>
            </li>
          </ul>
          <ul>
            <li data-aos="flip-up">
              <div>Fresh Products</div>
              <p>Our products are certified by reputable organic.</p>
            </li>
            <li data-aos="flip-up">
              <div>Secured Payment</div>
              <p>Our products are certified by reputable organic.</p>
            </li>
          </ul>
        </div>
        </div>
        <div className="choose-us-img-container">
      <img
          src={Choose}
          className="drop-shadow choose-img"
          alt="choose-us"
        //   data-aos="fade-left"
        />
      </div>
      </div>
      
    </section>
  );
};

export default ChooseUs;
