window.movies = {

} 
window.moviesList = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
window.helpers = {
}


class App extends React.Component {
  constructor() {
  	super();
  	this.state = {
      movies: window.moviesList,
      title: ''
  	}
  }

  search(title) {
    var movie = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase() === title.toLowerCase();
    })
    if (movie.length) {
      this.state.movies = movie;
      console.log(this.state)
      this.render()
    }
  }

  select(value) {
    this.state.title = value;
  }

  render() {
  	return(
  		<div>
  		<SearchBar selectVar={() => this.state.title} select={this.select.bind(this)} search={this.search.bind(this)}/>
  		<MovieList movies={this.state.movies}/>
  		</div>
    )
  }
}

var SearchBar = (props) => {

  return (
  	<div className="search-bar">

      <input onKeyUp={(e)=>props.select(e.target.value)} type="text" className="searchBar"/>
      <span>
        <button className="btn" onClick={()=> props.search(props.selectVar())} className="searchButton">
          Srch
        </button>
      </span>
    </div>
  )
}

var MovieList = (props) => {
 	return(
 		<div className="list">
       {props.movies.map((movie, key)=> <Movie key={key} movie={movie}/>)}
     </div>
   )
}

var Movie = (props) => (
  <div className="movie">
    {props.movie.title}
  </div>

)



ReactDOM.render( <App />, document.getElementById('app'))