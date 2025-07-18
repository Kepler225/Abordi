import React from 'react'
import select_2 from '../assets/select_2.png'
import bulb_2 from '../assets/bulb_2.png'
import space_2 from '../assets/space_2.png'
import product from '../assets/product.png'


function Abordi() {
  return (
    <>
    <div id='abordi' className='abordi'>
        <div className='abordi-tittle'>
            <h1>How Abordi Works</h1>
            <p>A simple process to transform your AI workflow in minutes</p>
        </div>
    <section className="steps-grid">
      <div className="step">
        <div className="step-icon">
          <div className="step-number">01</div>
          <img src={select_2}/>
        </div>
        <h3>Select Your Profession</h3>
        <p>Choose your professional field and let Abordi customize your AI workspace.</p>
      </div>

      <div className="step">
        <div className="step-icon">
          <div className="step-number">02</div>
        
          <img src={bulb_2} />
        </div>
        <h3>Get Recommendations</h3>
        <p>Receive personalized AI tool suggestions tailored to your specific needs.</p>
      </div>
      <div className="step">
        <div className="step-icon">
          <div className="step-number">03</div>

          <img src={space_2}/>
        </div>
        <h3>Unified Workspace</h3>
        <p>Access all your AI tools in one place without switching between tabs  or  applications.</p>
      </div>
      <div className="step">
        <div className="step-icon">
          <div className="step-number">04</div>
          <img src={product} />
        </div>
        <h3>Cross-Platform</h3>
        <p>Seamlessly work across mobile, tablet, and desktop with synchronized  workflows.</p>
      </div>
    </section>

    </div>
    
    </>
  )
}

export default Abordi