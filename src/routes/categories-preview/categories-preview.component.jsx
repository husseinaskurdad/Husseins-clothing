import { Fragment } from 'react';
import { useContext } from 'react';
import { CategoriesContext } from '../../context/product .context';
// import ProductCard from '../../component/product-card/product-card.component';
import CategoryPreview from '../../component/category-preview/category-preview.component';



let CategoriesPreview = () => {
    let {categoriesMap} = useContext(CategoriesContext)

    return(

      <Fragment>
        {
            Object.keys(categoriesMap).map(title => {
                let products = categoriesMap[title];
                return(
                    <CategoryPreview key={title} title={title} products={products}/>
                )
            })

        }
        </Fragment>
    )
}

export default CategoriesPreview