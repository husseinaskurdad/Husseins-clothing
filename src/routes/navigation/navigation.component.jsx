import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss'
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";



let Navigation = () => {
  let {  currentUser } = useContext(UserContext)
  let {isCartOpen} = useContext(CartContext)


    return (
      <Fragment>
      <div className="navigation">
      <Link className="logo-container" to='/'>
      <CrwnLogo className="logo" />
      </Link>
      <div className="nav-links-container">
      <Link className="nav-link" to= '/shop'> SHOP</Link>
      {
        currentUser ? (
          <span className="nav-link" onClick={SignOutUser}>SIGN OUT</span>
        ) : (
          <Link className="nav-link" to='/auth'>
        SIGN IN
        </Link>
        )
      }
      <CartIcon/>
     
      </div>
      {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
      </Fragment>
    )
  }

  export default Navigation