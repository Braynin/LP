
import Slider from 'react-slick';
import styles from './Hero.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Hero = () => {
    const images = [
        'VENTA-CODIGO-PENAL-LPDERECHO-1068x561.webp',
        'VENTA-OFICIAL-CODIGO-CIVIL-2024-LPDERECHO-1068x561.jpg',
        'LP-publica-libro-curso-de-redaccion-administrativa-1068x559.png',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <div className="slick-arrow arrow-right">❯</div>,
        prevArrow: <div className="slick-arrow arrow-left">❮</div>,
    };

    return (
        
        <div className={styles["hero-carousel"]}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className={styles["slide"]}>
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
