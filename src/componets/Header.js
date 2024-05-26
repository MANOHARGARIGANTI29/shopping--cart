import{Link}  from "react-router-dom"
import image from "../images/pngtree-shopping-logo-design-for-online-store-website-png-image_8647300.png"
import { BsCart4 } from "react-icons/bs";
import { CartStateContext } from "./context.js";
import { useContext } from "react";


const Header = () =>{
    const state = useContext(CartStateContext);
    const cartcount = state.cart.length
    return(
        <div className="headercontainer">
            <div className="logo-container">
                <Link to="/">
                 <img src={image} alt="logo-of-app"></img>
                </Link>
                </div>
                <div className="cart-container">
                    <Link to="/cart" style={{display:"flex",justifyContent:"end",textDecoration:"none",marginRight:30}}><BsCart4 style={{width:30 , height:40,marginTop:10}}/>
                    <h5 style={{backgroundColor:"black" ,color:"white",borderRadius:20,width:10,paddingLeft:4,paddingTop:2}} >{cartcount}</h5> </Link>
                 
                    
                </div>
        </div>
    )
}
export default Header