import React from 'react'
import './LinkCard.css'
import imgTwitter from './../img/twitter.jpg'
function LinkCard() {
  return (
    <div className='link-card'>
    <div className='container-link-handle'>
        <div>
            <img src={imgTwitter} className='img-card'/>
        </div>
        <div className='handle-name'>
            <h3>Twitter Handle</h3>
        </div>
    </div>
    

   </div> 
  )
}

export default LinkCard