import React, { useState } from 'react';
import vite_1 from '../assets/vite_1.png';
import arrow_icon from '../assets/arrow_icon.svg'

function Frequent() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);

  return (
    <>
      <div id='frequent' className='frequent'>
        <div className='frequent-title'>
          <div className='frequent-section'>
            <h1>Frequently Asked Questions</h1>
            <p>Everything you need to know about Abordi and how it can transform your AI workflow.</p>

        
            <div className="learn-more-section">
              <h3 className="more_1" onClick={() => setShowMore1(!showMore1)}>
                 How does Abordi know which tools to recommend for my profession?
                <img
                  src={vite_1}
                  className={`arrow-icon ${showMore1 ? 'rotate' : ''}`} />
              </h3>
              {showMore1 && (
                <p className="extra-info">
                  Abordi centralizes all your AI tools in one workspace, eliminating the need to switch between multiple applications. Our smart recommendation system learns your preferences and suggests the best tools for your specific tasks, saving you research time and decision fatigue.
                </p>
              )}
            </div>

            
            <div className="learn-more-section">
              <h3 className="more_1" onClick={() => setShowMore2(!showMore2)}>
                 What makes Abordi different from using AI tools separately?
                <img
                  src={vite_1}
                    className={`arrow-icon ${showMore2 ? 'rotate' : ''}`}/>
               
              </h3>
              {showMore2 && (
                <p className="extra-info">
                 We analyze the most effective tools used by professionals in your field and supplement this with machine learning that adapts to your specific usage patterns. The more you use Abordi, the more personalized your recommendations become.
                </p>
              )}
            </div>

            
            <div className="learn-more-section">
              <h3 className="more_1" onClick={() => setShowMore3(!showMore3)}>
                   Can I add my own custom AI tools to Abordi?
                <img
                  src={vite_1}
                  className={`arrow-icon ${showMore3 ? 'rotate' : ''}`} />
                
              </h3>
              {showMore3 && (
                <p className="extra-info">
                  Yes! Pro and Team plans allow you to integrate custom API keys for supported AI services, letting you connect your existing subscriptions directly to your Abordi workspace.
                </p>
              )}
            </div>

            
            <div className="learn-more-section">
              <h3 className="more_1" onClick={() => setShowMore4(!showMore4)}>
                Does Abordi work offline?
                <img
                  src={vite_1}
                  className={`arrow-icon ${showMore4 ? 'rotate' : ''}`}/>
                
              </h3>
              {showMore4 && (
                <p className="extra-info">
                    While most AI tools require internet connectivity to function, Abordi's interface can operate in a limited offline mode, allowing you to access previously generated content and prepare queries for when you're back online.
                </p>
              )}
            </div>

        
            <div className="learn-more-section">
              <h3 className="more_1" onClick={() => setShowMore5(!showMore5)}>
                 Can I switch between professions in my account?
                <img
                  src={vite_1}
                  className={`arrow-icon ${showMore5 ? 'rotate' : ''}`} />
               
              </h3>
              {showMore5 && (
                <p className="extra-info">
                  Absolutely. While you'll select a primary profession when setting up your account, you can easily switch between different professional profiles or create custom workspaces that blend tools from multiple professions.
                </p>
              )}
            </div>
              <h2>Still have questions? We're here to help.</h2>



              <div className="contact-support">
                     <h4>Contact Support</h4>
      <img src={arrow_icon}  className="arrow-icon" />
 
    </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Frequent;
