class App extends React.Component {
  constructor() {
  	super();
  	this.state = {
      movies: window.moviesList,
      title: '',
      stack: [],
      vidImg: ''
  	}
  }

  search(title) {
    if (!title) {
      this.setState({'movies': window.moviesList});
      return;
    }
    var isSubset = function(q, string) {
      var r = new RegExp(`(?:${q})`, 'gi');
      return !!string.match(r);
    };

    var movie = this.state.movies.filter((movie) => {
      return isSubset(title, movie.title);
    });

    if (movie.length) {
      var newStack = this.state.stack.slice();
      newStack.push(this.state.movies.slice());
      this.setState({'stack': newStack}, () => console.log(this.state.stack))
      this.setState({'movies': movie});
    }

    var options = {
      key: '',
      query: `${title} movie trailer` 
    }
    searchYouTube(options, (data) => {
      console.log(options.q, data);
      this.setState({'vidImg': data.items[0].snippet.thumbnails.default.url})
    });
    //api key, query on options obj
  }

  renderYouTube() {
    console.log('vidimg', this.state.vidImg)
    return this.state.vidImg;  
  }

  select(e) {
    if (e.keyCode === 13) {
      this.search(this.state.title);
    }
    this.state.title = e.target.value;
  }

  renderPrev() {
    if (this.state.stack.length) {
      var newState = this.state.stack.slice();
      var prev = newState.pop();

      this.setState ({'stack': newState});
      this.setState({'movies': prev});
    }
  }

  render() {
  	return(
  		<div>
      <img src={()=>this.renderYouTube()}>
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