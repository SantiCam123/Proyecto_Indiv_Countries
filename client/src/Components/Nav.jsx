import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { getNameCountries } from "../Redux/Actions";
import '../CSS/Nav.css'
import Swal from "sweetalert2";


export default function Nav(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!name){
            return Swal.fire({
                title: 'You have to put the name of the country',
                icon: 'warning',
                showConfirmButton: false,
                timer: 2000
        })
        }
        dispatch(getNameCountries(name));
        setName('')
        props.setCurrentPage(1)
    }

    return (
        <nav className="nav">
            <div className="home">
            <Link to='/home'><h5 className="thome">Henry's Travel</h5></Link>
            </div>
            <div className="Bactivity">
            <Link to='/activity'><h5 className="tcreate">Create a new activity!</h5></Link>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className="searchBar" type='text' value={name} placeholder="Search for..." onChange={(e) => handleInputChange(e)} />
                <button type='submit' className="search">Search</button>
            </form>
        </nav>
    )
}