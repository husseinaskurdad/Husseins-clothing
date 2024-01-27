import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.jsx'
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles.jsx";




let Navigation = () => {
  let {  currentUser } = useContext(UserContext)
  let {isCartOpen} = useContext(CartContext)


    return (
      <Fragment>
      <NavigationContainer>
     <LogoContainer to='/'>
      <CrwnLogo className="logo" />
      </LogoContainer>
      <NavLinks>
      <NavLink to= '/shop'> SHOP</NavLink>
      {
        currentUser ? (
          <NavLink as='span' onClick={SignOutUser}>SIGN OUT</NavLink>
        ) : (
          <NavLink to='/auth'>
        SIGN IN
        </NavLink>
        )
      }
      <CartIcon/>
     
      </NavLinks>
    {isCartOpen && <CartDropdown />} 
      </NavigationContainer>
      <Outlet />
      </Fragment>
    )
  }

  export default Navigation