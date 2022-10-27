import React from 'react'
import './Social.css';

function Social() {
  return (
    <div className='contents-container'>
      <div className='social-icons'>
          <div id='slack'><img src='./images/slack.png'></img>
          <h1>KingFarouk</h1></div>
          <a href='https://github.com/farouk-7'
          className='git'><i class="fa-brands fa-github"></i></a>
          
      </div>
    </div>
  )
}

export default Social