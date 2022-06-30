import React from 'react'
import './navbar.css'
import profile from './f1.jpg'
import {Link} from 'react-router-dom'

const NavBar =()=>{
    const user=false
    return(
        <div className='nav-container'>
            <div className='nav-left'>
                CELEBAL TECH
            </div>
            <div className='nav-center'>
                <ul className='nav-center-list'>
                    <li className='nav-list'><Link className='link' to="/" style={{textDecoration:'none', color:'inherit'}}>HOME</Link></li>
                    <li className='nav-list'><Link className='link' to='/'>ABOUT</Link></li>
                    <li className='nav-list'><Link className='link' to='/'>CONTACT</Link></li>
                    <li className='nav-list'><Link className='link' to='/write'>WRITE</Link></li>
                    <li className='nav-list'><Link className='link' to='/login'>LOGIN</Link></li>
                </ul>
            </div>
            <div className='nav-right'>
                <img src={profile} className='profile' alt='profile'></img>
                <i className='right-icons fas fa-search'></i>
                <i className="right-icons fa-brands fa-facebook"></i>
                <i className="right-icons fa-brands fa-instagram"></i>
                <i className="right-icons fa-brands fa-twitter"></i>
                
                
            </div>
        </div>
    )
} 

export default NavBar