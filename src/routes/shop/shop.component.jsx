
import { useContext } from 'react';
import { ProductContext } from '../../context/product .context';
import ProductCard from '../../component/product-card/product-card.component';
import './shop.styles.scss'
let Shop = () => {

    let {products} = useContext(ProductContext)
    return(
<div className='products-container'>
        {products.map ((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
</div>
    )
}

export default Shop