import { useState, createContext, useEffect } from "react";
import CartDropdown from "../component/cart-dropdown/cart-dropdown.component";

let addCartItem = (cartItems, productToAdd) => {
    // find if the product we wan to add already exists in our cart item
    let existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    // if it already exist, find it and add a quantity of 1 to it, if not just leave it
    if (existingCartItem) {
        return  cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
        
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
    // saying leave the cart items that are already in there and add to them our newly added product giving it a quantity of one

}

let removeCartItem = (cartItems, cartItemToRemove) => {
    let existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    // id the cart id does not equal to the one we are tryna remove, keep the value
    if(existingCartItem.quantity === 1  ) {
        return cartItems.filter (cartItem => cartItem.id !== cartItemToRemove.id)
    }

 return  cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
          
   
}

    let deleteCartItem = (cartItems, cartItemToDelete) => {
        
         return  cartItems.filter (cartItem => cartItem.id !== cartItemToDelete.id)      
 }
 
export let CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    cartCount : 0,
    cartTotal: 0
    
})

export let CartProvider = ({children}) => {
let [isCartOpen, setIsCartOpen] = useState(false);
let [cartItems,setCartItems] = useState([]);
let [cartCount, setCartCount] = useState(0)
let [cartTotal, setCartTotal] = useState(0)


useEffect(() => {
    let newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
    setCartCount(newCartCount)

},[cartItems])

useEffect(() => {
    let newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price,0)
    setCartTotal(newCartTotal)

},[cartItems])


let addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd))

}

let removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems,cartItemToRemove))

}

let deleteItemFromCart = (cartItemToDelete) => {
    setCartItems(deleteCartItem(cartItems,cartItemToDelete))
}

let value = { isCartOpen, setIsCartOpen,cartItems, addItemToCart, cartCount, removeItemFromCart, deleteItemFromCart, cartTotal};

return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
