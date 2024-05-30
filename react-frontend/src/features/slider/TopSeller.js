import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RippleImage from '../../assets/images/Ripple.png';
import MellowImage from '../../assets/images/mellow.png';
import DazzleImage from '../../assets/images/Dazzle.png';
import AllureImage from '../../assets/images/Allure.png';
import AttarImage from '../../assets/images/attar.png';
import SixthImage from '../../assets/images/Zephyr.png'; // Add your sixth product image

import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';



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
      <h2 className="top-sellers-heading">Top Sellers</h2>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{ maxWidth: '100%', boxShadow: 'lg', m: 2, backgroundColor: '#001c25', color: 'white' }} // Updated background color
            className="product-card"
          >
            <CardOverflow>
              <AspectRatio sx={{ paddingTop: '40%', position: 'relative', backgroundColor: '#001c25' }}> {/* Added background color here */}
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#001c25' }} // Updated background color here
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs" className="product-title" sx={{ color: 'white' }}>{product.title}</Typography>
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="white" // Updated text color
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                {product.title}
              </Link>
              <Typography
                level="title-lg"
                sx={{ mt: 1, fontWeight: 'xl', color: 'white' }} // Updated text color
                endDecorator={
                  <Chip component="span" size="sm" variant="soft" color="success">
                    Lowest price
                  </Chip>
                }
              >
                {product.price}
              </Typography>
              <Typography
                level="title-md"
                sx={{ textDecoration: 'line-through', color: 'red' }} // Discount price styling
              >
                {product.discountPrice}
              </Typography>
              <Typography level="body-sm" sx={{ color: 'white' }}>
                (Only <b>7</b> left in stock!)
              </Typography>
            </CardContent>
            <CardOverflow>
              <Button className="add-to-cart-button" variant="solid" size="lg">
                Add to cart
              </Button>
            </CardOverflow>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default TopSeller;
