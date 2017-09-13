var MovieList = (props) => {
  return(
    <div className="list">
      {console.log(props)}
      {props.movies.map((movie, key)=> <Movie key={key} movie={movie}/>)}
     </div>
   )
}

window.MovieList = MovieList;