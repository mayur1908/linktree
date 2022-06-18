import React from 'react'
import './LinkCard.css'
import imgTwitter from './../img/twitter.png'
import imgGithub from './../img/github.png'
import imgLinkdin from './../img/linkedin.png'
const imgMap={
  "twitter" : imgTwitter,
  "github" :imgGithub,
  "linkdin" : imgLinkdin
}
function LinkCard(props) {
  return (
    <div className={`link-card bg-${props.title}`}>
      <a href={props.link} className='hyperlink'>
      <div className='container-link-handle'>
        <div>
          <img src={imgMap[props.title]} className='img-card' />
        </div>
        <div className='handle-name'>
          <h3>{props.username}</h3>
        </div>
      </div>
      <div className='handle-discription'>
        <p className='username'>{props.tagline} </p>
      </div>
      </a>
    </div>
  )
}

export default LinkCard