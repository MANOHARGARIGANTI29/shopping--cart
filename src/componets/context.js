
import {createContext, useReducer} from "react"


export const CartStateContext = createContext(null);
export const Cartdispatchcontext = createContext(null);

const initialState = {
    cart : []
}

export const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{...state,cart:[...state.cart,action.payload]}
        case 'REMOVE':
            const newCart = [...state.cart]
            const updatedCart = newCart.filter(item => item.id !== action.payload.id)
            return{
                ...state ,
                cart : updatedCart
            }
            default:
                return state
    }


}

  export   const CartProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialState)
        return(
            <CartStateContext.Provider value={state}>
                <Cartdispatchcontext.Provider value={dispatch}>
                          {children}
                </Cartdispatchcontext.Provider>
            </CartStateContext.Provider>
        )

}