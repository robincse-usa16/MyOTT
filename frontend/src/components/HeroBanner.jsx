import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Crown, Plus, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/heroBanner.css";

const HeroBanner = ({ banners = [] }) => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = banners.length > 0 ? [...banners, banners[0]] : [];

  const nextBanner = () => {
    if (!banners.length) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const previousBanner = () => {
    if (!banners.length) return;

    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(banners.length);

      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(banners.length - 1);
      }, 30);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToBanner = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === banners.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!banners.length) return;

    const timer = setInterval(() => {
      nextBanner();
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  if (!banners.length) return null;

  const activeDotIndex = currentIndex === banners.length ? 0 : currentIndex;

  return (
    <section className="hero-banner">
      <div
        className={`hero-slider-track ${
          isTransitioning ? "with-transition" : "no-transition"
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((banner, index) => (
          <div className="hero-slide" key={`${banner.id}-${index}`}>
            <picture className="hero-picture">
              <source media="(max-width: 768px)" srcSet={banner.mobileBanner} />
              <img
                className="hero-bg-image"
                src={banner.desktopBanner}
                alt={banner.title}
              />
            </picture>

            <div className="hero-dark-overlay">
              <div className="hero-info">
                <img
                  className="hero-typography"
                  src={banner.typography}
                  alt={banner.title}
                />

                <p className="hero-meta">
                  {banner.type} <span>•</span> {banner.category}
                </p>

                <div className="hero-actions">
                  <button
                    className="hero-play-btn"
                    type="button"
                    onClick={() => navigate(`/content/${banner.contentId}`)}
                  >
                    <Crown size={18} />
                    SUBSCRIBE & PLAY
                  </button>

                  <button className="hero-circle-btn" type="button">
                    <Plus size={25} />
                  </button>

                  <button className="hero-circle-btn" type="button">
                    <Share2 size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-right-controls">
        <div className="hero-slider-controls">
          <button type="button" onClick={previousBanner}>
            <ChevronLeft size={28} />
          </button>

          <button type="button" onClick={nextBanner}>
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="hero-dots">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              className={`dot ${activeDotIndex === index ? "active" : ""}`}
              onClick={() => goToBanner(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
