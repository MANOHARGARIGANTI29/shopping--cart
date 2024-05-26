
import { useContext } from 'react';
import {CartStateContext} from './context';
import ProductCart from './ProductCart'

const Checkout = () =>{
    const state = useContext(CartStateContext)
    return(
        <div>
            {
                state.cart.map((product) =>{return(<div>
                    <ProductCart key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    rating={product.rating}
                    description={product.description}
                    image={product.image}/>
                </div>)})
            }
            
        </div>
    )
}
export default Checkout;