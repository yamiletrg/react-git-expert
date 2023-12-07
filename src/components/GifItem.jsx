import React from 'react'
import PropTypes from "prop-types";

const GifItem = ({title,url,id}) => {
    // console.log({title,url,id})
  return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default GifItem


/*
1. Proptypes  ??? yarn add
  a. title obligatorio
  b. url obligatorio

2. Evaluar snapshot*/



