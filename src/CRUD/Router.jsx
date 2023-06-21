import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Register from './Register.jsx';
import Edit from './Edit.jsx';
import Err from './Pagenotfound.jsx';
import Userdetails from './Getuserdetails.jsx'



const Routercomponent = () => {


    return (<div id='container'>
        <Router>
            <nav>
                <Link to='/'>Register</Link> &nbsp;&nbsp;
                {/* <Link to='/edit'>Edit Details</Link>&nbsp;&nbsp; */}
                <Link to='/userdetails'>List of users from database</Link> 

            </nav> <br /><br /><br />
            <Routes>
                <Route path='/' element={<Register />} />
                <Route path='/edit/:databaseid' element={<Edit />} />
                <Route path='/userdetails' element={<Userdetails />} />


                {/* Default router page not found msg. */}
                <Route path='*' element={<Err />} />        
                



            </Routes>

        </Router>

    </div>);
}

export default Routercomponent;