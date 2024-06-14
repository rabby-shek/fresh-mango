import React from 'react'
import AboutMangoPhoto from '../../assets/images/about.png';
import TitleLogo from '../../assets/images/section-logo.png';
import AboutTick from '../../assets/images/about-tick.png';
import { MdKeyboardArrowRight } from "react-icons/md";
const AboutSection = () => {
  return (
    <section className='about-section-container section-padding'>
      <div className='about-section-title drop-shadow' data-aos="fade-up">
        <img src={TitleLogo} alt="title-logo" className='title-logo' /><span className='title-part-1'>About Us</span> <span className='title-part-2'>Company</span>
      </div>
      <div className="about-data">
        <div className="about-text drop-shadow" >
        Organic Integrity Durable <br /> <span className='about-text-bottom-1'>Impact </span> <span className='about-text-bottom-2'>Frutin's Story</span>
        </div>
        <p className='about-sub-text drop-shadow'>
        Some studies suggest that organic foods may have higher levels of certain nutrients and antioxidants compared to conventionally grown foods. However, this can vary depending on factors like soil quality and growing conditions.
        </p>
        <div className="about-us-list">
        <ul>
            <li data-aos="fade-up"><div className='about-round'><img src={AboutTick} className='about-tick' alt="tick" /></div>100% Organic Products</li>
            <li data-aos="fade-up"><div className='about-round'><img src={AboutTick} className='about-tick' alt="tick" /></div>Always Fresh & Natural Foods</li>
            <li data-aos="fade-up"><div className='about-round'><img src={AboutTick} className='about-tick' alt="tick" /></div>Environmental Benefits</li>
        </ul>
        <ul>
            <li data-aos="fade-up"><div className='about-round'><img src={AboutTick} className='about-tick' alt="tick" /></div>No Synthetic Chemicals</li>
            <li data-aos="fade-up"><div className='about-round'><img src={AboutTick} className='about-tick' alt="tick" /></div>Best Prices</li>
        </ul>
        </div>
        <img src={AboutMangoPhoto} className='drop-shadow about-img' alt="about" data-aos="fade-left" />
      </div>
      <div className='about-btn-container'>
        <button className='about-btn drop-shadow'> Discover more <MdKeyboardArrowRight className='about-btn-icon' /></button>
      </div>
    </section>
  )
}

export default AboutSection
