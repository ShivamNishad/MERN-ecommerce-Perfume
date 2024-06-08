import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import goldenPerfumeImage from '../../assets/images/top8.webp'; // Adjust the path to your image
import PerfumeT from '../../assets/images/top7.webp';
import PerfumeTb from '../../assets/images/top5.webp';
import PerfumeTc from '../../assets/images/top4.webp';
import PerfumeTd from '../../assets/images/top6.webp';
import PerfumeTe from '../../assets/images/top1.webp';
import PerfumeTf from '../../assets/images/top2.webp';
import PerfumeTg from '../../assets/images/top3.webp';
import PerfumeTh from '../../assets/images/perfumes/golden-full.webp';


const HeroSlide = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={800}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass="carousel-item-spacing" // Add this line
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div>
        <img
          src={goldenPerfumeImage}
          alt="Golden Perfume" className="carousel-image"
        />
      </div>
      <div>
        <img
        src={PerfumeT}
          alt="Slide 2" className="carousel-image"
        />
      </div>
      <div>
        <img
         src={PerfumeTb}
          alt="Slide 3" className="carousel-image"
        />
      </div>
      <div>
        <img
          src={PerfumeTc}
          alt="Slide 4" className="carousel-image"
        />
      </div>
      <div>
        <img
          src={PerfumeTd}
          alt="Slide 4" className="carousel-image"
        />
      </div>
      <div>
        <img
          src={PerfumeTe}
          alt="Slide 4" className="carousel-image"
        />
      </div>
      <div>
        <img
          src={PerfumeTf}
          alt="Slide 4" className="carousel-image"
        />
      </div>
      <div>
        <img
          src={PerfumeTg}
          alt="Slide 4" className="carousel-image"
        />
      </div>
      <div>
        <img
          src={PerfumeTh}
          alt="Slide 4" className="carousel-image"
        />
      </div>
    
    </Carousel>
  );
};

export default HeroSlide;
