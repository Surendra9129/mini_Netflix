import React from 'react';
import './navbar.scss'
import {Search,Notifications, ArrowDropDown} from '@material-ui/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isScrolled, setIsScrolled]=useState(false)
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0 ?false : true)
        return()=> (window.onscroll=null)
    }
    return (
        <div className={isScrolled? 'navbar scrolled': 'navbar'}>
            <div className='container'>
                <div className='left'>
                    <img src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" alt="" />
                    <Link to='/' className='link'>
                    <span>homepage</span>
                    </Link>
                    <Link to='/series' className='link'>
                    <span>Series</span>
                    </Link>
                    <Link to='movies' className='link'>
                    <span>Movies</span>
                    </Link>
                    <span>New and Papular</span>
                    <span>My List</span>
                </div>
                <div className='right'>
                    <Search className='icons' />
                    <span>KID</span>
                    <Notifications className='icons'/>
                    <img src="images/profile_pic.jpg" alt="" />
                    <div className='profile'>
                    <ArrowDropDown className='icons'/>
                    <div className='options'>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Navbar;