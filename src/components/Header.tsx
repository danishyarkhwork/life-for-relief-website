"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="main-header header-style-two">
      {/* Header Top */}
      <div className="header-top">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="top-left clearfix">
              <ul className="info clearfix">
                <li>Become A Helping Hand For The Poor</li>
              </ul>
            </div>
            <div className="top-right clearfix">
              <ul className="info clearfix">
                <li>
                  <div className="change-language">
                    <div className="language dropdown">
                      <a
                        className="dropdown-toggle clearfix"
                        id="lang-dropdown"
                        aria-haspopup="true"
                        aria-expanded={languageDropdownOpen}
                        onClick={toggleLanguageDropdown}
                      >
                        <span className="icon fa fa-globe"></span> Eng
                        <span className="arrow flaticon-cheveron-down"></span>
                      </a>
                      {languageDropdownOpen && (
                        <ul className="dropdown-menu style-one">
                          <li>
                            <a href="#">Arabic</a>
                          </li>
                          <li>
                            <a href="#">Chinese</a>
                          </li>
                          <li>
                            <a href="#">Spanish</a>
                          </li>
                          <li>
                            <a href="#">English</a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="social-links clearfix">
                <li>
                  <a href="#">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest-p"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Upper */}
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container clearfix">
            {/* Logo */}
            <div className="logo-box">
              <div className="logo">
                <Link
                  href="/"
                  title="Kausid - Charity and Fundraising Template"
                >
                  <Image
                    src="/images/logo-2.png"
                    alt="Kausid - Charity and Fundraising"
                    width={150}
                    height={50}
                  />
                </Link>
              </div>
            </div>

            {/* Nav Box */}
            <div className="nav-outer clearfix">
              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <span className="icon flaticon-menu-1"></span>
              </div>

              {/* Main Menu */}
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className={`collapse navbar-collapse ${
                    isMobileMenuOpen ? "show" : ""
                  } clearfix`}
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
                      <a href="#" onClick={toggleDropdown}>
                        Home
                      </a>
                      {isDropdownOpen && (
                        <ul className="dropdown-menu">
                          <li>
                            <Link href="/">Home Charity</Link>
                          </li>
                          <li>
                            <Link href="/index-2">Home Volunteer</Link>
                          </li>
                          <li>
                            <Link href="/index-3">Home Wildlife</Link>
                          </li>
                          <li>
                            <Link href="/index-4">Home Environment</Link>
                          </li>
                          <li className="dropdown">
                            <Link href="/">Header Styles</Link>
                            <ul>
                              <li>
                                <Link href="/">Header Style One</Link>
                              </li>
                              <li>
                                <Link href="/index-2">Header Style Two</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="dropdown">
                      <Link href="/about">About</Link>
                      <ul>
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/volunteers">Our Volunteers</Link>
                        </li>
                        <li>
                          <Link href="/faq">Faq</Link>
                        </li>
                        <li>
                          <Link href="/donate">Make Donation</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link href="/causes">Causes</Link>
                      <ul>
                        <li>
                          <Link href="/causes">See Causes</Link>
                        </li>
                        <li>
                          <Link href="/cause-single">Cause Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link href="/events">Pages</Link>
                      <ul>
                        <li>
                          <Link href="/events">All Events</Link>
                        </li>
                        <li>
                          <Link href="/event-single">Event Details</Link>
                        </li>
                        <li>
                          <Link href="/donate">Make Donation</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link href="/blog">Blog</Link>
                      <ul>
                        <li>
                          <Link href="/blog">Visit Our Blog</Link>
                        </li>
                        <li>
                          <Link href="/blog-single">Blog Post Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Main Menu End */}

              <div className="donate-link">
                <Link href="/donate" className="theme-btn btn-style-one">
                  <span className="btn-title">Donate Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="sticky-header">
        <div className="auto-container clearfix">
          <div className="logo pull-left">
            <Link href="/">
              <Image
                src="/images/sticky-logo.png"
                alt="Logo"
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div className="pull-right">
            <nav className="main-menu clearfix">
              {/* Menu will be populated via JavaScript */}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={toggleMobileMenu}></div>
          <div className="close-btn" onClick={toggleMobileMenu}>
            <span className="icon flaticon-cancel"></span>
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <Link href="/">
                <Image
                  src="/images/nav-logo.png"
                  alt="Nav Logo"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <div className="menu-outer">{/* Mobile menu content here */}</div>
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-facebook-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest-p"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-youtube"></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
