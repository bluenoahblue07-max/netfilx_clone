import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.png'
import search_icon from '../../assets/assets/search_icon.svg'
import bell_icon from '../../assets/assets/bell_icon.svg'
import profile_img from '../../assets/assets/profile_img.png'
import caret_icon from '../../assets/assets/caret_icon.svg'
import { Link } from 'react-router-dom'
import { logout } from '../../../firebase.js'

const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current?.classList.add('nav-dark')
      } else {
        navRef.current?.classList.remove('nav-dark')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <Link to="/"><img src={logo} alt="Netflix Logo" className='logo' /></Link>
         <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tv-shows">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/new-and-popular">New & Popular</Link></li>
          <li><Link to="/my-list">My List</Link></li>
          <li><Link to="/browse-by-language">Browse by Language</Link></li>
         </ul>
      </div>
      <div className="navbar-right">
         <img src={search_icon} alt="Search" className="icon" />
         <p>Children</p>
         <img src={bell_icon} alt="Notifications" className="icon" />
         <div className="navbar-profile">
           <img src={profile_img} alt="Profile" className="profile" />
           <img src={caret_icon} alt="Caret"/>
           <div className="dropdown">
             <p onClick={()=>{
              logout()
             }}>Sign Out</p>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar
