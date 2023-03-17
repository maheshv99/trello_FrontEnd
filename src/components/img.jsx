import React from 'react';
import img1 from './wall.png'
import '../App.css'
import './signUp/content.css'
import './img.css'


const Img = () => {
   
    return (
        <div>
             <div className='imgSetup'>
                
                <div className='textinImag'>
                    <h1>Trello brings all your  tasks, team mates, and  tools together</h1>
                    <h3>Keep everything in the same place—even if your team isn’t.</h3>
                     <br/>
                    <button className='signbtn11' >Sign-up it's free ! click on above button</button>
                   
                </div>
            <div>
           <img src={img1} alt=""/>
            </div> 
            </div>
            <div className='wave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L60,218.7C120,213,240,203,360,213.3C480,224,600,256,720,256C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
        </div>
    );
}

export default Img;
