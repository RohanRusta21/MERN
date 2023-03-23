import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    function clickHandler(){
       
        navigate("/support");
    }
  return (
   <div>
    This is home page
    <button onClick={clickHandler}>Move to Support</button>
   </div>
  )
}

export default Home