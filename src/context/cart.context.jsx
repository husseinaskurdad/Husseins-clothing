import { useState, createContext } from "react";

export let CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
})

export let CartProvider = ({children}) => {
let [isCartOpen, setIsCartOpen] = useState(false);
let value = { isCartOpen, setIsCartOpen };

return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
