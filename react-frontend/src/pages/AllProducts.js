import { Link } from "react-router-dom";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import Navbar from "../features/navbar/Navbar";
import React from 'react';


function AllProducts() {
    return ( 
        <div>
            <Navbar>
               <ProductList></ProductList>
            </Navbar>
            <h1>
                All Products
            </h1>
            <Footer></Footer>
        </div>
     );
}

export default AllProducts;