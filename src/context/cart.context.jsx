import { useState, createContext, useEffect } from "react";

let addCartItem = (cartItems, productToAdd) => {
    // find if the product we wan to add already exists in our cart item
    let existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    // if it already exist, find it and add a quantity of 1 to it, if not just leave it
    if (existingCartItem) {
        return (
            cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
    // saying leave the cart items that are already in there and add to them our newly added product giving it a quantity of one

}

export let CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount : 0
    
})

export let CartProvider = ({children}) => {
let [isCartOpen, setIsCartOpen] = useState(false);
let [cartItems,setCartItems] = useState([]);
let [cartCount, setCartCount] = useState(0)


useEffect(() => {
    let newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
    setCartCount(newCartCount)

},[cartItems])


let addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd))

}

let value = { isCartOpen, setIsCartOpen,cartItems, addItemToCart, cartCount};

return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
