import './checlout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

let CheckOutItem = ({cartItem}) => {
 let {deleteItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext)
 let {name, imageUrl, price, quantity} = cartItem

let addItemHandler = () => addItemToCart(cartItem)
let removeItemHandler = () => removeItemFromCart(cartItem)
 let deleteItemFromCartHandler = () => deleteItemFromCart(cartItem)
    return (
        <div className='checkout-item-container'>
        <div className='image-container'>
        <img src= {imageUrl} alt= {`${name}`}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={deleteItemFromCartHandler}>&#10005;</div>
        </div>
    )

}

export default CheckOutItem