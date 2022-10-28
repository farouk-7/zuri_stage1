import React from 'react'
import './Link.css';

function Link() {
  return (
    <div className='contents-container'>
         <div className='Link_content'>
            <a href='https://www.twitter.com/opeoluwaoyedeji' id='Twitter'>Twitter Link</a>
         </div>
         <div>
            <a href="https://training.zuri.team/"id='btn__zuri'>Zuri Team</a>
         </div>
         <div>
            <a href="http://books.zuri.team"id='books'>Zuri Books<p>
               Get the best books on designs and coding with illustrations and code snippet for better comprehension</p></a>
         </div>
         <div>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=<KingFarouk>"id='book__python'>Python Books<p>
               A-Z phython tutorial for beginners: All you need to become a better programmer in just one book</p></a>
         </div>
         <div>
            <a href="https://background.zuri.team"id='pitch'>Background Check for Coders<p>
               Let our team help you run background check on your codes, you don't have to go through the stress.<br/>
               Let us debug for you</p></a>
         </div>
         <div>
            <a href="https://books.zuri.team/design-rules/"id='book__design'>Design Books<p>
               Get your hand on the free design books offered by our team, know the rules in styling an amazing product and application</p></a>
         </div>
         
    </div>
  )
}

export default Link