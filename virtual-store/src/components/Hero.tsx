import Slider from "react-slick";
import styles from "./Hero.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const images = [
    "bnd_home_bp-cyber_04-11.jpg",
    "bnd_home_bp-cyber_04-11.jpg",
    "bnd_home_bp-cyber_04-11.jpg",
    "bnd_home_bp-cyber_04-11.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <div className="slick-arrow arrow-right"></div>,
    prevArrow: <div className="slick-arrow arrow-left"></div>,
  };

  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-carousel"]}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={styles["slide"]}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
