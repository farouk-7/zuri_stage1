import React from 'react'
import './Link.css';

function Link(props) {
  return (

    <div className='contents-container'>
        <div className='link-container'>
               <a href={props.address}
                id='twitter'>{props.name}</a>
        </div>

    </div>
  )
}

export default Link