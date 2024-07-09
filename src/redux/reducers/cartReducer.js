import { ActionTypes } from "../constants/action-types"


const initialState={
    cart:[]
}
    

export const cartReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.CART_PRODUCTS:
         return {
            ...state,
            cart:[...state.cart,payload],
           
         }
         case ActionTypes.DELETE_PRODUCT:
                let dummy=[]
                for(let i=0;i<state.cart.length;i++){
                    if(i!==payload){
                        dummy.push(state.cart[i])
                    }
                    
                }
                console.log(dummy)
                console.log(payload)
            
            return {
                ...state,
                cart: dummy
              };
           
        default:
            return state
    }
}



