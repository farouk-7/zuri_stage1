import React from 'react'
import './Content.css';
function Content() {
  const style = { color: "black",  }

  return (
   
    <div className='contents'>
        <div className='contents-container'>
            <div id='container'>
              <img src ='./images/DP.png' id='profile__image'></img>
              <div className='overlay'>
                <div className='camera'>
                  <img src='./images/camera.png' id='image-camera'></img>
                </div>
              </div>
            </div>

            <div className='name'>Annette Black</div>
            <div className='icon'><img src='./images/arrow.svg'></img></div>
            <div className='icon2'><img src='./images/menu.png'></img></div>
        
          
        </div>
    </div>
  )
}

export default Content
