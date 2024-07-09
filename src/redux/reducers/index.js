  
import { combineReducers } from 'redux'
import { productReducer, selectedProduct } from './productReducer'
import {cartReducer} from './cartReducer'
 
const rootReducer=combineReducers({
    allProducts:productReducer,
    product:selectedProduct,
    cart:cartReducer,
    
})


export default rootReducer