import React from 'react'


export default function Hero() {
  return (
    <>
        <div className="container hero-container">
 
            <div className="hero-img">
              <img src="https://thumbs.dreamstime.com/b/project-management-diagram-virtual-screen-business-finance-technology-concept-project-management-diagram-virtual-screen-130068869.jpg" alt="logo" className='hero-imgage' />
            </div>
            <div className="hero-content">
              <h1>Platform for cross-functional work</h1>
              <p> Brings all your tasks, teammates, and tools together. 
                It is flexible and easy for all teams to use, so you can 
                deliver quality work together, faster.
              </p>
              <a href="#link" className="links hero-link">See How It Works</a>
            </div>
       
        </div>
      </>
  )
}
