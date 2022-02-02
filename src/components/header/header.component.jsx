import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selector";

const Header = ({ currentUser, hidden }) => (
    // console.log("inside header",currentUser),
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className='logo'></Logo>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
        </div>
        {
          hidden ? null : <CartDropDown />
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);