import './checkout-page.styles.scss'
import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'
import CheckOutItem from '../../component/checkout-item/cheeckout-item.component'


let CheckOut = () => {
    let { cartItems, cartTotal} = useContext(CartContext)

    return (
        <div className='checkout-container'>
        <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Description</span>
        </div>
        <div className='header-block'> 
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
       </div>
       {cartItems.map((cartItem)=> (
        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
))}
            <span className='total'>Total : ${cartTotal}</span>
        </div>
    )
}

export default CheckOut






 