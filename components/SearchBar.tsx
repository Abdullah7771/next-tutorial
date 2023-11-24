'use client'
import React, { useState,useEffect } from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const handleSearch=()=>{
        console.log('search')
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
   <div className='searchbar__item'>
    <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
   </div>

    </form>
  )
}

export default SearchBar