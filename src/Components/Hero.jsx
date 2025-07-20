import React from 'react'
import hero from '../assets/hero.svg.webp'
import apple_2 from '../assets/Apple_2.png'
import plays from '../assets/plays.png'

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={hero}/>
        <div className='hero-text'>
             <h1>One Workspace. <span>Every Tool</span> You Need.</h1>
             <h2>Abordi is your all-in-one AI command center curated by <br/>profession, powered by intelligence, and built to simplify your<br/> workflow. No tabs. No noise. Just results.</h2>
        </div>

        <div className="store-buttons">
  <div className="store-button">
    <img src={apple_2} />
    <div className="text">
      <span className="small-text">Download on the</span>
      <span className="big-text">App Store</span>
    </div>
  </div>

  <div className="store-button">
    <img src={plays}/>
    <div className="text">
      <span className="small-text">GET IT ON</span>
      <span className="big-text">Google Play</span>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default Hero
