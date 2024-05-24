import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSlide from "../features/slider/HeroSlide";


function Home() {
    return ( 
        <div>
            <NavBar>
                <HeroSlide></HeroSlide>
                <ProductList></ProductList>
            </NavBar>
            <h1>
                Home Pages
            </h1>
            <Footer></Footer>
        </div>
     );
}

export default Home;