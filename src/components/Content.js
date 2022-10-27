import React from 'react'
import './Content.css';
function Content() {
  const style = { color: "black",  }
  
  const image= document.querySelector("#overlay")
  const handleOver=()=>{
     image.style.display="block";
  }
  const handleOut=()=>{
    image.style.display="none"
  }
  return (
   
    <div className='contents'>
        <div className='contents-container'>
            <div id='profile__img'>
              <img id=""src ='./images/DP.png'onMouseOver={handleOver} onMouseOut={handleOut}></img>
              <div id='overlay'>
                  <img src='./images/camera.png'></img>
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
