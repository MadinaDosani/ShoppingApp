  
import { combineReducers } from 'redux'
import { productReducer, selectedProduct } from './productReducer'
 
const rootReducer=combineReducers({
    allProducts:productReducer,
    product:selectedProduct
})


export default rootReducer