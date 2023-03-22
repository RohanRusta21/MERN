import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // function changeFirstHandler(event){
  //   setFirstName(event.target.value);
  //   // console.log(event.target.value);
  //   // console.log(event.target);
  //   console.log(firstName);
  // }
  // function changeLastHandler(event){
  //   setLastName(event.target.value);
  //   console.log(lastName);
  // }
  const [formData,setFormData] = useState({firstName:"", lastName:"", email:"",comments:"",isVisible:true, mode:"", favCar:""})

  console.log(formData);

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData(prevFormData => {
      return {...prevFormData,
        [name]:type === "checkbox" ? checked : value
    }
    })
      
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder='first name'
          onChange={changeHandler}
          name="firstName"
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder='last name'
          onChange={changeHandler}
          name="lastName"
        />
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder='enter email '
          onChange={changeHandler}
          name="email"
        />
        <br/>
        <br/>
        <textarea
          placeholder='enter your comments'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br/>
        <br/>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'> I am visible</label>
        <br/>
        <br/>
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="online-mode"
            id='online-mode'
            checked={formData.mode === "online-mode"}
          />
          <label htmlFor='online-mode'>Online Mode</label>
          <br/>
          <br/>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="offline-mode"
            id='offline-mode'
            checked={formData.mode === "offline-mode"}
          />
          <label htmlFor='offline-mode'>Offline Mode</label>
        </fieldset>
        <br/>
        <br/>
        <select onChange={changeHandler} name="favCar" id='favCar' value={formData.favCar}>
          <option value="XUV">XUV</option>
          <option value="Audi">Audi</option>
          <option value="Ferrari">Ferrari</option>
        </select>
        <button value="submit">submit</button>

      </form>

    </div>
  );
}

export default App;
