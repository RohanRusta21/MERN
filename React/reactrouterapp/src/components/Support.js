import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  function clickHandler(){
     
      navigate("/about");
  }
  function backHandler(){
    navigate(-1);
  }
return (
  <div>
      <div>Support</div>
      <button onClick={clickHandler}>Move to about</button>
      <button onClick={backHandler}>go back</button>
  </div>
)
}

export default Support