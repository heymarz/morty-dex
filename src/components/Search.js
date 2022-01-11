import React,{useState} from 'react';

function Search ({onSearch}) {
  const [search, setSearch] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    onSearch(search)
  }

  return (
    <div>
      <form className='classes.search'onSubmit={handleSubmit}>
        <br />
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </div>
   
  )
}

export default Search
