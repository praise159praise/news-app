import React, { useState } from 'react';
import Username from './Username'
import SearchBar from './SearchBar'
import AppName from './AppName'
import 'boxicons'

import SideBar from '../SideBar/SideBar'
import './header.css'

const Header = () => {

    const [sideBar, setSideBar] = useState(true)

    return (
        <>
        <div className="nav">
            <div className="newsside">
            <i class='bx bx-menu' onClick={() => setSideBar(!sideBar)} ></i>
            <AppName aname = 'News App'/>
            </div>
            <div className="search-side">
            
            <SearchBar />
            <Username usericon = 'P'  />
            </div>
        </div>
        {(sideBar) ? <SideBar /> : "" }
        </>
    )
}

export default Header
 
   
