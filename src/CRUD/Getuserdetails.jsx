import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'
import { useNavigate } from 'react-router-dom';

const Userdetails = () => {
    const [dat, setDat] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        loaduser();
    }, []);

    const loaduser = async () => {
        try{
        const getusrdtls = await axios.get("http://localhost:8088/getalluserdetails");
        setDat(getusrdtls.data);
        console.log(getusrdtls.data);
        }
        catch (error){
            console.log(error);
        }

    }
    const deleteHandler =  async (dbid) => {

        try{
        // window.alert(`Delete button clicked  ${dbid}`);
        const dltusr = await axios.delete(`http://localhost:8088/deleteuserdetailsbyid/${dbid}`);
        // navigator("/userdetails");
        loaduser();

        }

        catch(err){
            console.log(err);
        }
    }

    const updateNavigator = (dbid) => {
        navigator(`/edit/${dbid}`);
       
    }

    return (

        <div>
            <table id='getusers'>
                <tr>
                    <th id='tableheader'>Id</th>
                    <th id='tableheader'>Firstname</th>
                    <th id='tableheader'>Lastname</th>
                    <th id='tableheader'>Email</th>

                </tr>

                {dat.map((item, index) =>
                    <tr key={index}>
                        <td id='tabledata'>{index+1}</td>
                        <td id='tabledata'>{item.firstname}</td>
                        <td id='tabledata'>{item.lastname}</td>
                        <td id='tabledata'>{item.em} 
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteHandler(item.id)}>Delete</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => updateNavigator(item.id)}>Update</button></td>

                    </tr>)}


                           </table>
        </div>);
}



export default Userdetails;