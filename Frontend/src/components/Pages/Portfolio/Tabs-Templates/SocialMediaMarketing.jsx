
import { useState } from "react";
import "./SocialMediaMarketing.css";
// Swiper imports removed

// React icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

// Data remains the same
const cardsData = [
  {
    id: 1, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/ahaanwebsite/SocialMedia/11.webp",
    shape: "agency-shape-yellow", color: "agency-color-1", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 2, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/ahaanwebsite/SocialMedia/22.webp",
    shape: "agency-shape-purple", color: "agency-color-2", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 3, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/ahaanwebsite/SocialMedia/33.webp",
    shape: "agency-shape-blue", color: "agency-color-3", iconsPosition: "right", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 4, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/ahaanwebsite/SocialMedia/44.webp",
    shape: "agency-shape-yellow", color: "agency-color-4", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 5, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/ahaanwebsite/SocialMedia/55.webp",
    shape: "agency-shape-purple", color: "agency-color-5", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 6, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/ahaanwebsite/SocialMedia/66.webp",
    shape: "agency-shape-blue", color: "agency-color-6", iconsPosition: "right", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 7, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/ahaanwebsite/SocialMedia/7.webp",
    shape: "agency-shape-yellow", color: "agency-color-7", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 8, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/ahaanwebsite/SocialMedia/8.webp",
    shape: "agency-shape-purple", color: "agency-color-8", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 9, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/ahaanwebsite/SocialMedia/9.webp",
    shape: "agency-shape-blue", color: "agency-color-9", iconsPosition: "right", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },
];


function Card({ title, img, shape, color, iconsPosition, icons }) {
  return (
    <div className={`agency-card ${color}`}>
      <div className={`agency-shape ${shape}`}></div>

      <div className="agency-image-box">
        <img src={img} alt={title} />
      </div>

      <div className="agency-logo">
        <img src="https://ahaanmedia.com/asc/layouts/fav.png" alt="Logo" />
      </div>

      <div className={`agency-icons ${iconsPosition}`}>
        {icons.map((Icon, idx) => (
          <div className="newfile-icon-wrapper" key={idx}>
            {Icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SocialMediaMarketing() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleCards = cardsData.slice(0, visibleCount);

  return (
    <div className="py-md-3 py-0">
      <div className="text-center mb-5">
        <h2 className="fw-bold portfolio-title">Social Media Marketing</h2>
        <p className="text-muted">
          A showcase of engaging and creative social media designs
        </p>
      </div>

      <div className="agency-grid-container">
        {visibleCards.map(({ id, title, img, shape, color, iconsPosition, icons }) => (
          <div key={id} className="agency-card-wrapper">
            <Card
              title={title}
              img={img}
              shape={shape}
              color={color}
              iconsPosition={iconsPosition}
              icons={icons}
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < cardsData.length && (
        <div className="text-center mt-4">
          <a className="portfolio-view-all-btn" onClick={handleLoadMore}>
            Load More
          </a>
        </div>
      )}
    </div>
  );
}