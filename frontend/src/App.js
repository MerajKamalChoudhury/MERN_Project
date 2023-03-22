import './App.css';
import Header from './Component/Layout/Header/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Footer from './Component/Layout/Footer/Footer';
import { useEffect, useState } from "react";
import Home from './Component/Home/Home.js'
import WebFont from "webfontloader";
import ProductDetails from "./Component/Product/ProductDetails";
import Products from "./Component/Product/Products";
import Search from "./Component/Product/Search"
import LoginSignUp from './Component/User/LoginSignUp';
import store from "./store"
import { loadUser } from './actions/userAction';
import UserOptions from "./Component/Layout/Header/UserOptions";
import { useSelector } from 'react-redux';
import Profile from "./Component/User/Profile"
import ProtectedRoute from './Component/Route/ProtectedRoute';


function App() {
  const {isAuthenticated,user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  },[]);

  return (
    <Router>
      <Header/>
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/account" element={<Profile/>} />
      <Route path="/products/:keyword" element={<Products/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/login" element={<LoginSignUp/>} />
      </Routes>


      <Footer/>
    </Router>
  )
};

export default App;
