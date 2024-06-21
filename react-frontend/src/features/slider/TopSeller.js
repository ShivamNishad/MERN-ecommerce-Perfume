// src/features/slider/TopSeller.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../product/components/ProductCard';  // Correct import path
import ProductDetails from '../product/components/ProductDetail';
import RippleImage from '../../assets/images/Ripple.png';
import MellowImage from '../../assets/images/mellow.png';
import DazzleImage from '../../assets/images/Dazzle.png';
import AllureImage from '../../assets/images/Allure.png';
import AttarImage from '../../assets/images/attar.png';
import SixthImage from '../../assets/images/Zephyr.png';

const products = [
  {
    id: 1,
    title: 'Ripple Perfume',
    image: RippleImage,
    price: '₹1500.00',
    discountPrice: '₹1000.00',
  },
  {
    id: 2,
    title: 'Mellow Perfume',
    image: MellowImage,
    price: '₹1800.00',
    discountPrice: '₹1400.00',
  },
  {
    id: 3,
    title: 'Dazzle Perfume',
    image: DazzleImage,
    price: '₹2200.00',
    discountPrice: '₹1800.00',
  },
  {
    id: 4,
    title: 'Allure Perfume',
    image: AllureImage,
    price: '₹2500.00',
    discountPrice: '₹2000.00',
  },
  {
    id: 5,
    title: 'Attar Perfume',
    image: AttarImage,
    price: '₹3000.00',
    discountPrice: '₹2500.00',
  },
  {
    id: 6,
    title: 'Sixth Perfume',
    image: SixthImage,
    price: '₹3500.00',
    discountPrice: '₹3000.00',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const TopSeller = () => {
  return (
    <div className="product-slider bg-[#001c25]">
      <h2 className="top-sellers-heading">TOP SELLERS</h2>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default TopSeller;
