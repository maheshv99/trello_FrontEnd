import React,{useState} from 'react';
import './signUp/content.css';
import NavBar from './signUp/navbar';
import { Link, useNavigate } from 'react-router-dom';
import icon from './trello_logo_icon.png';

const Login = () => {
      const [formData,setFormData]=useState([]);
    const navigation=useNavigate();

    const handleForm = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }; 


    const handlesub= async (e)=>{
        e.preventDefault();
        console.log(formData);
        const {Email,Password}=formData;
      
        const response = await fetch('https://trello-back-end-beta.vercel.app/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({Email,Password})
        })
   
        const data = await response.json();
      
        const data1 ={name:data.username}
       
        navigation('/dashboard',{ state: {data1} })
    }
    return (
        <div>
            <NavBar/>
             <div className='hh'>
            
            <div className='bd'>
                <form onSubmit={handlesub} method='get'> 
                <fieldset>
                    <img width='100px' src={icon} alt="images"/><br /><br/>
                    <legend>Login for Trello</legend><br/><br/>
                    <label for="email">Email     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp; </label>
                    <input type="email" name="Email" id="email" onChange={handleForm} autoFocus required/><br/>
                    <br/>
                    <label for="password">Password  :&nbsp;&nbsp; </label>
                    <input type="password" name="Password" id="password" onChange={handleForm} autoFocus required /><br/><br/>

                    
                   
                    <input type="submit" value="Login" className='sub'/><br/><br/>
                    <Link to='/'>Back to home page!</Link>

                </fieldset>
            </form> 
            </div>
        </div>
        </div>
       
    );
}

export default Login;
