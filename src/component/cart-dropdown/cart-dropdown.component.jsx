import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import {CartDropdownComponent, CartItems, EmptyMessage} from'./cart-dropdown.styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { useNavigate } from 'react-router-dom'


let CartDropdown = () => {
    let {cartItems} = useContext(CartContext);
    let navigate = useNavigate()

    let goToCheckOutHandler = () => {
        navigate ('/checkout')
    }

    return(
       <CartDropdownComponent>
       <CartItems>
      { cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
      ) :
            (<EmptyMessage>Your Cart Is Empty</EmptyMessage>)}
       </CartItems>
       <Button onClick={goToCheckOutHandler} >GO TO CHECKOUT</Button>
       </CartDropdownComponent> 
    )
}

export default CartDropdown