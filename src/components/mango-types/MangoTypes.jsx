import React from "react";
import TitleLogo from "../../assets/images/section-logo.png";
import MangoType1 from "../../assets/images/1.png";
import MangoType2 from "../../assets/images/2.png";
import MangoType3 from "../../assets/images/3.png";
import MangoType4 from "../../assets/images/4.png";
import MangoType5 from "../../assets/images/5.png";
import MangoType6 from "../../assets/images/6.png";
const MangoTypes = () => {
  return (
    <section className="mango-type-container section-padding" id="shop">
      <div className="about-section-title drop-shadow" data-aos="fade-up">
        <img src={TitleLogo} alt="title-logo" className="title-logo" />
        <span className="title-part-1">Types Of</span>{" "}
        <span className="title-part-2">Mangoes</span>
      </div>
      <div className="about-text drop-shadow">
        Exploring The <span className="about-text-bottom-1">World Of </span>{" "}
        <span className="about-text-bottom-2">Mango Varieties!</span>
      </div>
      <div class="mangoes">
        <div class="mango-item" data-aos="fade-up">
          <div class="image-container">
            <img src={MangoType1} alt="mango" />
            <button>Alphonso mangoes</button>
          </div>
        </div>
        <div class="mango-item" data-aos="fade-up">
          <div class="image-container">
            <img src={MangoType2} alt="mango" />
            <button>Ataulfo mangoes</button>
          </div>
        </div>
        <div class="mango-item" data-aos="fade-up">
          <div class="image-container">
            <img src={MangoType3} alt="mango" />
            <button>Keitt mangoes</button>
          </div>
        </div>
        <div class="mango-item" data-aos="fade-up">
          <div class="image-container">
            <img src={MangoType4} alt="mango" />
            <button>Tommy Atkins mangoes</button>
          </div>
        </div>
        <div class="mango-item" data-aos="fade-up">
          <div class="image-container">
            <img src={MangoType5} alt="mango" />
            <button>Kesar mangoes</button>
          </div>
        </div>
        <div class="mango-item" data-aos="fade-up">
          <div class="image-container">
            <img src={MangoType6} alt="mango" />
            <button>Neelum mangoes</button>
          </div>
        </div>
      </div>
      <div className="view-more-btn-container">
      <button className="view-more-btn drop-shadow">View More</button>
      </div>
    </section>
  );
};

export default MangoTypes;
