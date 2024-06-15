import React from "react";
import TitleLogo from "../../assets/images/section-logo.png";
import NewsIMG1 from "../../assets/images/news-img-1.png";
import NewsIMG2 from "../../assets/images/news-img-2.png";
import NewsIMG3 from "../../assets/images/news-img-3.png";
import NewsIMG4 from "../../assets/images/news-img-4.png";
import { FaUser } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
const News = () => {
  return (
    <section className="news-container section-padding" id="blog">
      <div className="news-section-title drop-shadow" data-aos="fade-up">
        <img src={TitleLogo} alt="title-logo" className="title-logo" />
        <span className="title-part-1">Blog &</span>{" "}&nbsp;
        <span className="title-part-2">News</span>
      </div>
      <div className="news-sub-title drop-shadow">
        Latest <span className="news-sub-title-part-1">Updates</span>{" "}
        <span className="news-sub-title-part-2">&</span>{" "}
        <span className="news-sub-title-part-3">News</span>
      </div>
      <div className="news-card-container">
        <div data-aos="flip-right">
          <img src={NewsIMG1} alt="news-img-1" />
          <div className="card-body">
            <div className="news-user-date">
              <div className="news-user">
                <FaUser />
                by frutin
              </div>
              <div>|</div>
              <div className="news-date">
                <CiCalendarDate /> 19 march, 2023
              </div>
            </div>
            <p>
              Save Time with These Top Seven Mango Desserts, and No Baking
              Required Happy Mango Friendsgiving
            </p>
          </div>
        </div>
        <div>
          <div data-aos="flip-left">
            <img src={NewsIMG2} alt="news-img-2" />
            <div className="card-body">
              <div className="news-user-date">
                <div className="news-user">
                  <FaUser />
                  by frutin
                </div>
                <div>|</div>
                <div className="news-date">
                  <CiCalendarDate /> 19 march, 2023
                </div>
              </div>
              <p>The ABC of Mangos in Support Immune Function</p>
            </div>
          </div>
          <div>
            <div data-aos="flip-up">
              <img src={NewsIMG3} alt="news-img-3" />
              <div className="card-body">
                <div className="news-user-date-1">
                  <div className="news-user">
                    <FaUser />
                    by frutin
                  </div>
                  <div>|</div>
                  <div className="news-date">
                    <CiCalendarDate /> 19 march, 2023
                  </div>
                </div>
                <p>Mango Saucy Summer</p>
              </div>
            </div>
            <div data-aos="flip-up">
              <img src={NewsIMG4} alt="news-img-4" />

              <div className="card-body">
                <div className="news-user-date-2">
                  <div className="news-user">
                    <FaUser />
                    by frutin
                  </div>
                  <div>|</div>
                  <div className="news-date">
                    <CiCalendarDate /> 19 march, 2023
                  </div>
                </div>
                <p>Mango for May</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
