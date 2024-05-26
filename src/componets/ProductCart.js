import { useContext } from "react";
import { Cartdispatchcontext } from "./context";

const ProductCart = ({title,price,rating,image,id,category,description}) =>{
    const dispatch = useContext(Cartdispatchcontext);
    return(
        <div className="product-container">
            <div className="product-image">
                <img src={image} alt="product_image"/>
            </div>
            <div className="product-info" >
                <h1>{title}</h1>
                <h2>{category}</h2>
                <h2>{price}</h2>
                <h2>{description}</h2>
                <h3>{rating}</h3>
                <button onClick={()=>dispatch({
                    type : 'REMOVE' ,
                    payload :{id:id ,title:title,rating:rating,image:image,price:price,category:category,description:description}
                })}> Remove </button>
            </div>
            
        </div>
    )
}
export default ProductCart;