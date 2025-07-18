import React from 'react'
import content from '../assets/content.webp'
import side_1 from '../assets/side_1.webp'
import side_2 from '../assets/side_2.webp'
import blue from '../assets/blue.png'

function Stories() {
  return (
    <>
    <div id='stories' className='stories'> 
        <div className='stories-section'>
        <div className='stories-title'>
            <h1>Real-World Success Stories</h1>
            <p>How professionals are using Abordi to transform their workflows</p>
        </div>
        </div>

          <div className="content-section">
      <div className="image-container">
        <img src={content} />
      </div>
      <div className="text-container">
        <h4>Content Creator</h4>
        <h2>Content Creation Workflow</h2>
        <p>See how a content marketer uses Abordi to brainstorm, draft, edit, and optimize content all in one workspace.</p>
          <h5 className='full'>
                Read full case study
          <img src={blue}  className="arrow-icon" />
          
        </h5>
           
      
      </div>
    </div>
    <div className="text-image-section">
      <div className="text-container">
        <h4>HR / Recruiting</h4>
        <h2>Recruiting Automation</h2>
        <p>Grow your audience, manage your brand, and create content effortlessly.</p>
         <h5 className='full'>
                Read full case study
          <img src={blue}  className="arrow-icon" />
          
        </h5>
      </div>
      <div className="image-container">
        <img src={side_1} />
      </div>
    </div>
     <div className="content-section">
      <div className="image-container">
        <img src={side_2} />
      </div>
      <div className="text-container">
        <h4>Designer</h4>
        <h2>Design Collaboration</h2>
        <p>Learn how design teams use Abordi to generate mockups, get feedback, and iterate designs efficiently.</p>
         <h5 className='full'>
                Read full case study
          <img src={blue}  className="arrow-icon" />
          
        </h5>
      </div>
    </div>
    </div>
    </>
  )
}

export default Stories