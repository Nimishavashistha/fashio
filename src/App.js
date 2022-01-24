import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-sign-up/sign-in-and-sign-up.component';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route path='/shop' element={<ShopPage/>} />
      <Route path='/signin' element={<SignInAndSignUpPage/>} />
      </Routes>
    </div>
  );
}

export default App;
