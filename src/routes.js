
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

export const routes=[
    {path:"/",element:<ProductListing/>},
    {path:"productdetails/:productid",element:<ProductDetails/>}
]