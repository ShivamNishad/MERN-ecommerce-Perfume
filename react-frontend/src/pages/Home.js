import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSlide from "../features/slider/HeroSlide";
import SecondRow from "../features/slider/SecondRow";
import '../features/slider/Sliders.css';
import TopSeller from "../features/slider/TopSeller";




function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
            <HeroSlide/>
            <SecondRow/>
            <TopSeller/>
            <Footer></Footer>
        </div>
     );
}

export default Home;