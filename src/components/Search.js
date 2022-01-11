import React,{useState} from 'react'
import ListMortys from './Mortys/ListMortys';

function Search ({onSearch}) {
  const [search, setSearch] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    onSearch(search)
  }

  return (
    <div>
      <form className='classes.search'>
        <br />
        <label htmlFor="search" onSubmit={handleSubmit}>Search</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      {/* <ListMortys />
      why doesnt this work??? I want to just loop it to the component so that it can also render a list of mortys */}
    </div>
   
  )
}

export default Search
