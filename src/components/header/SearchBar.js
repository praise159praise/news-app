import React from 'react'
import 'boxicons/css/boxicons.min.css'
import './searchbar.css'

const SearchBar = () => {

    return (
        <div className="search">
            
            <i class='bx bx-search'></i>
            <input type='text' placeholder='search for news on sports, Business, entertainment e.t.c' />
            
        </div>
    )
}

export default SearchBar
