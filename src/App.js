import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  // const [data, setData] = useState([]);
  const [data, setData] = useState(
    {
    name: '', 
    age: ''
    });
  
   
  // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(datarr => setData(datarr))
 
  const changeHandler = e=>{
    setData({...data, [e.target.name]: e.target.value});
    console.log(e.target.name)
  }
  const submitHandler = e=>{
    e.preventDefault();
    fetch('https://crudoperationsusingfetchreact-default-rtdb.firebaseio.com/data.json', 
    
    {
      method:"POST",
      body: JSON.stringify(data),
    }
    
    ).then(res => alert('Data posted')).catch(err => console.log(err));
  }

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label>Name:</label><br/>
          <input type="text" placeholder='Name' name='name' onChange={changeHandler} /><br/>
          <label>Age:</label><br/>
          <input type="text" placeholder='Age' name='age' onChange={changeHandler}/><br/>
          <input type="submit" value='submit'/>
        </form>
        {/* {data.map(item => <p key={item.id}>{item.email}</p>)} */}

      </center>


    </div>
  );
}

export default App;
