import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Crown, Plus, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/heroBanner.css";

const HeroBanner = ({ banners = [] }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentBanner = banners[currentIndex];

  const nextBanner = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const previousBanner = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!banners.length) return;

    const timer = setInterval(nextBanner, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  if (!currentBanner) return null;

  return (
    <section className="hero-banner">
      <picture className="hero-picture">
        <source
          media="(max-width: 768px)"
          srcSet={currentBanner.mobileBanner}
        />
        <img
          className="hero-bg-image"
          src={currentBanner.desktopBanner}
          alt={currentBanner.title}
        />
      </picture>

      <div className="hero-dark-overlay">
        <div className="hero-info">
          <img
            className="hero-typography"
            src={currentBanner.typography}
            alt={currentBanner.title}
          />

          <p className="hero-meta">
            {currentBanner.type} <span>•</span> {currentBanner.category}
          </p>

          <div className="hero-actions">
            <button
              className="hero-play-btn"
              type="button"
              onClick={() => navigate(`/content/${currentBanner.contentId}`)}
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
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
