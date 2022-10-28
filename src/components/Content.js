import React from 'react'
import './Content.css';
function Content() {
  const style = { color: "black",  }

  const handleHover=()=>{
    document.querySelector('#mobileHover').style.display="block"
    document.querySelector('#mobile').style.display="none"
  }
  const handleOut=()=>{
    document.querySelector('#mobileHover').style.display="none"
    document.querySelector('#mobile').style.display="block"
  }
  const setClick=()=>{
    document.querySelector('#mobileHover').style.display="none"
    document.querySelector('#mobile').style.display="none"
    document.querySelector('.icon4').style.display="block"
  }
  const performClick=()=>{
    document.querySelector('#mobileHover').style.display="block"
    document.querySelector('#mobile').style.display="none"
    document.querySelector('.icon4').style.display="none"
  }
  const workEnter=()=>{
    document.querySelector('#default').style.display="none"
    document.querySelector('.icon1').style.display="block"
  }
  const handleave=()=>{
    document.querySelector('#default').style.display="block"
    document.querySelector('.icon1').style.display="none"
  }
  const handleClick=()=>{
    document.querySelector('.icon11').style.display="block"
    document.querySelector('.icon1').style.display="none"
  }
  const actionClick=()=>{
    document.querySelector('.icon11').style.display="none"
    document.querySelector('.icon1').style.display="block"
  }


  return (
   
    <div className='contents'>
        <div className='contents-container'>
            <div id='container'>
              <img src ='./images/ope.jpg' id='profile__img'></img>
              <div className='overlay'>
                <div className='camera'>
                  <img src='./images/camera.png' id='image-camera'></img>
                </div>
              </div>
            </div>

            <div id='twitter'>@noblefarz7</div>
            <h1 id='slack'>KingFarouk</h1>
            <div className='icon'><img src='./images/arrow.svg' id='default' onMouseEnter={workEnter}></img></div>
            <div className='icon1'><img src='./images/sharestate.png' onMouseOut={handleave} onClick={handleClick}></img></div>
            <div className='icon11'><img src='./images/focus.png' onClick={actionClick}></img></div>
            <div className='icon3'><img src='./images/mobilesharehover.png' id='mobileHover' onMouseOut={handleOut} onClick={setClick}></img></div>
            <div className='icon4'><img src='./images/mobilefocus.png' onClick={performClick}></img></div>
            <div className='icon2'><img src='./images/menu.png'id='mobile' onMouseOver={handleHover}></img></div>

        
          
        </div>
    </div>
  )
}

export default Content
