import React from 'react'
import "./module.search.css"
import SearchIcon from '../../assets/icons/Search.svg';
const Search = ({text, marginLeft ,width}) => {
  return (
    <div className='search'  style={{
    marginLeft:`${marginLeft}`, 
    width :`${width}` ? `${width}` :``
    }}>
       <img src={SearchIcon} alt="Search"  />
      <input placeholder={text} />
      </div>
  )
}

export default Search