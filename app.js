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
window.helpers.objectifyValue = function(list) {
	console.log('l')
	var byValue = {};
	/*list.forEach((movie) => {
		console.log(movie)
    byValue[movie.title] = movie.title;
	})*/
	return byValue;
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
 
  }

  render() {
  	return(
  		<div>
  		<SearchBar />

  		<MovieList movies={this.state.movies}/>
  		</div>
    )
  }
}

var SearchBar = (props) => {

  return (
  	<div>

      <input type="text" className="searchBar"/>
      <span>
        <button onClick={()=> props.search(/*todo: grab input text*/)} className="searchButton">
          Srch
        </button>
      </span>
    </div>
  )
}

var MovieList = (props) => {
 	return(
 		<div className="list">
      {console.log(props.movies)}
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