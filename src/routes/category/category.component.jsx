import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../context/product .context'
import { Fragment } from 'react'

import { useContext, useEffect , useState} from 'react'
import ProductCard from '../../component/product-card/product-card.component'


let Category = () => {

    let { category } = useParams()
    let {categoriesMap} = useContext(CategoriesContext)
    let [products, setProducts] = useState([])


    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    

    return(
        <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
        {
             products && products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ) )
        }
        </div>
        </Fragment>
       
    )
}

export default Category