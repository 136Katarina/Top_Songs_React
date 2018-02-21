import React, {Component} from 'react';
import Song from '../components/Song.js';
import SongList from '../components/SongList.js';


class SongsBox extends Component {
constructor() {
  super();
  this.state = {
    topSongs: []
  };
}

componentDidMount(){
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', () => {
    if (request.status !== 200) return;
    const jsonString = request.responseText;
    const data = JSON.parse(jsonString);
    this.setState({
      topSongs: data.feed.entry
    })
  })
  request.send();
}


  render(){
    console.log(this.state.topSongs);
    return(
        <SongList songList={this.state.topSongs}/>
  )}
};

export default SongsBox;
