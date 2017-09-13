var SearchBar = (props) => {

  return (
    <div className="search-bar">

      <input onKeyUp={(e)=>props.select(e)} type="text" className="searchBar"/>
      <span>
        <button className="searchButton" onClick={()=> props.search(props.selectVar())}>
          Srch
        </button>
      </span>
      <span>
        <button className="searchButton" onClick={()=>props.renderPrev()}>prev</button>
      </span>
    </div>
  )
}

window.SearchBar = SearchBar;