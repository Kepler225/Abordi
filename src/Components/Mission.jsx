import React from 'react'
import Level from '../assets/Level.jpg'
import arrow_icon from '../assets/arrow_icon.svg'

function Mission() {
  return (
    <>
      <div className='mission'>
       <div className="mission-section">
      <img src={Level}  className="mission-image" />

      <div className="mission-text">
        <h2>Our Mission</h2>
        <p>
          We're committed to bringing clarity to the AI landscape by providing professionals with exactly
          the tools they need—no more, no less. Our mission is to make AI accessible, organized, and
          purposeful for everyone.
        </p>
      </div>
    </div>
    <div className='mission-bottom'>
      <h2>Our Story</h2>
      <p className='ht'> Abordi to bring order to the AI chaos.</p>
       <p>With hundreds of tools launching every month, professionals are overwhelmed.</p>
        <p className='pot'>Too many choices. No clear path.</p>
        <p>Abordi solves that by offering a unified AI workspace—curated by profession, powered by smart recommendations, and packed with the best tools in one <br/> seamless space.</p>
        <p className='pot'> No tabs. No noise. Just results.</p>
       <h3 className='more'>
        Learn more about our team
  <img src={arrow_icon}  className="arrow-icon" />
  
</h3>
    </div>
    </div>
    </>
  )
}

export default Mission