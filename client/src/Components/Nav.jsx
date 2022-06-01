import React from "react";
import {Link} from 'react-router-dom';
import { filterCountryByContinent, getAllCountries } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import '../CSS/Nav.css'

export default function Nav() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)

    function handlerClick(e){
        e.preventDefault();
        dispatch(getAllCountries())
    }

    function handlerFilterC(e){
        if(e.target.value === 'All') return dispatch(getAllCountries());
        dispatch(filterCountryByContinent(e.target.value))
    }

    return (
        <div className="nav">
            <div className="reset">
            <button onClick={e => handlerClick(e)}><h5>Henry's Travel</h5></button>
            </div>
            <div className="options">
            <select>
                <option value=''>Sort alphabetically</option>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
            </select>
            <select onChange={(e) => handlerFilterC(e)}>
                <option value='All'>Filter by Continent</option>
                <option value='America'>America</option>
                <option value='Europe'>Europe</option>
                <option value='Africa'>Africa</option>
                <option value='Asia'>Asia</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctic'>Antarctic</option>
            </select>
            <select>
                <option value=''>Filter by Activity</option>
            </select>
            <select>
                <option value=''>Filter by Population</option>
                <option value='Highest'>Highest</option>
                <option value='Lowerest'>Lowerest</option>
            </select>
            </div>
            <div>
            <Link to='/activity'>Create a new activity!</Link>
            </div>
            <form>
                <input type='text' placeholder="Search for..." />
            </form>
        </div>
    )
}