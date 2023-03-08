import React from 'react';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Deleteform from './delete';
import TransportRegistration from './project';
import Post from './Styles/get';
import UpdateForm from './update';
import "../src/Styles/route.css";

function Dum(){
    return (
        <div className='App'>
                 <Router>
                    <div class='nav'>
                        <h1 id='title'>Hire Here</h1>
                        <div class='nav-link'>
                    <Link to='/'><button><b>HOME</b></button></Link>
                    <Link to='/update'><button><b>UPDATE</b></button></Link>
                    <Link to='/Styles/get'><button><b>VIEW</b></button></Link>
                    <Link to='/delete'><button><b>DELETE</b></button></Link>
                    </div>
                    </div>
                   
                <Routes>
                
                <Route path='/' element={<TransportRegistration/>}/>
                <Route path='/Styles/get' element={<Post/>}/>
                <Route path='/update' element={<UpdateForm/>}/>
                <Route path='/delete' element={<Deleteform/>}/>

                </Routes>
                </Router>

        </div>
    )
}

export default Dum;