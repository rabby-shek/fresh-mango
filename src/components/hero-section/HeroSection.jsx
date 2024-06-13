import React from "react";
import Leaf from "../../assets/images/leaf-bg.png";
import SliceMangoLeft from "../../assets/images/image 341.png";
import SliceMangoRight from "../../assets/images/image 344.png";
import pickup from '../../assets/images/hero-location.png';
import delivery from '../../assets/images/hero-delivery.png';
const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <img src={Leaf} alt="leaf" className="leaf-img" data-aos="fade-down" data-aos-duration="1000" />
      <img src={SliceMangoLeft} alt="slice" className="hero-left-img"  />
      <img src={SliceMangoRight} alt="slice" className="hero-right-img" data-aos="fade-left" data-aos-duration="2000" />
      <div class="hero-section-container">
        <div className="hero-text"><span className="hero-text-up">we provide formalin free</span> <br /> <span className="hero-text-down-1">fresh</span> <span className="hero-text-down-2">mangoes.</span></div>
        <div className="sub-hero-text">we collect mangoes directly from the garden & deliver them to you</div>
        <button className="hero-order-btn">Order Now</button>
        <div className="hero-service">
            <div className="pickup grid">
                <div className="pickup-img-container grid"><img src={pickup} alt="pickup-img" /></div>
                <div>
                    <span className="pickup-title">Pickup Stand</span> <br />
                    <small>Pickup to deliver <br />
                    Within 30 mins</small>
                </div>
            </div>
            <div className="pickup grid">
            <div className="pickup-img-container grid"><img src={delivery} alt="delivery-img" /></div>
                <div>
                    <span className="pickup-title">Fast Delivery</span> <br />
                    <small>Promise to deliver <br />
                    in 30 mins</small>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
