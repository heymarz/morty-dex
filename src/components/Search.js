import React from 'react'

const Search = ({setSearch, searchTerm}) => {

  return (
    <div className='classes.search'>
      <br />
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
