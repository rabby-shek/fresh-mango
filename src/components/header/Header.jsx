import React, { useState, useEffect } from "react";
import BrandLogo from "../../assets/images/fresh-mango-logo.png";
import { navData } from "../../data/navData";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  const handleClick = (id) => {
    setShowNav(false);
    setActiveId(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-logo-container">
          <img src={BrandLogo} alt="brand-logo" className="header-logo" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {navData.map((item) => {
              return (
                <li key={item.id} className="nav-element">
                  <a
                    href={`#${item.path.replace("#", "")}`}
                    className={`nav-link ${
                      activeId === item.path.replace("#", "") ? "active" : ""
                    }`}
                    onClick={() => handleClick(item.path.replace("#", ""))}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="header-button-container">
          <button className="header-purchase-btn">Purchase Now</button>
        </div>
        <div>
          <CiMenuBurger className="menu-icon" onClick={handleNav} />
        </div>
      </header>
      <div className={`mobile-nav-container ${showNav ? "show-nav" : ""}`}>
        <IoMdClose className="close-icon" onClick={() => setShowNav(false)} />
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navData.map((item) => {
              return (
                <li key={item.id} className="nav-element">
                  <a
                    href={`#${item.path.replace("#", "")}`}
                    className={`nav-link ${
                      activeId === item.path.replace("#", "") ? "active" : ""
                    }`}
                    onClick={() => handleClick(item.path.replace("#", ""))}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
