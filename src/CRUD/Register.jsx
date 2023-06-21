import React, {useState} from 'react';
import '../App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Edit from './Edit';
import axios from 'axios';

const Register = () => {

    const [val, setVal] = useState({
        firstname: '',
        lastname: '',
        em: '',

    });

    const navigator = useNavigate();


    // const {firstname, secondname, email} = {...val};

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log({...val});
        
        try{
        const postusrdtls = await axios.post("http://localhost:8088/adduser", {...val});
        navigator("/userdetails") 
    }
        catch(err){
            console.log(err);
        }
        
        setVal({
            firstname: '',
            secondname: '',
            email: '',
        });
    }
    return (<div>
    
    
        <center>
            <h2>Registration Form</h2>
            
                <form onSubmit={submitHandler}>
                    <table>
                    <tr>
                        <td><label>First name:<sup>*</sup></label></td>
                        <td id='textbox'><input type="text" autoFocus required minLength='1' maxLength='20' size='50' name='firstname' value={val.firstname} onChange={e => setVal({...val, [e.target.name]: e.target.value})}/></td>
                    </tr>

                    <tr>
                        <td><label>Last name:<sup>*</sup></label></td>
                        <td id='textbox'><input type="text" required size='50' name='lastname' value={val.lastname} onChange={e => setVal({...val, [e.target.name]: e.target.value})}/></td>
                    </tr>

                    <tr>
                        <td><label>Email:<sup>*</sup></label></td>
                        <td id='textbox'><input type="email" required size='50' name='em' value={val.em}  onChange={e => setVal({...val,[e.target.name]: e.target.value})}/></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><input type='submit' value='SUBMIT'/></td>
                    </tr>
                    
                    </table>

                </form>
            
        </center>
    
    </div>
    );
}


export default Register;