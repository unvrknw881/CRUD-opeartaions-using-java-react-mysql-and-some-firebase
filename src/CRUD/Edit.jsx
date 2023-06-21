import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





const Edit = () => {

    const params = useParams();
    let navigator = useNavigate();
    const [dat, setDat] = useState(
        {
            firstname: '',
            lastname: '',
            em: '',
        });

        
    const loadUser = async () => {
         
         const getusrdtlsbyid = await axios.get(`http://localhost:8088/getuserdetailsbyid/${params.databaseid}`);

        console.log(getusrdtlsbyid.data);
        setDat({         
            firstname: getusrdtlsbyid.data.firstname,
            lastname: getusrdtlsbyid.data.lastname,
            em: getusrdtlsbyid.data.em,});

    }
    
    const updateHandler = async (e) => {

        e.preventDefault()
        const updt = await axios.put(`http://localhost:8088/updateuserdetailsbyid/${params.databaseid}`, {...dat});
        // console.log(dat);
        navigator('/userdetails')
    }
    
    useEffect(() => {
    loadUser();

    }, []);

    


    return (<div>
        <center>
            <h2>Update the user Details</h2>

            <form onSubmit={updateHandler}>
                <table>
                    <tr>
                        <td><label>First name:<sup>*</sup></label></td>
                        <td id='textbox'><input type="text" autoFocus required size='50' value={dat.firstname} name='firstname' onChange={(e) => setDat({...dat, [e.target.name]: e.target.value})} /></td>                                              
                    </tr>

                    <tr>
                        <td><label>Last name:<sup>*</sup></label></td>
                        <td id='textbox'><input type="text" required size='50' value={dat.lastname} name='lastname' onChange={(e) => setDat({...dat, [e.target.name]: e.target.value})}/></td>
                    </tr>

                    <tr>
                        <td><label>Email:<sup>*</sup></label></td>
                        <td id='textbox'><input type="email" required size='50' value={dat.em} name='em' onChange={(e) => setDat({...dat, [e.target.name]: e.target.value})}/></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><input type="submit"  value="Update" /></td>
                    </tr>

                </table>
            </form>
            

        </center>
    </div>);


}


export default Edit;