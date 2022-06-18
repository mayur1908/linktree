import React from 'react'
import './LinkCard.css'
import imgTwitter from './../img/twitter.png'
function LinkCard(props) {
  return (
    <div className='link-card'>
      <div className='container-link-handle'>
        <div>
          <img src={imgTwitter} className='img-card' />
        </div>
        <div className='handle-name'>
          <h3>{props.username}</h3>
        </div>
      </div>
      <div className='handle-discription'>
        <p>{props.tagline} </p>
      </div>
    </div>
  )
}

export default LinkCard