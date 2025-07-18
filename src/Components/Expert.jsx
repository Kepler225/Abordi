import React from 'react'
import user2 from '../assets/user-2.png'
import user1 from '../assets/user-1.png'
import user3 from '../assets/user-3.png'

function Expert() {
  return (
    <>
    <div id='expert' className='expert-section'>
        <div className='expert-title'>
            <h1>What Professionals Say</h1>
            <p>Industry experts who've transformed their AI workflow with Abordi</p>
        </div>
          
         <div className='user'>
           
           <div className='user-1'>
             <p>Abordi completely transformed how I use AI<br/>in my marketing campaigns. Everything I<br/> need is now in one place.</p>

              <div className='userp'>
                <img src={user1}/>
 
                <div className='img-text'>
                  <h3>Sarah Johnson</h3>
                  <h4>Marketing Director, TechGrowth</h4>
                </div>
              </div>
           </div>
            
           <div className='user-2'>
            <p>As a content creator, I was overwhelmed by the number of AI tools. Abordi curates exactly what I need when I need it.</p>
              <div className='userp'>
                <img src={user3}/>
 
                <div className='img-text'>
                  <h3>Michael Chen</h3>
                  <h4>Content Strategist, CreativeHive</h4>
                </div>
              </div>
           </div>
            
           <div className='user-3'>
             <p>The smart recommendations have introduced me to AI tools I didn't know existed but now can't live without.</p>
             
              <div className='userp'>
                <img src={user2}/>
 
                <div className='img-text'>
                  <h3>Sarah Johnson</h3>
                  <h4>Marketing Director, TechGrowth</h4>
                </div>
              </div>
           </div>

         </div>
         
    </div>
    </>
  )
}

export default Expert