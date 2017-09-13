
var searchYouTube = (options, callback) => {
  //options = {query, max, key}

  var data = {};
  data.maxResults = 3;
  data.part = 'snippet';
  data.q = options.query;
  data.type = 'video';
  data.key = options.key;
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: data,
    success: function(data) {
      callback(data);
    },
    error: function(err) {
      console.log('err', err);
    }      
  });
};

window.searchYouTube = searchYouTube;