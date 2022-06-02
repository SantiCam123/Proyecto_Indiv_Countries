import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { getNameCountries } from "../Redux/Actions";
import '../CSS/Nav.css'


export default function Nav() {
    const dispatch = useDispatch()
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNameCountries(name));
        setName('')
    }

    return (
        <nav className="nav">
            <div className="reset">
            <Link to='/home'><h5>Henry's Travel</h5></Link>
            </div>
            <div className="activity">
            <Link to='/activity'>Create a new activity!</Link>
            </div>
            <form className="searchBar">
                <input type='text' placeholder="Search for..." onChange={(e) => handleInputChange(e)} />
                <button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
            </form>
        </nav>
    )
}