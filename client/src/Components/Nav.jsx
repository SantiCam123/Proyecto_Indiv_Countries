import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { getNameCountries } from "../Redux/Actions";
import '../CSS/Nav.css'


export default function Nav(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('');

    useEffect(() => {
        dispatch(getNameCountries(name))
    }, [dispatch, name])

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        props.setCurrentPage(1)
    }

    return (
        <nav className="nav">
            {console.log(name)}
            <div className="home">
            <Link to='/home' style={{textDecoration: 'none'}}><h5 className="thome">Henry's Travel</h5></Link>
            </div>
            <div className="Bactivity">
            <Link to='/activity' style={{textDecoration: 'none'}}><h5 className="tcreate">Create a new activity!</h5></Link>
            </div>
            <form>
                <input className="searchBar" type='text' value={name} placeholder="Search a country or a continent..." onChange={(e) => handleInputChange(e)} />
            </form>
        </nav>
    )
}