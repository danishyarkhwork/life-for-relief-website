"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel to ensure it only loads on the client side
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const BannerSection = () => {
  // OwlCarousel options
  const options = {
    loop: true,
    margin: 0,
    autoHeight: true,
    lazyLoad: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 300,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <section className="banner-section style-two">
      <OwlCarousel className="banner-carousel owl-theme" {...options}>
        {/* Slide Item 1 */}
        <div className="slide-item">
          <div className="image-layer">
            <Image
              src="/images/main-slider/4.jpg"
              alt="Empowering the lives of needy people"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="auto-container">
            <div className="content-box">
              <div className="content">
                <div className="inner">
                  <div className="sub-title">
                    Support the causes that matter
                  </div>
                  <h2>Empowering the lives of needy people</h2>
                  <div className="links-box">
                    <Link href="/donate" className="theme-btn btn-style-two">
                      <span className="btn-title">Get involved</span>
                    </Link>
                    <span className="theme-icon"></span>
                    <Link href="/about" className="theme-btn btn-style-three">
                      <span className="btn-title">Who we are</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Item 2 */}
        <div className="slide-item">
          <div className="image-layer">
            <Image
              src="/images/main-slider/5.jpg"
              alt="Empowering the lives of needy people"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="auto-container">
            <div className="content-box">
              <div className="content">
                <div className="inner">
                  <div className="sub-title">
                    Support the causes that matter
                  </div>
                  <h2>Empowering the lives of needy people</h2>
                  <div className="links-box">
                    <Link href="/donate" className="theme-btn btn-style-two">
                      <span className="btn-title">Get involved</span>
                    </Link>
                    <span className="theme-icon"></span>
                    <Link href="/about" className="theme-btn btn-style-three">
                      <span className="btn-title">Who we are</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Item 3 */}
        <div className="slide-item">
          <div className="image-layer">
            <Image
              src="/images/main-slider/6.jpg"
              alt="Empowering the lives of needy people"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="auto-container">
            <div className="content-box">
              <div className="content">
                <div className="inner">
                  <div className="sub-title">
                    Support the causes that matter
                  </div>
                  <h2>Empowering the lives of needy people</h2>
                  <div className="links-box">
                    <Link href="/donate" className="theme-btn btn-style-two">
                      <span className="btn-title">Get involved</span>
                    </Link>
                    <span className="theme-icon"></span>
                    <Link href="/about" className="theme-btn btn-style-three">
                      <span className="btn-title">Who we are</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default BannerSection;
