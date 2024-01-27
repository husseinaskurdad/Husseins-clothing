import { useState, useEffect, createContext } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import SHOP_DATA from "../shop-data";

 export let CategoriesContext = createContext({
    categoriesMap : {},

 }) 

 export let CartegoriesProvider = ({children}) => {
    let [categoriesMap, setCartegoriesMap] = useState({})

   //  useEffect(() => {
   //    addCollectionAndDocuments('categories', SHOP_DATA)
   //  }, [])


     useEffect(() => {
      let getCategoriesMap = async () => {
         let categoriesMap = await getCategoriesAndDocuments();
         setCartegoriesMap(categoriesMap)
      }
      getCategoriesMap()
     
    }, [])


    let value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
 }

 // this code just saves the whole product object innitially (WITHOUT SETTING THE PRODUCTS)