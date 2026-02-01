import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContextProvider } from '../../Context/StoreContext';
const Navbar = (setShowLogin) => {

    const[menu,setMenu] = useState("menu");


    const{getTotalCartAmount,token,getToken}=useContext(StoreContext)

    const navigate=useNavigate();

    const logout=()=>{
          localStorage.removeItem("token");
          setToken("");
          navigate("/");

    }
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
       {!token?<button onClick ={()=>setShowLogin(true)}>sign in</button>
       :<div className = 'navbar-profile'>
          <img src={assets.profile_icon}alt=""/>
          <ul className="nav-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon}alt=""/><p>Orders</p></li>
            <hr/>
            <li onClick={logout}><img src={assets.logout_icon}alt="" />/<p>Logout</p></li>

          </ul>
    </div>
  )
        

export default Navbar