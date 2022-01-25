import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
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
            {/* { currentUser ? (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>) : (<link className="option" to='/signin'>SIGN IN</link>)} */}
        </div>
    </div>
);

export default Header;