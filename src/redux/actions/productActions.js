import fakeStore from "../../apis/fakeStore"
import { ActionTypes } from "../constants/action-types"
import {useParams} from 'react-router-dom'
import axios from 'axios'

export const fetchProducts=()=>async(dispatch)=>{
  
        const response=await fakeStore.get('/products')
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
    }
    export const fetchProduct=(id)=>async(dispatch)=>{
       
        const response = await fakeStore.get(`/products/${id}`)
        dispatch({type:ActionTypes.SELECTED_PRODUCTS,payload:response.data})
    }






export const setProducts=(products)=>{
    return {
    type:ActionTypes.SET_PRODUCTS,
    payload:products
    }
}



export const selectedProduct=(product)=>{
    return {
    type:ActionTypes.SELECTED_PRODUCTS,
    payload:product
    }
}