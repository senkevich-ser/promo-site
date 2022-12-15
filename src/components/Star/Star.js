/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import star from '../../images/Star7.svg';
import './Star.css';


function Star(props) {

  return (
    <img src={star} style={props.style} className='star'/>
  )
}

export default Star;