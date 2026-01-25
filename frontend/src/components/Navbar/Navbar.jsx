import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContextProvider } from '../../Context/StoreContext';
const Navbar = (setShowLogin) => {

    const[menu,setMenu] = useState("menu");


    const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
       <Link to='/'></Link>img src={assets.logo}alt=""className="logo" />
       <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?active:""}>home</li>
            <a href= '#explore-menu' onClick={()=>setMenu("menu")}  className={menu==="menu"?active:""}>menu</li>
            <a href='#app-download'onClick={()=>setMenu("mobile-app")}  className={menu==="mobile-app"?active:""}>mobile-app</li>
            <a href='#footer' onClick={()=>setMenu("contact-us")}  className={menu==="contact-us"?active:""}>contact us</li>
       </ul>
       <div className="navbar-right">
        <img src={assets.search_icon}alt=""/>
        <div className="navbar-search-icon">
            <Link to='/cart'>img src={assets.basket_icon}alt=""/</Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
       </div>
    </div>
  )
}

export default Navbar