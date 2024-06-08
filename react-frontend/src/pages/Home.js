import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSlide from "../features/slider/HeroSlide";
import SecondRow from "../features/slider/SecondRow";
import '../features/slider/Sliders.css';
import TopSeller from "../features/slider/TopSeller";
import FourSection from '../components/FourSection';
import { Collections } from "@mui/icons-material";
import Collection from '../components/Collection';
import Categories from '../components/Categories';
import FullImageSection from "../components/FullImageSection";
import NewLunches from "../features/slider/NewLunches";
import VideoSection from "../components/VideoSection";
import Testimonials from "../components/Testimonials";
import Blog from "../features/blog/Blog";
import MufaFeature from "../components/MufaFeature";


function Home() {
    return ( 
        <div>
            <NavBar>
            <ProductList/>
            </NavBar>
            <HeroSlide/>
            <FullImageSection/>
            <TopSeller/>
            <FourSection/>
            <Categories/>
            <Collection/>
            <SecondRow/>
            <NewLunches/>
            <VideoSection/>
            <Testimonials/>
            <Blog/>
            <MufaFeature/>
            <Footer/>
        </div>
     );
}

export default Home;