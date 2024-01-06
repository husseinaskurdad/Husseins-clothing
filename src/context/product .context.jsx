import { useState, useEffect, createContext } from "react";

import PRODUCTS from '../shop-data.json'

 export let ProductContext = createContext({
    products : [],

 })

 export let ProductsProvider = ({children}) => {
    let [products, setProducts] = useState(PRODUCTS)
    let value = { products }
    return (
        <ProductContext.Provider value={value}> {children} </ProductContext.Provider>
    )
 }

 // this code just saves the whole product object innitially (WITHOUT SETTING THE PRODUCTS)