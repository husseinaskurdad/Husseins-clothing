import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag (1).svg'
import { CartContext } from '../../context/cart.context'
import './cart-icon.styles.scss'

    let CartIcon = () => {

        let {isCartOpen, setIsCartOpen} = useContext(CartContext)

        let toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
        
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
        </div>
    
    )
}

export default CartIcon