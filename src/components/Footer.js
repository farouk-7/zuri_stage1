import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer-content'>
        <div className='footer-container'>
          <div className='footer-content-container'>
              <div className='zuri'>
                <div className='zuri-first'>Zuri</div>
                <div className='dot'></div>
                <div className='internship'>Internship</div>
              </div>
              <div className='footer-text'>HNG Internship 9 Frontend Task</div>
              <div className='footer-image'><img src='./images/africa.png'></img></div>

          </div>
        </div>
    </div>
  )
}

export default Footer

