import React, { Component} from 'react';
import Song from "./Song.js";

const SongList = (props) => {

  const list = props.songList.map((song, index) => {
    return(
    <Song key={index} img={song['im:image']} position={index+1} title={song['im:name'].label} artist={song['im:artist'].label} />
    )
  })

return (
<div>
  {list}
</div>


)
}

export default SongList;
