import React, { Component} from'react';

const Song = (props) => {

  return (

     <div>
        <h3>{props.position}.{props.title}</h3>
        <p>{props.artist}</p>
        <img src={props.img[0].label} alt={props.artist}/>
    </div>



)
};

export default Song;
