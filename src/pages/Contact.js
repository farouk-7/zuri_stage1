import React from 'react'
import './Contact.css'
import Footer from '../components/Footer'

function Contact() {
   const name="KingFarouk"

   const handleSubmit=(e)=>{ 
    const message= document.getElementById('message');
    if(message.value==""){
      e.preventDefault()
    }
    else{
      document.querySelector("#message_error").innerHTML=""
      document.querySelector("#message").style.border="1px solid #d0d5dd";
      alert("message sent")

    }

    
   }


   const handleClicked=()=>{
    const message= document.getElementById('message');
    if(message.value==""){
      document.querySelector("#message_error").innerHTML="Please enter a message"
      document.querySelector("#message").style.border="1px solid #f89687"
      }
  else{
      document.querySelector("#message_error").innerHTML=""
      document.querySelector("#message").style.border="1px solid #d0d5dd";
      }
   }

   const isFocus=()=>{
    document.getElementById("message").style.border="2px solid #84CAFF";
   }

   const actionFocus=()=>{
     document.getElementById("email").style.border="2px solid #84CAFF"
   }

   const handleFocus=()=>{
    document.getElementById("btn__submit").style.backgroundColor="#1570EF"
    document.getElementById("btn__submit").style.border="5px solid #D1E9FF"
   }
   const isChecked=()=>{
     if(document.getElementById("box").checked){
       document.getElementById("btn__submit").style.backgroundColor="#1570ef"
     }
     else{
      document.getElementById("btn__submit").style.backgroundColor="#b2ddff"
     }
   }

  return (
    <div className='contact'>
        <div className='contents-container' >
            <div className='text'><h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything you have in mind.</p>
            </div>
            <form id='form' onSubmit={handleSubmit}>
              <div className='names'>
                <label>First name
                <input required type='text' id='first_name' placeholder='Enter your first name'></input>
                </label>

                <label>Last name
                <input required type="text" id='last_name' placeholder='Enter your last name'></input>
                </label>
              </div>

             
              <label>Email
                <input required type='email' id='email' placeholder='yourname@email.com' onFocus={actionFocus}></input>
              </label>
            
              <label>Message
              <textarea id='message' placeholder='send a message and i will reply as soon as possible...' onFocus={isFocus}></textarea>
              <div id='message_error'></div>
              </label>
 
              <div className='check'>
                <input required type='checkbox' id='box' onClick={isChecked}></input>
                <p>You agree to providing your data to {name} who might contact you.</p>
              </div>

               <button type='submit' id='btn__submit' onFocus={handleFocus} onClick={handleClicked}>Send message</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact