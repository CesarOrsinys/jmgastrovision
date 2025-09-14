import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
//import { useCurrency } from "../../context/CurrencyContext";
import "./Header.css";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  //const { currency, setCurrency } = useCurrency();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header-container">
        <div className="logo-container" onClick={() => scroll.scrollToTop()}>
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <Link to="hero" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            {t("menu.home")}
          </Link>
          <Link to="plans" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            {t("menu.plans")}
          </Link>
          <Link to="testimonials" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            {t("menu.testimonials")}
          </Link>

          <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
            <option value="zh">ZH</option>
            <option value="ko">KO</option>
            <option value="ja">JA</option>
            <option value="fr">FR</option>
          </select>

          {/*
          <select onChange={(e) => setCurrency(e.target.value)} value={currency}>
            <option value="EUR">€</option>
            <option value="USD">$</option>
            <option value="GBP">£</option>
            <option value="KRW">₩</option>
            <option value="JPY">¥</option>
            <option value="CNY">¥</option>
          </select>
          */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
