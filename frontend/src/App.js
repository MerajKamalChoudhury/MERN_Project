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
import Cart from "./Component/Cart/Cart"
import Shipping from "./Component/Cart/Shipping.js"
import ConfirmOrder from "./Component/Cart/ConfirmOrder"
import axios from 'axios';
// import Payment from './Component/Cart/Payment';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import MyOrders from './Component/Order/MyOrders';
import Dashboard from './Component/Admin/Dashboard';
import OrderSuccess from './Component/Cart/OrderSuccess';


function App() {
  const {isAuthenticated,user } = useSelector((state) => state.user);

  const [stripeApiKey,setStripeApiKey] = useState("");

  // const stripePromise = loadStripe(stripeApiKey);

  async function getStripeApiKey() {
    const {data} = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

    getStripeApiKey();
  },[]);

  return (
    <Router>
      <Header/>
      
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="/products" element={<Products/>} />
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
      <Route path="/account" element={<Profile/>} />
      <Route path="/shipping" element={<Shipping/>} />
       <Route path="/order/confirm" element={<ConfirmOrder/>} />
       <Route path="/admin/dashboard" element={<Dashboard/>} />
       <Route path="/success" element={<OrderSuccess/>} />
       {/* <Route path="/orders" element={<MyOrders/>} /> */}

      {/* <Elements stripe={loadStripe(stripeApiKey)}>
      <Route path="/process/payment" element={<Payment/>} />
      </Elements> */}
      </Route>
        
      {/* {stripeApiKey &&(
      <Route path="/process/payment"
       element={<ProtectedRoute isAuthenticated={isAuthenticated}>
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Payment/>
        </Elements> 
      </ProtectedRoute>} />)} */}
      
      <Route path="/products/:keyword" element={<Products/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/login" element={<LoginSignUp/>} />
      <Route path="/cart" element={<Cart/>} />
    
      {/* <Route path="/shipping" element={<Shipping/>} /> */}
      {/* <Route path="/order/confirm" element={<ConfirmOrder/>} /> */}
    
      
      </Routes>


      <Footer/>
    </Router>
  )
};

export default App;
