class App extends React.Component {
  constructor() {
  	super();
  	this.state = {
      movies: window.moviesList,
      title: '',
      stack: []
  	}
  }

  search(title) {
    var isSubset = function(q, string) {
      var r = new RegExp(`(?:${q})`, 'gi');
      return !!string.match(r);
    };

    var movie = this.state.movies.filter((movie) => {
      return isSubset(title, movie.title);
    });
    console.log('prevState:', this.state)
    if (movie.length) {
      var newStack = this.state.stack.slice();
      newStack.push(this.state.movies.slice());
      this.setState({'stack': newStack}, () => console.log(this.state.stack))
      this.setState({'movies': movie});
      // console.log(this.state)
    }
  }

  select(value) {
    this.state.title = value;
  }

  renderPrev() {
    if (this.state.stack.length) {
      var newState = this.state.stack.slice();
      var prev = newState.pop();
      console.log('newState: ', newState);
      console.log('prev: ', prev);
      this.setState ({'stack': newState});
      this.setState({'movies': prev});
    }
  }

  render() {
  	return(
  		<div>

  		<SearchBar selectVar={() => this.state.title} 
        select={this.select.bind(this)} 
        search={this.search.bind(this)}
        renderPrev={this.renderPrev.bind(this)}
      />
  		<MovieList movies={this.state.movies}/>
  		</div>
    )
  }
}




ReactDOM.render( <App />, document.getElementById('app'))

window.App = App;