import { useEffect, useState } from "react";
import axios from "axios"
import Product from "./Product";



const ProductListing = () =>{
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(
            res => setProducts(res.data)
        )
        
    },[])
    return(
        <div>
            <h1>Products</h1>
            
                {
                    products.map((product) =>{return(<div>
                        <Product key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        rating={product.rating.rate}
                        description={product.description}
                        image={product.image}/>
                    </div>)}
                    )
                }
        
        </div>
    )
}
export default ProductListing;