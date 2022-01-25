import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-sign-up/sign-in-and-sign-up.component';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this. unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      // console.log(this.state.currentUser);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/signin' element={<SignInAndSignUpPage/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
