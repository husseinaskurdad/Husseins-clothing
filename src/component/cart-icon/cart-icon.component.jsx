import { useContext } from 'react'
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag (1).svg'
import { CartContext } from '../../context/cart.context'
import {ShoppingIcon, CartIconContainer, ItemCount} from'./cart-icon.styles.jsx'

    let CartIcon = () => {

        let {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
      

        let toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
        
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    
    )
}

export default CartIcon