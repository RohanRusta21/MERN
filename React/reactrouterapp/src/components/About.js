import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    function clickHandler(){
       
        navigate("/");
    }
  return (
    <div>
        <div>About</div>
        <button onClick={clickHandler}>Move to home</button>
    </div>
  )
}

export default About