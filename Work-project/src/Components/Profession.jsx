import React from 'react'
import market from '../assets/market.png'
import pen from '../assets/pen.png'
import hr from '../assets/hr.png'
import design from '../assets/design.png'
import development from '../assets/development.png'
import finance from '../assets/finance.png'
import education from '../assets/education.png'
import legal from '../assets/legal.png'
function Profession() {
  return (
    <>
  <div id='profession' className="marketing-section">
      <div className="profession">
        <div className="profession-title">
          <h1>Tailored for Your Profession</h1>
          <p>Abordi provides personalized AI workspaces for professionals across industries</p>
        </div>
      </div>
      <section className="marketing-grid">
        <div className="marketing-box color-1">
          <img src={market}  />
          <h3>Marketing</h3>
        </div>
        <div className="marketing-box color-2">
          <img src={pen}  />
          <h3>Content creation</h3>
        </div>
        <div className="marketing-box color-3">
          <img src={hr}  />
          <h3>HR/recruiting</h3>
        </div>
        <div className="marketing-box color-4">
          <img src={design}  />
          <h3>Design</h3>
        </div>
        <div className="marketing-box color-5">
          <img src={development}  />
          <h3>Development</h3>
        </div>
        <div className="marketing-box color-6">
          <img src={finance}  />
          <h3>Finance</h3>
        </div>
        <div className="marketing-box color-7">
          <img src={education}  />
          <h3>Education</h3>
        </div>
        <div className="marketing-box color-8">
          <img src={legal}  />
          <h3>Legal</h3>
        </div>
      </section>
    </div>

    </>
  )
}

export default Profession