import React from 'react'
import { useNavigate } from 'react-router-dom';

const Labs = () => {
    const navigate = useNavigate();
    function clickHandler(){
       
        navigate("/about");
    }
  return (
    <div>
     <div>Labs</div><br/>
     <button onClick={clickHandler}>Move to Labs page</button>
    </div>
  )
}

export default Labs