
import {BrowserRouter,  Route, Routes} from "react-router-dom"
import Header from "./componets/Header.js";
import ProductListing from "./componets/ProductListing.js";
import Footer from "./componets/Footer.js";
import Checkout from "./componets/Cart.js";
const Uipage = () =>{
    return(
        <div>
            
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>
                    <Header/>
                    <ProductListing/>
                    <Footer/>
                </div>}></Route>
                <Route path="/cart" element={<div>
                    <Header/>
                    <Checkout/>
                    <Footer/>
                </div>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Uipage;