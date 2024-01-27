// import { Fragment } from 'react';
// import { useContext } from 'react';
// import { CategoriesContext } from '../../context/product .context';
// import ProductCard from '../../component/product-card/product-card.component';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss'


let Shop = () => {
    return(
       <Routes>
       <Route index element={<CategoriesPreview/>} />
       <Route path = ':category' element={<Category/>}/>
       </Routes>
    )
}

export default Shop