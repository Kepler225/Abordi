
import React from 'react'
import search__1 from '../assets/search_1.png'
import bulb from  '../assets/bulb.png'
import space from '../assets/space.png'
import iphone from '../assets/iphone.png'


function Work() {
  return (
    <section id='work' className='work-container'>
    <div className='work'>
        <h1>Powerful Features for Professionals</h1>
        <p>Everything you need to harness AI tools efficiently, all in one seamless workspace.</p>
          </div>

        <div className='work-section'>
          <div className='work-1'>
            <img src={search__1}/>
            <h1>AI Tool Curation</h1>
            <p>Tools organized specifically for your profession, eliminating the search <br/>for what works best.</p>
          </div>

          <div className='work-2'>
                <img src={bulb}/>
            <h1>Smart Recommendations</h1>
            <p>Our AI analyzes your needs and suggests the perfect tools for your<br/> specific tasks.</p>
          </div>

          <div className='work-3'>
                <img src={space}/>
            <h1>Unified Workspace</h1>
            <p>Access all your AI tools in one place without switching between tabs or<br/> applications.</p>
          </div>
          <div className='work-4'>
                <img src={iphone}/>
            <h1>Cross-Platform</h1>
            <p>Seamlessly work across mobile, tablet, and desktop with synchronized <br/>workflows.</p>
          </div>
        </div>
        </section>
  
  )
}

export default Work