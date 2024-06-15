import React from "react";
import TitleLogo from "../../assets/images/section-logo.png";
import TeamMember1 from '../../assets/images/team-member-1.png';
import TeamMember2 from '../../assets/images/team-member-2.png';
import TeamMember3 from '../../assets/images/team-member-3.png';
import { FaFacebookF ,FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
const TeamMembers = () => {
  return (
    <section className="section-padding">
      <div className="about-section-title drop-shadow" data-aos="fade-up">
        <img src={TitleLogo} alt="title-logo" className="title-logo" />
        <span className="title-part-1">Team </span>{" "}
        <span className="title-part-2">Members</span>
      </div>
      <div className="about-text drop-shadow">
        We Have <br />{" "}
        <span className="about-text-bottom-1">Awesome Team </span>{" "}
        <span className="about-text-bottom-2">Here To Help You!</span>
      </div>
      <div className="team-member-list">
        <div className="team-member">
            <img src={TeamMember1} alt="" />
            <div className="member-data" data-aos="flip-up">
                <div className="member-title">Senior Farmer</div>
                <div className="member-name">Alhando robart</div>
                <ul>
                    <li><FaFacebookF /></li>
                    <li><FaLinkedinIn  /></li>
                    <li><FaTwitter  /></li>
                    <li><FaInstagram  /></li>
                </ul>
            </div>
        </div>
        <div className="team-member">
            <img src={TeamMember2} alt="" />
            <div className="member-data" data-aos="flip-up">
                <div className="member-title">Senior Farmer</div>
                <div className="member-name">Alhando robart</div>
                <ul>
                    <li><FaFacebookF /></li>
                    <li><FaLinkedinIn  /></li>
                    <li><FaTwitter  /></li>
                    <li><FaInstagram  /></li>
                </ul>
            </div>
        </div>
        <div className="team-member">
            <img src={TeamMember3} alt="" />
            <div className="member-data" data-aos="flip-up">
                <div className="member-title">Senior Farmer</div>
                <div className="member-name">Alhando robart</div>
                <ul>
                    <li><FaFacebookF /></li>
                    <li><FaLinkedinIn  /></li>
                    <li><FaTwitter  /></li>
                    <li><FaInstagram  /></li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
